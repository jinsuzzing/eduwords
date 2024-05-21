import React, { useState } from "react";
import NavbarT from "../Component/NavbarT";
import Navbar from "../Component/Navbar";
import "../css/namelist.css";
import { useLocation, useNavigate } from "react-router-dom";

const type = sessionStorage.getItem("mem_type");
const mem_id = sessionStorage.getItem("mem_id");
const mem_name = sessionStorage.getItem("mem_name");
const mem_address = sessionStorage.getItem("mem_address");
const mem_number = sessionStorage.getItem("mem_number");
const mem_email = sessionStorage.getItem("mem_email");

const NameList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedAnswers, examInfo } = location.state;

  const students = [
    { id: 1, name: "오현우" },
    { id: 2, name: "김강운" },
    { id: 3, name: "전석균" },
    { id: 4, name: "이승재" },
    { id: 5, name: "김민성" },
    { id: 6, name: "문성진" },
    { id: 7, name: "김진수" },
    { id: 8, name: "김하늘" },
    { id: 9, name: "전송민" },
    { id: 10, name: "김도원" },
    { id: 11, name: "남예하" },
    { id: 12, name: "구희철" },
    { id: 13, name: "손준수" },
    { id: 14, name: "임경남" },
    { id: 15, name: "김민수" },
  ];

  const studentColumn = 5;

  const columns = Math.ceil(students.length / studentColumn);

  const handleSelectStudent = (student) => {
    navigate("/markpage", { state: { selectedAnswers, student, examInfo } });
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
      <div>
        <h2>학생 목록</h2>
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              <button onClick={() => handleSelectStudent(student)}>
                {student.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NameList;
