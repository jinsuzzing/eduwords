import React, { useState } from "react";
import NavbarT from "../Component/NavbarT";
import { Link } from "react-router-dom";

const NameList = () => {
  const [students, setStudents] = useState([
    "학생1",
    "학생2",
    "학생3",
    "학생4",
    "학생5",
    "학생6",
    "학생7",
    "학생8",
    "학생9",
    "학생10",
    "학생11",
    "학생12",
    "학생13",
    "학생14",
    "학생15",
  ]);

  return (
    <div>
      <NavbarT />
      <br />
      <h3 className="teacherText">
        <NameList students={students} />
        <br />
        <br />
      </h3>
    </div>
  );
};

export default NameList;
