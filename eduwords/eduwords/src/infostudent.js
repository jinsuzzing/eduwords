import React from "react";
import NavbarT from "./Component/NavbarT";
import "./infostudent.css";
import { Bar } from "react-chartjs-2";
// chart.js import
// 설치 : npm install `--save react-chartjs-2 chart.js

const chartData = [
  { data: "2024-05-01", score: 60 },
  { data: "2024-05-03", score: 88 },
  { data: "2024-05-04", score: 72 },
  { data: "2024-05-05", score: 48 },
  { data: "2024-05-06", score: 80 },
];
const ScoreChart = ({ data }) => {
  const chartIn = {
    labels: data.map((item) => item.data), // 날짜 표기
    datasets: [
      {
        label: "점수",
        data: data.map((item) => item.score), // 점수
        backgroundColor: "white",
        borderColor: "#239aff",
        borderWidth: 2,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
  };

  return <Bar data={chartIn} options={options} />;
};
const infostudent = () => {
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
          <h3>5월 평균 점수 : {"75점"}</h3>
        </div>
      </div>
    </div>
  );
};

export default infostudent;
