import React from "react";
import NavbarT from "./Component/NavbarT";
import "./infostudent.css";

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
          <tr>{"표가 들어갈 자리입니다."}</tr>
          <tr>{"표가 들어갈 자리입니다."}</tr>
          <tr>{"표가 들어갈 자리입니다."}</tr>
          <tr>{"표가 들어갈 자리입니다."}</tr>
          <tr>{"표가 들어갈 자리입니다."}</tr>
          <tr>{"표가 들어갈 자리입니다."}</tr>
          <h3>5월 평균 점수 : {"75점"}</h3>
        </div>
      </div>
    </div>
  );
};

export default infostudent;
