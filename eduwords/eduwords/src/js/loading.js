import React, { useEffect, useState } from "react";
import "../css/loading.css";
import NavbarT from "../Component/NavbarT";
import Navbar from "../Component/Navbar";
import LoadingImg from "../img/loading.png";
import { useNavigate, useLocation } from "react-router-dom";

const type = sessionStorage.getItem("mem_type");

const Loading = () => {
  const [loadingText, setLoadingText] = useState("Loading");
  const navigate = useNavigate();
  const location = useLocation();
  const { problemCount } = location.state || {};

  useEffect(() => {
    const textArray = ["Loading", "Loading .", "Loading ..", "Loading ..."];
    let index = 0;

    const intervalId = setInterval(() => {
      setLoadingText(textArray[index]);
      index = (index + 1) % textArray.length;
    }, 500); // 0.5초마다 변경

    const timeoutId = setTimeout(() => {
      navigate("/wq", { state: { problemCount } });
    }, 3000); // 3초 후 이동

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    }; // 컴포넌트 언마운트 시 타이머 클리어
  }, [navigate, problemCount]);

  return (
    <div>
      {type === 1 ? <NavbarT /> : <Navbar />}
      <br />
      <br />
      <br />
      <div className="loadingdiv">
        <img src={LoadingImg} className="loadingImg" alt="Loading" />
        <br />
        <br />
        <b id="LoadingText">{loadingText}</b>
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
