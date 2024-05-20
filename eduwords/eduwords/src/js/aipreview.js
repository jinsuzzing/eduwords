import React, { useState, useEffect } from "react";
import "../css/aipreview.css";
import NavbarT from "../Component/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

const Aipreview = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [previewQuestions, setPreviewQuestions] = useState([]);
  const [exQuestion, setExQuestion] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    option5: "",
  });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const problemCount = location.state?.problemCount || 0;
    setPreviewQuestions(
      Array.from({ length: problemCount }, (_, index) => ({
        id: index + 1,
        content: `문제 ${index + 1}`,
      }))
    );
  }, [location.state]);

  const handleGenerateai = () => {
    console.log("Navigating with previewQuestions:", previewQuestions);
    navigate("/wq", {
      state: {
        previewQuestions: previewQuestions,
      },
    });
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExQuestion((prevExQuestion) => ({
      ...prevExQuestion,
      [name]: value,
    }));
  };

  const deleteQ = (id) => {
    setPreviewQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== id)
    );
  };

  const columns = previewQuestions.reduce((result, item, index) => {
    const columnIndex = index % 2;
    if (!result[columnIndex]) result[columnIndex] = [];
    result[columnIndex].push(item);
    return result;
  }, []);

  const clickCheck = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <NavbarT />
      <h2 className="aipreview-title">· 생성된 문제 미리보기</h2>
      <div className="aipreview-box">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="aipreview-column">
            {column.map((previewQuestion) => (
              <div key={previewQuestion.id} className="aipreview-question">
                <p>{previewQuestion.content}</p>
                {editing ? (
                  <div>
                    <input
                      className="editQ"
                      type="text"
                      name="question"
                      value={exQuestion.question}
                      onChange={handleInputChange}
                    />
                    <br />
                    <br />
                    <input
                      className="radioA1"
                      type="radio"
                      name="option"
                      id="option1"
                      value={1}
                      onClick={clickCheck}
                    />
                    <input
                      className="editA1"
                      type="text"
                      name="option1"
                      value={exQuestion.option1}
                      onChange={handleInputChange}
                    />
                    <br />
                    <input
                      className="radioA2"
                      type="radio"
                      name="option"
                      id="option2"
                      value={2}
                      onClick={clickCheck}
                    />
                    <input
                      className="editA2"
                      type="text"
                      name="option2"
                      value={exQuestion.option2}
                      onChange={handleInputChange}
                    />
                    <br />
                    <input
                      className="radioA3"
                      type="radio"
                      name="option"
                      id="option3"
                      value={3}
                      onClick={clickCheck}
                    />
                    <input
                      className="editA3"
                      type="text"
                      name="option3"
                      value={exQuestion.option3}
                      onChange={handleInputChange}
                    />
                    <br />
                    <input
                      className="radioA4"
                      type="radio"
                      name="option"
                      id="option4"
                      value={4}
                      onClick={clickCheck}
                    />
                    <input
                      className="editA4"
                      type="text"
                      name="option4"
                      value={exQuestion.option4}
                      onChange={handleInputChange}
                    />
                    <br />
                    <input
                      className="radioA5"
                      type="radio"
                      name="option"
                      id="option5"
                      value={5}
                      onClick={clickCheck}
                    />
                    <input
                      className="editA5"
                      type="text"
                      name="option5"
                      value={exQuestion.option5}
                      onChange={handleInputChange}
                    />
                    <br />
                    <br />
                    <button className="aipreview-btn1" onClick={handleSave}>
                      저장
                    </button>
                  </div>
                ) : (
                  <div>
                    <p className="Q">{exQuestion.question}</p>
                    <p className="A1">① {exQuestion.option1}</p>
                    <p className="A2">② {exQuestion.option2}</p>
                    <p className="A3">③ {exQuestion.option3}</p>
                    <p className="A4">④ {exQuestion.option4}</p>
                    <p className="A5">⑤ {exQuestion.option5}</p>
                    <button className="aipreview-btn1" onClick={handleEdit}>
                      수정
                    </button>
                    <button
                      className="aipreview-btn2"
                      onClick={() => deleteQ(previewQuestion.id)}
                    >
                      삭제
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <div>
        <button className="aipreview-btn" onClick={handleGenerateai}>
          문제저장
        </button>
      </div>
    </div>
  );
};

export default Aipreview;
