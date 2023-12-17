import "./App.css";
import Accessories from "./components/Accessories";
import Model3 from "./components/Model3";
import ModelY from "./components/ModelY";
import ModelX from "./components/ModelX";
import ModelS from "./components/ModelS";
import Navbar from "./components/Navbar";
import Testovaci from "./components/Testovaci";
import Create from "./Create";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <>
      <Navbar />

      <ModelY />
      <Model3 />
      <ModelS />
      <ModelX />
      <Testovaci />
      <Accessories />
    </>
  );
}

export default App;
