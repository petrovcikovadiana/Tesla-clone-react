import "./App.css";
import Accessories from "./components/Accessories";
import Model3 from "./components/Model3";
import ModelY from "./components/ModelS";
import ModelX from "./components/ModelX";
import ModelS from "./components/ModelY";
import Navbar from "./components/Navbar";
import Testovaci from "./components/Testovaci";
import About from "./components/About";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-x-hidden">
      <Navbar />

      <ModelS />
      <Model3 />

      <ModelY />

      <ModelX />
      <Testovaci />
      <Accessories />
    </div>
  );
}

export default App;
