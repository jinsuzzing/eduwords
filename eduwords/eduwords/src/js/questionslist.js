import React, { useState, useEffect } from "react";
import tb from "../img/tb.png";
import "../css/questionslist.css";
import NavbarT from "../Component/NavbarT";
import { useLocation, useNavigate } from "react-router-dom";

const QuestionsList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const examInfo = location.state?.examInfo || {};
  const { examName, startDate, endDate } = examInfo;

  const handleTableClick = () => {
    navigate("/namelist");
  };

  return (
    <div>
      <NavbarT />
      <img src={tb} className="tbimg" alt="table"></img>
      <table className="t-listtable" onClick={handleTableClick}>
        <tbody>
          <tr className="t-listtable-tr1">
            <th colSpan={2}>
              {startDate} ~ {endDate}
            </th>
          </tr>
          <tr className="t-listtable-tr2">
            <td colSpan={2}>{examName}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default QuestionsList;
