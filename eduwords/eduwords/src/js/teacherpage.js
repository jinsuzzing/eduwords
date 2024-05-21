import React, { useState } from "react";
import NavbarT from "../Component/NavbarT";
import Navbar from "../Component/Navbar";
import "../css/teacherpage.css";
import { Link, useNavigate } from "react-router-dom";
import gptbtn from "../img/gptbtn.png";
import btn1 from "../img/btn1.png";
import btn2 from "../img/btn2.png";

const type = sessionStorage.getItem("mem_type");
const mem_id = sessionStorage.getItem("mem_id");
const mem_name = sessionStorage.getItem("mem_name");
const mem_address = sessionStorage.getItem("mem_address");
const mem_number = sessionStorage.getItem("mem_number");
const mem_email = sessionStorage.getItem("mem_email");

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

const Teacherpage = () => {
  const navigate = useNavigate();

  const studentColumn = 5;

  const columns = Math.ceil(students.length / studentColumn);

  const tableData = Array.from({ length: columns }, (_, columnIndex) => {
    const start = columnIndex * studentColumn;
    const end = start + studentColumn;
    return students.slice(start, end);
  });

  const handleStudentClick = (student) => {
    navigate(`/scorechart/${student.id}`);
  };

  return (
    <div>
      <header>{type === 1 ? <NavbarT /> : <Navbar />}</header>
      <br />
      <h2 className="titleText">·내 학생관리</h2>
      <br />
      <br />
      <br />
      <br />
      <h3 className="teacherText">
        학생 이름을 클릭하면 학생의 정보를 확인하실 수 있어요.
        <br />
        <br />
      </h3>
      <table className="tableData">
        <tbody>
          <tr>
            {tableData.map((columnStudents, index) => (
              <td key={index}>
                {columnStudents.map((student) => (
                  <div
                    key={student.id}
                    className="stu"
                    onClick={() => handleStudentClick(student)}
                  >
                    {student.name}
                  </div>
                ))}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <br />
      <h2 className="questionText">· 문제 생성</h2>
      <br />
      <Link to="/createai">
        <img src={gptbtn} className="gptimg"></img>
      </Link>
      <div className="btn12div">
        <Link to="/createaproblem">
          <img src={btn1} className="button1"></img>
        </Link>
        <Link to="">
          <img src={btn2} className="button2"></img>
        </Link>
      </div>
    </div>
  );
};

export default Teacherpage;
