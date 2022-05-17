import { Routes, Route, Link } from "react-router-dom";
import * as React from "react";
import "./App.css";
import "./index.css";
import Isi from "./components/Isi";
import Card from "./components/Card";
import PesanTiket from "./components/PesanTiket";
import Login from "./components/Login";
import Navigation from "./components/Navigation";

// const CardStyle = styled.div`
//   background-color: blue;
// `;

function App() {
  return (
    <div className="App">
      <div className="Top-section bg-gray-800 h-96 ">
        <Navigation />
        <Card />
        <PesanTiket />
      </div>
      <div className="login-section align-middle fixed p-24 m-6 bg-red-400 rounded-lg drop-shadow-xl float-left">
        <Isi />
        {/* <CardStyle></CardStyle> */}
        <Routes>
          {/* iki ws bener awkm cara gae routing e */}
          <Route path="/login" element={<Login />} />
        </Routes>
        <Link to="/Login">Login</Link>
      </div>
    </div>
  );
}

export default App;
