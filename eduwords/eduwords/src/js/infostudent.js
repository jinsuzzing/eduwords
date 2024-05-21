import React from "react";
import NavbarT from "../Component/NavbarT";
import Navbar from "../Component/Navbar";
import ScoreChart from "../Component/ScoreChart";
import "../css/infostudent.css";

const type = sessionStorage.getItem("mem_type");

const chartData = [
  { date: "05-01", score: 60 },
  { date: "05-03", score: 88 },
  { date: "05-04", score: 72 },
  { date: "05-05", score: 48 },
  { date: "05-06", score: 80 },
];

const Infostudent = () => {
  const average = chartData.reduce((a, b) => a + b.score, 0) / chartData.length;
  return (
    <div>
      <header>{type === 1 ? <NavbarT /> : <Navbar />}</header>

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

export default Infostudent;
