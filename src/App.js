import * as React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import {
  IsiHomePage,
  Login,
  Register,
  LoginVerif,
  EliteReward,
  CekOrder,
} from "./components/index";

function App() {
  useEffect(() => {
    document.title = "Tiket.com Halaman Utama";
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<IsiHomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="loginverif" element={<LoginVerif />} />
        <Route path="elitereward" element={<EliteReward />} />
        <Route path="cekorder" element={<CekOrder />} />
      </Routes>
    </Router>
  );
}

export default App;
