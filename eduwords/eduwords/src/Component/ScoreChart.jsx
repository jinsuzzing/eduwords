import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useLocation, useParams } from "react-router-dom";
import "../css/scorechart.css";
import NavbarT from "./NavbarT";
Chart.register(...registerables);

const studentsData = {
  1: [
    { date: "2024-01-01", score: 85 },
    { date: "2024-02-01", score: 90 },
  ],
  2: [
    { date: "2024-01-01", score: 78 },
    { date: "2024-02-01", score: 82 },
  ],
  // 다른 학생들의 데이터 추가
};

const ScoreChart = () => {
  const type = sessionStorage.getItem("mem_type");
  const mem_id = sessionStorage.getItem("mem_id");
  const mem_name = sessionStorage.getItem("mem_name");

  const { studentId } = useParams();
  const location = useLocation();
  const score = location.state?.score || null; // MarkPage에서 전달된 점수

  // 기존 데이터 불러오기
  const data = studentsData[studentId] || [];

  // 새로운 점수를 데이터에 추가
  const updatedData = score
    ? [...data, { date: new Date().toISOString().split("T")[0], score }]
    : data;

  // 평균 점수 계산
  const averageScore =
    updatedData.reduce((sum, item) => sum + item.score, 0) / updatedData.length;

  const chartIn = {
    labels: updatedData.map((item) => item.date),
    datasets: [
      {
        label: "점수",
        data: updatedData.map((item) => item.score),
        backgroundColor: "#239aff",
        borderColor: "#239aff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          font: {
            size: 14,
          },
          color: "#239aff",
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
    maintainAspectRatio: true,
  };

  return (
    <div>
      <NavbarT />
      <div>
        <h2 className="chart-title">·{} 성적 보기</h2>
        <br></br>
        <div className="chart-box">
          <div className="chart">
            <Bar data={chartIn} options={options} />
            <h3 className="chart-h3">평균 점수: {averageScore.toFixed(2)}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreChart;
