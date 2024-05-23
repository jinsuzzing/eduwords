import React from "react";
import NavbarT from "../Component/NavbarT";
import ScoreChart from "../Component/Chart";
import "../css/infostudent.css";
import { useNavigate } from "react-router-dom";

const type = sessionStorage.getItem("mem_type");
const mem_id = sessionStorage.getItem("mem_id");
const mem_name = sessionStorage.getItem("mem_name");
const mem_address = sessionStorage.getItem("mem_address");
const mem_number = sessionStorage.getItem("mem_number");
const mem_email = sessionStorage.getItem("mem_email");

const chartData = [
  { date: "05-01", score: 60 },
  { date: "05-03", score: 88 },
  { date: "05-04", score: 72 },
  { date: "05-05", score: 48 },
  { date: "05-06", score: 80 },
];

const Infostudent = () => {
  const average = chartData.reduce((a, b) => a + b.score, 0) / chartData.length;

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/teacher");
  };

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
      <h3 className="stuName">{mem_name}</h3>
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
          <ScoreChart data={chartData} />
        </div>
      </div>
      <br></br>
      <br></br>
      <button className="is-btn" onClick={handleBack}>
        확인
      </button>
      <br></br>
      <br></br>
    </div>
  );
};

export default Infostudent;
