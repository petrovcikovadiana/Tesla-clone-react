import "./App.css";
import Accessories from "./components/Accessories";
import Model3 from "./components/Model3";
import ModelY from "./components/ModelY";
import ModelX from "./components/ModelX";
import ModelS from "./components/ModelS";
import Navbar from "./components/Navbar";
import Testovaci from "./components/Testovaci";
import Create from "./Create";
import PageS from "./components/PageS";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import PageX from "./components/PageX";
import Page3 from "./components/Page3";
import Help from "./components/Help";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/pages" element={<PageS />} />
          <Route path="/pagex" element={<PageX />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/help" element={<Help />} />
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
