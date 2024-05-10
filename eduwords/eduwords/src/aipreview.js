import React from "react";
<<<<<<< Updated upstream

const aipreview = () => {
  return <div>aipreview</div>;
};

export default aipreview;
=======
import Navbar from "./Component/Navbar";
import "../src/aipreview.css";

const Aipreview = () => {
  return (
    <div>
      <Navbar />
      <h2 className="aipreview-title">· 생성된 문제 미리보기</h2>
      <br></br>
      <br></br>
      <div className="aipreview-box"></div>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <button className="aipreview-btn">문제저장</button>
      </div>
    </div>
  );
};

export default Aipreview;
>>>>>>> Stashed changes
