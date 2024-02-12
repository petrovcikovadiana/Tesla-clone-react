import React from "react";
import Img1 from "../assets/access.jpg";
import { Link } from "react-router-dom";

function Accessories() {
  return (
    <div
      className="snap-start h-screen w-screen flex text-5xl z-20 			"
      style={{
        background: `url(${Img1})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center mx-auto pt-32">
        <h1 className="text-4xl">Příslušenství</h1>
        <Link to="/obchod">
          <button className="  bg-opacity-65 border-4 bg-lightWhite  text-[#171a20] text-sm rounded-md py-2 w-80 md:w-80 tracking-wider mx-auto mt-[560px] md:mt-[500px] xl:mt-[500px] xxl:mt-[730px]">
            Nakupovat
          </button>
        </Link>
        <ul className=" flex-row text-gray-50 text-[13px] gap-5 mt-16 hidden md:flex">
          <li>Tesla © 2023</li>
          <li>Soukromí a právní informace</li>
          <li>Kontakt</li>
          <li>Novinky</li>
          <li>Dostávat novinky</li>
          <li>Kde nás najdete</li>
        </ul>
      </div>
    </div>
  );
}

export default Accessories;
