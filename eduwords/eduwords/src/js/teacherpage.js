import React, { useState } from "react";
import NavbarT from "../Component/NavbarT";
import "../css/teacherpage.css";
import { Link } from "react-router-dom";
import gptbtn from "../img/gptbtn.png";
import btn1 from "../img/btn1.png";
import btn2 from "../img/btn2.png";

const Teacherpage = () => {
  // 학생목록 useState로 관리 ( 학생수가 5명 이상이면 다음 행으로 넘어가는 로직임)
  const [students, setStudents] = useState([
    "학생1",
    "학생2",
    "학생3",
    "학생4",
    "학생5",
    "학생6",
    "학생7",
    "학생8",
    "학생9",
    "학생10",
    "학생11",
    "학생12",
    "학생13",
    "학생14",
    "학생15",
  ]);

  // 한 열에 표시할 최대 학생 수
  const studentColumn = 5;

  // 열의 총 수 계산
  const columns = Math.ceil(students.length / studentColumn);

  // 테이블 데이터 생성
  const tableData = Array.from({ length: columns }, (_, columnIndex) => {
    const start = columnIndex * studentColumn;
    const end = start + studentColumn;
    return students.slice(start, end);
  });

  return (
    <div>
      <header>
        <NavbarT />
      </header>
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
            {/* 테이블 데이터 
            (map >> 함수 호출 후 배열로 재선언 하는 js 내장함수임)
            각 열의 학생들을 포함하는 배열 생성후, 
            td 태그안에 div 태그로 학생 이름을 세로로 나열함.
             */}
            {tableData.map((columnStudents, index) => (
              <td key={index}>
                {columnStudents.map((student, studentIndex) => (
                  <div key={studentIndex} className="stu">
                    {student}
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
