import React from "react";
import Navbar from "./Component/Navbar";
import gptbtn from "../src/img/gptbtn.png";
import btn1 from "../src/img/btn1.png";
import btn2 from "../src/img/btn2.png";
import "../src/createhome.css";

const createhome = () => {
  return (
    <div>
      <Navbar />
      <div className="contentbox1">
        <div className="gptbutton">
          <img src={gptbtn}></img>
        </div>
        <br />
        <div className="button1">
          <img src={btn1}></img>
        </div>
        <div className="button2">
          <img src={btn2}></img>
        </div>
      </div>
    </div>
  );
};

export default createhome;
