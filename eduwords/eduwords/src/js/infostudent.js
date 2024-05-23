import React, { useState } from "react";
import NavbarT from "../Component/NavbarT";
import ScoreChart from "../Component/Chart";
import "../css/infostudent.css";
import { useNavigate } from "react-router-dom";

const Infostudent = () => {
  const [type, setType] = useState(sessionStorage.getItem("mem_type"));
  const [memId, setMemId] = useState(sessionStorage.getItem("mem_id"));
  const [name, setName] = useState(sessionStorage.getItem("mem_name"));
  const [address, setAddress] = useState(sessionStorage.getItem("mem_address"));
  const [number, setNumber] = useState(sessionStorage.getItem("mem_number"));
  const [email, setEmail] = useState(sessionStorage.getItem("mem_email"));

  const chartData = [
    { date: "05-01", score: 60 },
    { date: "05-03", score: 88 },
    { date: "05-04", score: 72 },
    { date: "05-05", score: 48 },
    { date: "05-06", score: 80 },
  ];

  const average = chartData.reduce((a, b) => a + b.score, 0) / chartData.length;
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/teacher");
  };

  const handleSave = () => {
    // 여기에 수정된 데이터를 서버에 전송하는 코드를 추가
    const updatedInfo = {
      memId,
      name,
      address,
      number,
      email,
    };
    // 예시로 console.log로 출력
    console.log(updatedInfo);

    // 서버에 데이터를 전송하여 DB를 업데이트
    // 예시:
    // fetch('/api/updateUser', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(updatedInfo),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Success:', data);
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    // });

    // 저장 후 페이지를 이동하거나 사용자에게 알림
    alert("정보가 저장되었습니다.");
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
      <h3 className="stuName">{name}</h3>
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
      <br />
      <div className="infoEdit">
        <label>
          이름:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          주소:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <label>
          번호:
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>
        <label>
          이메일:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button className="is-btn" onClick={handleSave}>
          저장
        </button>
      </div>
      <br />
      <br />
      <button className="is-btn" onClick={handleBack}>
        확인
      </button>
      <br />
      <br />
    </div>
  );
};

export default Infostudent;
