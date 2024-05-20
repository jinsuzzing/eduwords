import React, { useState, useEffect } from "react";
import stb from "../img/stb1.png";
import "../css/studyroom.css";
import Navbar from "../Component/NavbarT";
import { useLocation } from "react-router-dom";

const StudyRoom = () => {
  const location = useLocation();
  const examInfo = location.state?.examInfo || {};
  const { examName, startDate, endDate } = examInfo;

  return (
    <div>
      <Navbar />
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
