import React, { useState, useEffect } from "react";
import axios from "axios";
import "../src/css/allpreview.css";
import NavbarT from "../src/Component/NavbarT";
import Navbar from "../src/Component/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

const AllPreview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedQuestions = location.state?.selectedQuestions || [];
  const [examName, setExamName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [students, setStudents] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8081/studentsByType",
          "0"
        );
        setStudents(response.data);
        console.log("학생 데이터:", response.data);
      } catch (error) {
        console.error("학생 정보를 불러오는 중 오류 발생:", error);
      }
    };

    fetchData();
  }, []);

  const divideIntoColumns = (arr, columns) => {
    const divided = [];
    const chunkSize = Math.ceil(arr.length / columns);
    for (let i = 0; i < columns; i++) {
      divided.push(arr.slice(i * chunkSize, (i + 1) * chunkSize));
    }
    return divided;
  };

  const selectedColumns = divideIntoColumns(selectedQuestions, 2);
  const type = sessionStorage.getItem("mem_type");

  const handleConfirm = async () => {
    // 문제와 정답 데이터를 가져오기
    let workbook_qes;
    try {
      const response = await axios.post("http://localhost:8081/getQuestionsAndAnswers", {
        selectedQuestions: selectedQuestions.map((q) => q.qes_seq),
      });
      workbook_qes = response.data.map((question) => ({
        qes_seq: question.qes_seq,
        qes_desc: question.qes_desc,
        qes_detail: question.qes_detail,
        qes_ex1: question.qes_ex1,
        qes_ex2: question.qes_ex2,
        qes_ex3: question.qes_ex3,
        qes_ex4: question.qes_ex4,
        qes_ex5: question.qes_ex5,
        qes_answer: question.qes_answer,
        qes_level: question.qes_level,
        qes_type: "객관식",
      }));
      console.log("workbook_qes:", workbook_qes);
    } catch (error) {
      console.error("문제와 정답을 가져오는 중 오류 발생:", error);
      return;
    }

    const answer_check = selectedStudents.map((student) => ({
      mem_id: student.mem_id,
      answer: workbook_qes.map((q) => ({
        qes_seq: q.qes_seq,
        qes_answer: q.qes_answer,
      })),
    }));

    const tb_test = {
      workbook_name: examName,
      start_date: startDate,
      end_date: endDate,
      workbook_qes: workbook_qes,
      answer_check: answer_check,
    };

    console.log("tb_test:", tb_test);

    try {
      const response = await axios.post("http://localhost:8081/submitWorkbook", tb_test);
      console.log("서버 응답:", response.data);
    } catch (error) {
      console.error("시험지 제출 중 오류 발생:", error);
    }

    selectedStudents.forEach((student) => {
      navigate("/studyroom", {
        state: {
          studentName: student.mem_name,
          studentId: student.mem_id,
          selectedQuestions,
          examName,
          startDate,
          endDate,
        },
      });
    });
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleSelectStudent = (student) => {
    if (selectedStudents.some((s) => s.mem_id === student.mem_id)) {
      setSelectedStudents(
        selectedStudents.filter((s) => s.mem_id !== student.mem_id)
      );
    } else {
      setSelectedStudents([...selectedStudents, student]);
    }
  };

  return (
    <div>
      {type === "1" ? <NavbarT /> : <Navbar />}
      <h2 className="all-title">· 미리보기</h2>
      <div className="all-container">
        <div className="all-box">
          {selectedColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="all-column">
              {column.map((question, questionIndex) => (
                <div key={question.qes_seq} className="all-question">
                  <p>
                    {columnIndex * selectedColumns[0].length + questionIndex + 1}. {question.qes_desc}
                  </p>
                  <p>① {question.ex1}</p>
                  <p>② {question.ex2}</p>
                  <p>③ {question.ex3}</p>
                  <p>④ {question.ex4}</p>
                  <p>⑤ {question.ex5}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <br />
      <div className="all-box2">
        <br />
        <div className="date-picker">
          <label>시험지 이름 : </label>
          <input
            className="all-input-box1"
            type="text"
            value={examName}
            onChange={(e) => setExamName(e.target.value)}
          />
          <br />
          <div className="alldate-box">
            <label>시작날짜 : </label>
            <input
              className="all-input-box2"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <label>끝나는날짜 : </label>
            <input
              className="all-input-box2"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <div className="namelist-box">
          <h2 className="namelist-title">학생 목록</h2>
          <ul>
            {students.map((student) => (
              <li
                className={`namelist-li ${
                  selectedStudents.some((s) => s.mem_id === student.mem_id)
                    ? "selected"
                    : ""
                }`}
                key={student.mem_id}
                onClick={() => handleSelectStudent(student)}
              >
                {student.mem_name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <br />
      <div className="all-btnbox">
        <button className="all-back" onClick={handleBack}>
          뒤로가기
        </button>
        <button className="all-btn" onClick={handleConfirm}>
          확인
        </button>
      </div>
    </div>
  );
};

export default AllPreview;