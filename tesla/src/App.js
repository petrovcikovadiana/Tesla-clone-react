import "./App.css";
import Accessories from "./components/Accessories";
import Model3 from "./components/Model3";
import ModelY from "./components/ModelY";
import ModelX from "./components/ModelX";
import ModelS from "./components/ModelS";
import Testovaci from "./components/Testovaci";
import Create from "./Create";
import PageS from "./components/PageS";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import PageX from "./components/PageX";
import Page3 from "./components/Page3";
import Cybertruck from "./components/Cybertruck";
import Help from "./components/Help";
import PageY from "./components/PageY";
import Nav from "./components/Nav";
import Obchod from "./components/Obchod";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/pages" element={<PageS />} />
        <Route path="/pagex" element={<PageX />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/cybertruck" element={<Cybertruck />} />
        <Route path="/help" element={<Help />} />
        <Route path="/pagey" element={<PageY />} />
        <Route path="/obchod" element={<Obchod />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <>
      <div>
        <Nav />
        <div className="section">
          <ModelY />
        </div>
        <div className="section">
          <Model3 />
        </div>
        <ModelS />
        <ModelX />
        <Testovaci />
        <Accessories />
      </div>
    </>
  );
}

export default App;
