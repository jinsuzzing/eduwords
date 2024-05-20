import React, { useState } from "react";
import NavbarT from "../Component/NavbarT";
import "../css/namelist.css";

const NameList = () => {
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
      <NavbarT />
      <br />
      <h2 className="titleText">·문제 제출 학생 명단</h2>
      <br />
      <br />
      <br />

      <table className="tableData">
        <tr>
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
      </table>
    </div>
  );
};

export default NameList;
