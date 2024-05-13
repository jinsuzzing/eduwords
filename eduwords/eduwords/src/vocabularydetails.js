import React from "react";
import "../src/vocabularydetails.css";
import NavbarT from "./Component/NavbarT";
import { useParams } from "react-router-dom";

const vocabularydetails = () => {
  //   const { id } = useParams;

  return (
    <div>
      <NavbarT />

      <h1 className="vd-title">· 내 단어장</h1>

      <div className="vd-box">{/* <p>ID: {id}</p> */}</div>
    </div>
  );
};

export default vocabularydetails;
