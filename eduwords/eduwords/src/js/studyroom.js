import React, { useEffect, useState } from "react";
import axios from "axios";
import tb from "../img/tb.png";
import "../css/questionslist.css";
import NavbarT from "../Component/NavbarT";
import { useNavigate, useLocation } from "react-router-dom";

const QuestionsList = () => {
  const navigate = useNavigate();
  const currentLocation = useLocation();
  const [examsInfo, setExamsInfo] = useState([]);
  const mem_id = sessionStorage.getItem("mem_id");

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더합니다.
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    axios
      .post("http://localhost:8081/getAll")
      .then((response) => {
        console.log(response.data); // 데이터 확인
        const formattedExams = response.data.map((exam) => ({
          ...exam,
          startline: formatDate(exam.startline),
          deadline: formatDate(exam.deadline),
        }));
        setExamsInfo(formattedExams);
      })
      .catch((error) => {
        console.error("단어를 가져오는 중 오류 발생:", error);
      });
  }, []);

  const handleTableClick = (exam) => {
    navigate("/testpaper", {
      state: {
        selectedAnswers: currentLocation.state?.selectedAnswers,
        examInfo: exam,
      },
    });
  };

  const handleEditClick = (exam) => {
    navigate("/editexam", { state: { examInfo: exam } });
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
                {exam.startline} ~ {exam.deadline}
              </th>
            </tr>
            <tr className="t-listtable-tr2">
              <td colSpan={2} className="exam-name">
                {exam.work_name}
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default QuestionsList;
