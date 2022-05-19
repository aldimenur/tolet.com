import { Routes, Route, Link } from "react-router-dom";
import * as React from "react";
import "./App.css";
import "./index.css";
import Isi from "./components/Isi";
import Card from "./components/Card";
import PesanTiket from "./components/PesanTiket";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import { CardStyle } from "./components/Components.styled";

function App() {
  return (
    <div className="App ">
      <div className="Top-section bg-gray-800 h-96 ">
        <Navigation />
        <Card />
        <PesanTiket />
        <div className="login-section bg-green-400 w-full px-9 mx-auto w-64">
          <Isi />
          <CardStyle> YAYAYA </CardStyle>
          <Routes>
            <Route path="/Login" element={<Login />} />
          </Routes>
          <div className="text-center">
            <Link to="/Login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
