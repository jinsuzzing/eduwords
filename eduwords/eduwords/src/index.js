import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./main";
import Join from "./join";
import Login from "./login";
import Tp from "./termspage";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tp" element={<Tp />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
