import React from "react";
import NavbarT from "./Component/NavbarT";
import gptbtn from "../src/img/gptbtn.png";
import btn1 from "../src/img/btn1.png";
import btn2 from "../src/img/btn2.png";
import "../src/css/createhome.css";
import Footer from "./Component/Footer";
import { Link, useNavigate } from "react-router-dom";

const CreateHome = () => {
  const navigate = useNavigate();

  const handleCreateProblemClick = () => {
    // 데이터 예시
    const dataToSend = { problemCount: 0 };

    navigate("/createaproblem", { state: dataToSend });
  };

  const handleCreateAIClick = () => {
    navigate("/wq");
  };

  return (
    <div>
      <NavbarT />
      <div className="contentbox1">
        <div className="gptbutton">
          <Link to="/createai">
            <img src={gptbtn} className="gptimg" alt="Create AI"></img>
          </Link>
        </div>
        <div className="bottombtn">
          <div className="button1" onClick={handleCreateProblemClick}>
            <img src={btn1} alt="Create Problem"></img>
          </div>
          <div className="button2" onClick={handleCreateAIClick}>
            <img src={btn2} alt="Another Action"></img>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default CreateHome;
