import React, { useState, useEffect } from "react";
import tb from "../src/img/tb.png";
import Navbar from "./Component/Navbar";
import "../src/questionslist.css";
import NavbarT from "./Component/NavbarT";

const QuestionsList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // 데이터를 받아오는 비동기 함수

    const fetchData = async () => {
      try {
        // 데이터를 받아오는 로직 (예: API 호출)
        const response = await fetch("데이터를 받아올 URL");
        const jsonData = await response.json();
        // 받아온 데이터를 state에 저장
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData(); // 데이터 받아오기 함수 호출
  }, []); // useEffect를 한 번만 호출하기 위해 빈 배열 전달

  const getDateRange = (startDate, endDate) => {
    const dates = [];
    const currentDate = new Date(startDate);
    const lastDate = new Date(endDate);

    while (currentDate <= lastDate) {
      dates.push(
        `${currentDate.getFullYear()}-${
          currentDate.getMonth() + 1
        }-${currentDate.getDate()}`
      );
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  // 시작 날짜와 종료 날짜 설정
  const startDate = "2024-05-10";
  const endDate = "2024-06-10";

  return (
    <div>
      <NavbarT />
      <img src={tb} className="tbimg"></img>
      <table className="t-listtable">
        <tr className="t-listtable-tr1">
          <th colSpan={2}>
            {startDate} ~ {endDate}
          </th>
        </tr>

        <tr className="t-listtable-tr2">
          {data.map((item, index) => (
            <td key={index} className="t-listtable-td">
              <p>{item.date}dd</p>
              <p>{item.name}dd</p>
            </td>
          ))}
        </tr>
      </table>
    </div>
  );
};

export default QuestionsList;
