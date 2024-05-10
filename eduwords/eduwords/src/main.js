import "./main.css";
import React, { useState, useEffect } from "react";
import banner1 from "./img/banner1.png";
import banner2 from "./img/banner2.png";
import banner3 from "./img/banner3.png";
import back from "./img/background.png";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

const images = [banner1, banner2, banner3];
const background = [back];

function Banner() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((index + 1) % images.length); // 순환 로직
    }, 3000); // 3초 간격으로 이미지 전환
    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 제거
  }, [index]); // index 변경 시 useEffect 재실행
  return (
    <div>
      <img
        src={images[index]}
        alt={`Banner ${index + 1}`}
        style={{ width: "100%", marginTop: "40px" }}
      />
    </div>
  );
}

// 메뉴바

function main() {
  return (
    <div className="bodytext">
      <header>
        <Navbar />
      </header>
      <Banner />

      <br />

      <main>
        <img src={background} id="back"></img>
      </main>

      <Footer />
    </div>
  );
}
export default main;
