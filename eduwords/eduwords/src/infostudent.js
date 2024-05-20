import React from "react";
import NavbarT from "./Component/NavbarT";
import { Bar } from "react-chartjs-2";
import { Chart, Ticks, registerables } from "chart.js";
import "../src/css/infostudent.css";
Chart.register(...registerables);

const chartData = [
  { data: "05-01", score: 60 },
  { data: "05-03", score: 88 },
  { data: "05-04", score: 72 },
  { data: "05-05", score: 48 },
  { data: "05-06", score: 80 },
];
const ScoreChart = ({ data }) => {
  const chartIn = {
    labels: data.map((item) => item.data), // 날짜 표기
    datasets: [
      {
        label: "점수",
        data: data.map((item) => item.score), // 점수
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
          maxRotation: 0, // 최대 회전 각도
          minRotation: 0, // 최소 회전 각도
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
    maintainAspectRatio: false,
  };

  return <Bar data={chartIn} options={options} />;
};
const infostudent = () => {
  const average = chartData.reduce((a, b) => a + b.score, 0) / chartData.length;
  return (
    <div>
      <header>
        <NavbarT />
      </header>

      <br />
      <h2 className="titleText">· 내 학생관리</h2>
      <br />
      <br />
      <br />
      <br />
      <h3 className="stuName">{"학생이름"}</h3>
      <div className="infoBody">
        <div className="doneHomework">
          <th>· 과제수행{"(100%)"}</th>
          <br />
          <br />
          <tr>{"24년 05월 01일 시험 (AI 출제)"}</tr>
          <tr>{"24년 05월 02일 시험 (직접 출제)"}</tr>
          <tr>{"24년 05월 03일 시험 (AI 출제)"}</tr>
          <tr>{"24년 05월 04일 시험 (AI 출제)"}</tr>
          <tr>{"24년 05월 05일 시험 (직접 출제)"}</tr>
        </div>
        <div className="lookEasy">
          <th>· 최근 성적 한눈에 보기</th>
          <br />
          <br />
          <ScoreChart data={chartData} />
          <h3>5월 평균 점수 : {average.toFixed(2) + "점"}</h3>
        </div>
      </div>
      <br></br>
      <br></br>
      <button className="is-btn">확인</button>
      <br></br>
      <br></br>
    </div>
  );
};

export default infostudent;
