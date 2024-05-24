import React, { useEffect, useState } from "react";
import tb from "../img/tb.png";
import "../css/questionslist.css";
import NavbarT from "../Component/NavbarT";
import { useNavigate, useLocation } from "react-router-dom";

const QuestionsList = () => {
  const navigate = useNavigate();
  const currentLocation = useLocation();
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
    navigate("/namelist", {
      state: {
        selectedAnswers: currentLocation.state?.selectedAnswers,
        examInfo: exam,
      },
    });
  };

  return (
    <div>
      <NavbarT />
      <img src={tb} className="tbimg" alt="table"></img>
      <div className="t-margin-box"></div>
      {examsInfo.map((exam, index) => (
        <table
          key={index}
          className="t-listtable"
          onClick={() => handleTableClick(exam)}
        >
          <tbody>
            <tr className="t-listtable-tr1">
              <th colSpan={2}>
                {exam.startDate} ~ {exam.endDate}
              </th>
            </tr>
            <tr className="t-listtable-tr2">
              <td colSpan={2} className="exam-name">
                {exam.examName}
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default QuestionsList;
