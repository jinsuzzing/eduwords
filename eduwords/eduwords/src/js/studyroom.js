import React, { useEffect, useState } from "react";
import stb from "../img/stb1.png";
import "../css/studyroom.css";
import Navbar from "../Component/Navbar";
import NavbarT from "../Component/NavbarT";
import { useNavigate } from "react-router-dom";

const type = sessionStorage.getItem("mem_type");

const StudyRoom = () => {
  const navigate = useNavigate();
  const [examInfo, setExamInfo] = useState({});

  useEffect(() => {
    const storedExamInfo = JSON.parse(localStorage.getItem("examInfo"));
    if (storedExamInfo) {
      const currentDate = new Date();
      const endDate = new Date(storedExamInfo.endDate);
      if (currentDate <= endDate) {
        setExamInfo(storedExamInfo);
      } else {
        localStorage.removeItem("examInfo");
      }
    }
  }, []);

  const { examName, startDate, endDate } = examInfo;

  const handleTableClick = () => {
    navigate("/testpaper", { state: { examInfo: examInfo } });
  };

  return (
    <div>
      {type === "1" ? <NavbarT /> : <Navbar />}
      <img src={stb} className="sbimg" alt="table"></img>
      <table className="s-listtable" onClick={handleTableClick}>
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
