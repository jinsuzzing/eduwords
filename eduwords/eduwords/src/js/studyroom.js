import React, { useEffect, useState } from "react";
import stb from "../img/stb1.png";
import "../css/studyroom.css";
import Navbar from "../Component/Navbar";
import NavbarT from "../Component/NavbarT";
import { useNavigate } from "react-router-dom";

const type = sessionStorage.getItem("mem_type");

const StudyRoom = () => {
  const navigate = useNavigate();
  const [examsInfo, setExamsInfo] = useState([]);

  useEffect(() => {
    const storedExamsInfo = JSON.parse(localStorage.getItem("examsInfo")) || [];
    const currentDate = new Date();
    const validExams = storedExamsInfo.filter(
      (exam) => new Date(exam.endDate) >= currentDate
    );
    setExamsInfo(validExams);
  }, []);

  const handleTableClick = (exam) => {
    navigate("/testpaper", { state: { examInfo: exam } });
  };

  return (
    <div>
      {type === "1" ? <NavbarT /> : <Navbar />}
      <img src={stb} className="sbimg" alt="table"></img>
      <div className="s-margin-box"></div>
      {examsInfo.map((exam, index) => (
        <table
          key={index}
          className="s-listtable"
          onClick={() => handleTableClick(exam)}
        >
          <tbody>
            <tr className="s-listtable-tr1">
              <th colSpan={2}>
                {exam.startDate} ~ {exam.endDate}
              </th>
            </tr>
            <tr className="s-listtable-tr2">
              <td className="exam-name" colSpan={2}>
                {exam.examName}
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default StudyRoom;
