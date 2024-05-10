import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./main";
import Join from "./join";
import Login from "./login";
import Tp from "./termspage";
import reportWebVitals from "./reportWebVitals";
import Joinsuccess from "./joinsuccess";
import Createhome from "./createhome";
import Find from "./find";
import Createai from "./createai";
import Questionsok from "./questionsok";
import Questionslist from "./questionslist";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tp" element={<Tp />} />
        <Route path="/js" element={<Joinsuccess />} />
        <Route path="/createhome" element={<Createhome />} />
        <Route path="/find" element={<Find />} />
        <Route path="/createai" element={<Createai />} />
        <Route path="/questionsok" element={<Questionsok />} />
        <Route path="/questionslist" element={<Questionslist />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
