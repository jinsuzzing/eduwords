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
    selectedAnswers = {},
    examInfo = {},
    studentId: testStudentId,
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
      } catch (error) {
        console.error("학생 정보를 불러오는 중 오류 발생:", error);
      }
    };

    fetchData();
  }, []);

  const handleSelectStudent = (student) => {
    navigate("/markpage", {
      state: {
        studentName: student.mem_name,
        studentId: student.mem_id,
        selectedAnswers,
        examInfo,
      },
    });
  };

  return (
    <div>
      <NavbarT />
      <br />
      <h2 className="titleText">· 문제 제출 학생 명단</h2>
      <br />
      <br />
      <div className="namelist-container">
        <div className="namelist-box">
          <h2 className="namelist-title">학생 목록</h2>
          <ul>
            {students.map((student) => (
              <li
                className={`namelist-li ${
                  student.mem_id === testStudentId
                    ? "blue-border"
                    : "red-border"
                }`}
                key={student.mem_id}
                onClick={() => handleSelectStudent(student)}
              >
                {student.mem_name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NameList;
