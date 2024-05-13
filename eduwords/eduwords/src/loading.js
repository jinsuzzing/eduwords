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
      <br />
      <div className="loadingdiv">
        <img src={LoadingImg} className="loadingImg" alt="Loading" />
        <br />
        <br />
        <b id="LoadingText">Loading..</b>
        <br />
        <br />
        <table id="LoadingNow">
          <tr id="Load1">문제 생성중입니다.</tr>
          <br />
          <tr id="Load2">잠시만 기다려주세요.</tr>
        </table>
      </div>
    </div>
  );
};

export default Loading;
