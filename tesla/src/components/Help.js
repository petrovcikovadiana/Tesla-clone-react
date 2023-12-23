import React from "react";
import heroImage from "../assets/images.jpeg";
import Navbar from "./Navbar";

function Help() {
  return (
    <div>
      <Navbar />
      <div
        className="h-screen w-screen relative"
        style={{
          background: `url(${heroImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="text-lightWhite absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto flex flex-col items-center justify-center w-[550px]">
          <h1 className="text-4xl mb-3">Pomozte mi s výběrem</h1>
          <p className="text-sm text-center mb-7 ">
            Zjistěte, které modely Tesla nejlépe splní vaše potřeby. Záleží na
            vašem rozpočtu, řidičských návycích i životním stylu.
          </p>
          <button className="bg-blue-600 rounded-sm py-2 px-16 text-lightWhite text-sm">
            Začínáme
          </button>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8">
          <ul className=" flex-row text-gray-50 text-[13px] gap-5 hidden md:flex ">
            <li>Tesla © 2023</li>
            <li>Soukromí a právní informace</li>
            <li>Kontakt</li>
            <li>Novinky</li>
            <li>Dostávat novinky</li>
            <li>Kde nás najdete</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Help;
