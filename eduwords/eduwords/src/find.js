import React from "react";
import Navbar from "./Component/Navbar";
import "./find.css";

const find = () => {
  return (
    <div className="findBody">
      <Navbar />
      <br />
      <br />
      <br />
      <div>
        <h1 className="idFont">아이디찾기</h1>
        <br />
        <div className="idDiv">
          <table id="idTable">
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
              <hr />
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
              <hr />
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
        </div>
        <br />
        <button className="findIdBtn" onClick={""}>
          아이디찾기
        </button>
      </div>
      <br />
      <br />
      <div className="pwDiv">
        <h1 className="pwFont">비밀번호 찾기</h1>
        <br />

        <table id="pwTable">
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
            <hr />
            <tr>
              <th colSpan={2}>이름</th>
              <td>
                <input
                  type="text"
                  name="fullname"
                  placeholder="이름을 입력하세요"
                  required
                ></input>
              </td>
            </tr>
            <hr />
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
            <hr />
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
        <br />
        <button className="findPwBtn" onClick={""}>
          비밀번호 찾기
        </button>
      </div>
    </div>
  );
};

export default find;
