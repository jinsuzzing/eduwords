import React, { useEffect, useState } from "react";
import tb from "../img/tb.png";
import "../css/questionslist.css";
import NavbarT from "../Component/NavbarT";
import { useNavigate, useLocation } from "react-router-dom";

const QuestionsList = () => {
  const navigate = useNavigate();
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

  const handleTableClick = () => {
    navigate("/namelist", {
      state: {
        selectedAnswers: currentLocation.state?.selectedAnswers,
        examInfo: examInfo,
      },
    });
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
            <td colSpan={2} className="exam-name">
              {examName}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default QuestionsList;
