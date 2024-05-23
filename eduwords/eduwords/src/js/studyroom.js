import React, { useEffect, useState } from "react";
import stb from "../img/stb1.png";
import "../css/studyroom.css";
import Navbar from "../Component/Navbar";
import NavbarT from "../Component/NavbarT";
import { useLocation } from "react-router-dom";

const type = sessionStorage.getItem("mem_type");

const StudyRoom = () => {
  const currentLocation = useLocation();
  const [examInfo, setExamInfo] = useState({});

  useEffect(() => {
    const storedExamInfo = JSON.parse(localStorage.getItem("examInfo"));
    if (storedExamInfo) {
      const currentDate = new Date();
      const endDate = new Date(storedExamInfo.endDate);
      if (currentDate <= endDate) {
        setExamInfo(storedExamInfo);
      } else {
        localStorage.removeItem("examInfo"); // 만료된 데이터 삭제
      }
    }
  }, []);

  const { examName, startDate, endDate } = examInfo;

  return (
    <div>
      {type === "1" ? <NavbarT /> : <Navbar />}
      <img src={stb} className="sbimg" alt="table"></img>
      <table className="s-listtable">
        <tbody>
          <tr className="s-listtable-tr1">
            <th colSpan={2}>
              {startDate} ~ {endDate}
            </th>
          </tr>
          <tr className="s-listtable-tr2">
            <td colSpan={2}>{examName}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudyRoom;
