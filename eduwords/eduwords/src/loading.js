import React from "react";
import "./loading.css";
import NavbarT from "./Component/NavbarT";
import LoadingImg from "./img/loading.png";

const Loading = () => {
  return (
    <div>
      <NavbarT />
      <br />
      <br />
      <div className="loadingdiv">
        <img src={LoadingImg} className="loadingImg" alt="Loading" />
        <br />
        <br />
        <b id="LoadingText">Loading..</b>
      </div>
    </div>
  );
};

export default Loading;
