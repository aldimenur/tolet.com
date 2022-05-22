import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import * as React from "react";
import "./App.css";
import "./index.css";
import Card from "./components/Card";
import PesanTiket from "./components/PesanTiket";
import Navigation from "./components/Navigation";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="App bg-slate-800">
        <Navigation />
        <Routes>
          <Route exact path="/about" element={About} />
          <Route path="/home" element={Card} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
