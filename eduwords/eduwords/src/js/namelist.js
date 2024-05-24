import React from "react";
import NavbarT from "../Component/Navbar";
import Navbar from "../Component/Navbar";
import "../css/namelist.css";
import { useLocation, useNavigate } from "react-router-dom";

const type = sessionStorage.getItem("mem_type");

const NameList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    selectedAnswers = [],
    examInfo = {},
    mem_id,
    mem_name,
  } = location.state || {};

  const students = [
    { id: 1, mem_name: "John Doe" },
    { id: 2, mem_name: "김강운" },
    { id: 3, mem_name: "전석균" },
    { id: 4, mem_name: "이승재" },
    { id: 5, mem_name: "김민성" },
    { id: 6, mem_name: "문성진" },
    { id: 7, mem_name: "김진수" },
    { id: 8, mem_name: "김하늘" },
    { id: 9, mem_name: "전송민" },
    { id: 10, mem_name: "김도원" },
    { id: 11, mem_name: "남예하" },
    { id: 12, mem_name: "구희철" },
    { id: 13, mem_name: "손준수" },
    { id: 14, mem_name: "임경남" },
    { id: 15, mem_name: "김민수" },
  ];

  const studentColumn = 5;

  const columns = Math.ceil(students.length / studentColumn);

  const handleSelectStudent = (student) => {
    navigate("/markpage", {
      state: {
        studentName: student.mem_name,
        studentId: student.id,
        selectedAnswers,
        student,
        examInfo,
        mem_id,
        mem_name,
      },
    });
  };

  const tableData = Array.from({ length: columns }, (_, columnIndex) => {
    const start = columnIndex * studentColumn;
    const end = start + studentColumn;
    return students.slice(start, end);
  });

  return (
    <div>
      {type === 1 ? <NavbarT /> : <Navbar />}
      <br />
      <h2 className="titleText">·문제 제출 학생 명단</h2>
      <br />
      <br />
      <div className="namelist-container">
        <div className="namelist-box">
          <h2 className="namelist-title">학생 목록</h2>
          <ul>
            {students.map((student) => (
              <li className="namelist-li" key={student.id}>
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
