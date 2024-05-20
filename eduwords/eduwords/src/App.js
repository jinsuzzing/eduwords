import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Join from "./js/join";
import Main from "./main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </div>
  );
}

export default App;
