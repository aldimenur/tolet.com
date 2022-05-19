import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import * as React from "react";
import "./App.css";
import "./index.css";
import Card from "./components/Card";
import PesanTiket from "./components/PesanTiket";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App bg-slate-800">
      <Navigation />
      <Card />
      <PesanTiket />
    </div>
  );
}

export default App;
