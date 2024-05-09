import React from "react";
import tb from "../src/img/tb.png";
import Navbar from "./Component/Navbar";
import "../src/questionslist.css";

const questionslist = () => {
  return (
    <div>
      <Navbar />

      <table className="listtable">
        <tr>
          <td className="listtd1">
            <p>2024-05-09</p>
          </td>
        </tr>
        <tr>
          <th>이름</th>
        </tr>
      </table>
      <div className="tb-bg">
        <img src={tb} className="tbimg"></img>
      </div>
    </div>
  );
};

export default questionslist;
