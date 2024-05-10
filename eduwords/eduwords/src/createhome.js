import React from "react";
import Navbar from "./Component/Navbar";
import gptbtn from "../src/img/gptbtn.png";
import btn1 from "../src/img/btn1.png";
import btn2 from "../src/img/btn2.png";
import "../src/createhome.css";
import Footer from "./Component/Footer";
import { Link } from "react-router-dom";

const createhome = () => {
  return (
    <div>
      <Navbar />
      <div className="contentbox1">
        <div className="gptbutton">
          <Link to="/createai">
            <img src={gptbtn} className="gptimg"></img>
          </Link>
        </div>
        <div className="bottombtn">
          <div className="button1">
            <img src={btn1}></img>
          </div>
          <div className="button2">
            <img src={btn2}></img>
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

export default createhome;
