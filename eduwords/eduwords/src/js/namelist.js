import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarT from "../Component/NavbarT";
import Navbar from "../Component/Navbar";
import "../css/namelist.css";
import { useNavigate, useLocation } from "react-router-dom";

const NameList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    selectedAnswers = [],
    examInfo = {},
    mem_id,
    mem_name,
  } = location.state || {};

  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8081/studentsByType",
          "0"
        );
        setStudents(response.data);
        console.log("응답", response.data);
      } catch (error) {
        console.error("학생 정보를 불러오는 중 오류 발생:", error);
      }
    };

    fetchData(); // 데이터 가져오는 함수 호출
  }, []);

  const handleSelectStudent = (student) => {
    navigate("/markpage", {
      state: {
        studentName: student.mem_name,
        studentId: student.mem_id,
        selectedAnswers,
        student,
        examInfo,
        mem_id,
        mem_name,
      },
    });
  };

  return (
    <div>
      <NavbarT />
      <br />
      <h2 className="titleText">·문제 제출 학생 명단</h2>
      <br />
      <br />
      <div className="namelist-container">
        <div className="namelist-box">
          <h2 className="namelist-title">학생 목록</h2>
          <ul>
            {students.map((student) => (
              <li className="namelist-li" key={student.mem_id}>
                <button
                  className="namelist-btn"
                  onClick={() => handleSelectStudent(student)}
                >
                  {student.mem_name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NameList;
