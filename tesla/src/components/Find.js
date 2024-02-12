import React from "react";
import Nav from "./Nav";
import kolo from "../assets/kolo.svg";
import bl from "../assets/bl.svg";
import blgray from "../assets/blgray.svg";
import car from "../assets/car.svg";
import scrum from "../assets/scrum.svg";
import sound from "../assets/sound.svg";
import tesl from "../assets/tesl.svg";
import Navblack from "./Navblack";
import mapa from "../assets/map.avif";

function Find() {
  return (
    <div>
      <Navblack />
      <div className="h-screen w-screen bg-mapa">
        <div className="flex pt-24 pl-10">
          <input
            type="text"
            id="psc"
            className="bg-veryLightGray  text-black text-base rounded-md   block w-1/3 p-4 "
            placeholder="Zadat adresu"
          />
        </div>
        <div className="flex md:flex-row gap-5 pl-10 pt-10 text-lightBlack">
          <div className="flex md:flex-row gap-2 bg-veryLightGray py-2 px-6 rounded-md">
            <img src={tesl} alt="tesla" />
            <p>Prodejny a nákupní galerie</p>
          </div>
          <div className="flex md:flex-row gap-2 bg-veryLightGray py-2 px-6 rounded-md">
            {" "}
            <img src={scrum} alt="scrum" />
            <p>Servis</p>
          </div>
        </div>
        <div className="flex md:flex-row gap-5 pl-10 pt-5 text-lightBlack">
          <div className="flex md:flex-row gap-2 bg-veryLightGray py-2 px-6 rounded-md">
            <img src={car} alt="tesla" />
            <p>Opravny karosérií</p>
          </div>
          <div className="flex md:flex-row gap-2 bg-veryLightGray py-2 px-6 rounded-md">
            {" "}
            <img src={bl} alt="scrum" />
            <p>Nabíječky Supercharger</p>
          </div>
        </div>
        <div className="flex md:flex-row gap-5 pl-10 pt-5 text-lightBlack">
          <div className="flex md:flex-row gap-2 bg-veryLightGray py-2 px-6 rounded-md">
            <img src={sound} alt="tesla" />
            <p>Superchargery i pro vozy jiných značek</p>
          </div>
        </div>
        <div className="flex md:flex-row gap-5 pl-10 pt-5 text-lightBlack">
          <div className="flex md:flex-row gap-2 bg-veryLightGray py-2 px-6 rounded-md">
            <img src={blgray} alt="tesla" />
            <p>Nabíjení v cíli</p>
          </div>
          <div className="flex md:flex-row gap-2 bg-veryLightGray py-2 px-6 rounded-md">
            {" "}
            <img src={kolo} alt="scrum" />
            <p>Samooblužná testovací jízda</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Find;
