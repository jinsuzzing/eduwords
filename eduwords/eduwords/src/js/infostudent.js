import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarT from "../Component/NavbarT";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "../css/infostudent.css";
import "../css/chart.css";

Chart.register(...registerables);

const Infostudent = () => {
  const [memId, setMemId] = useState(sessionStorage.getItem("mem_id"));
  const [name, setName] = useState(sessionStorage.getItem("mem_name"));
  const [address, setAddress] = useState(sessionStorage.getItem("mem_address"));
  const [number, setNumber] = useState(sessionStorage.getItem("mem_number"));
  const [email, setEmail] = useState(sessionStorage.getItem("mem_email"));

  const [chartData, setChartData] = useState([]);
  const [formattedData, setFormattedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:8081/getTests", {
          mem_id: memId,
        });

        const calculateScore = (studentAnswer, answerKey) => {
          let correctAnswers = 0;
          for (let i = 1; i < studentAnswer.length; i++) {
            if (studentAnswer[i] === answerKey[i]) {
              correctAnswers++;
            }
          }
          return (correctAnswers / answerKey.length) * 100;
        };

        const formattedData = response.data.map((item) => {
          const date = new Date(item.submitted_at);
          const formattedDate = date
            .toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })
            .replace(/\./g, "")
            .replace(/\s/g, "");

          const score = calculateScore(item.answer, item.answerCheck);

          return {
            date: formattedDate,
            workbookName: item.workbookName,
            score: score,
          };
        });

        setChartData(formattedData);
        setFormattedData(formattedData);
        console.log("응답", response.data);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      }
    };

    fetchData();
  }, [memId]);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/teacher");
  };

  const type = sessionStorage.getItem("mem_type");
  const mem_id = sessionStorage.getItem("mem_id");
  const mem_name = sessionStorage.getItem("mem_name");

  const { studentId } = useParams();
  const location = useLocation();
  const score = location.state?.score || null;
  const studentName = location.state?.studentName || "학생";

  const studentsData = {
    [studentId]: formattedData,
  };

  const data = studentsData[studentId] || [];
  const reversedData = data.slice().reverse();

  const averageScore =
    reversedData.reduce((sum, item) => sum + item.score, 0) /
    reversedData.length;

  const chartIn = {
    labels: reversedData.map((item) => item.date),
    datasets: [
      {
        label: "점수",
        data: reversedData.map((item) => item.score),
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
          <th>· 푼 문제집{"(100%)"}</th>
          <br />
          <br />
          {formattedData.map((item, index) => (
            <tr key={index}>{`${item.date} - ${item.workbookName}`}</tr>
          ))}
        </div>
        <div className="lookEasy">
          <h2 className="chart-title">학생 성적 보기</h2>
          <br></br>
          <div className="chart-box">
            <div className="chart">
              <Bar data={chartIn} options={options} />
              <h3 className="chart-h3">평균 점수: {averageScore.toFixed(2)}</h3>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="infoEdit"></div>
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
