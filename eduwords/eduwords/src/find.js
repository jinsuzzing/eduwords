import React from "react";
import Navbar from "./Component/Navbar";
import "./find.js";

const find = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <div>
        <h1>아이디찾기</h1>
        <table>
          <tbody>
            <tr>
              <th colSpan={2}>이름</th>
              <td>
                <input
                  type="text"
                  name="username"
                  placeholder="이름을 입력해주세요"
                  required
                ></input>
              </td>
            </tr>
            <tr>
              <th colSpan={2}>생년월일</th>
              <td>
                <input
                  type="date"
                  name="birthday"
                  id="birthday"
                  required
                ></input>
              </td>
            </tr>
            <tr>
              <th colSpan={2}>가입한 이메일</th>
              <td>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@naver.com"
                  required
                ></input>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="findIdBtn">아이디찾기</button>
      </div>
      <div>
        <h1>비밀번호 찾기</h1>
        <table>
          <tbody>
            <tr>
              <th colSpan={2}>아이디</th>
              <td>
                <input
                  type="text"
                  name="username"
                  placeholder="아이디를 입력해주세요"
                  required
                ></input>
              </td>
            </tr>
            <tr>
              <th colSpan={2}>이름</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default find;
