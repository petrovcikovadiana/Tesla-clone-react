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
import Powerwall from "./components/Powerwall";
import Megapack from "./components/Megapack";
import Charging from "./components/Charging";
import Homecharging from "./components/Homecharging";
import Supercharging from "./components/Supercharging";
import Clothes from "./components/Clothes";
import Lifestyle from "./components/Lifestyle";
import Storecharging from "./components/Storecharging";
import Prislusenstvi from "./components/Prislusenstvi";
import Jizda from "./components/Jizda";
import Pribehy from "./components/Pribehy";
import Udalosti from "./components/Udalosti";
import Videopruvodci from "./components/Videopruvodci";
import Find from "./components/Find";
import Trasa from "./components/Trasa";
import Technik from "./components/Technik";
import Karoserie from "./components/Karoserie";
import Info from "./components/Info";
import Doruceni from "./components/Doruceni";
import Navigation from "./Navigation/Navigation";

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
        <Route path="/powerwall" element={<Powerwall />} />
        <Route path="/megapack" element={<Megapack />} />
        <Route path="/charging" element={<Charging />} />
        <Route path="/homecharging" element={<Homecharging />} />
        <Route path="/supercharging" element={<Supercharging />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/storecharging" element={<Storecharging />} />
        <Route path="/prislusenstvi" element={<Prislusenstvi />} />
        <Route path="/jizda" element={<Jizda />} />
        <Route path="/pribehy" element={<Pribehy />} />
        <Route path="/udalosti" element={<Udalosti />} />
        <Route path="/videopruvodci" element={<Videopruvodci />} />
        <Route path="/find" element={<Find />} />
        <Route path="/trasa" element={<Trasa />} />
        <Route path="/technik" element={<Technik />} />
        <Route path="/karoserie" element={<Karoserie />} />
        <Route path="/info" element={<Info />} />
        <Route path="/doruceni" element={<Doruceni />} />
        <Route path="/navigation" element={<Navigation />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <>
      <div>
        <Nav />
        <div className="section ">
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
