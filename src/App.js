import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as React from "react";
import "./App.css";
import "./index.css";
import IsiHomePage from "./components/IsiHomePage";
import Login from "./components/Login";
import Register from "./components/Register";
import LoginVerif from "./components/LoginVerif";
import { useState } from "react";
import EliteReward from "./components/EliteReward";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IsiHomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="loginverif" element={<LoginVerif />} />
        <Route path="elitereward" element={<EliteReward />} />
      </Routes>
    </Router>
  );
}

export default App;
