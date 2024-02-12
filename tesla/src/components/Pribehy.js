import React from "react";
import Nav from "./Nav";
import shift from "../assets/shift.avif";
import plant from "../assets/plant.avif";
import kilometre from "../assets/kilometre.avif";
import homeoffice from "../assets/homeoffice.avif";
import south from "../assets/south.avif";
import integred from "../assets/integred.avif";
import snowy from "../assets/snowy.avif";
import story from "../assets/story.avif";
import two from "../assets/two.avif";
import ethan from "../assets/ethan.png";
import Navblack from "./Navblack";

function Pribehy() {
  return (
    <div>
      <Navblack />
      <div className="flex items-center justify-center pt-32 ">
        <h1 className="text-4xl font-base">Příběhy zákazníků</h1>
      </div>
      <div className="flex md:flex-row flex-col flex-wrap gap-5 px-10  xxl:px-80 justify-center my-20">
        <div className="md:w-1/4">
          <img src={integred} alt="integred" className="rounded-md" />
          <h2 className="text-2xl pt-6 pb-3">
            Integrované systémy společnosti Tesla: Tesla pro Business
          </h2>
          <p className="text-base font-thin pb-10">Září 15, 2022</p>
        </div>
        <div className="md:w-1/4">
          <img src={shift} alt="integred" className="rounded-md" />
          <h2 className="text-2xl pt-6 pb-3">
            Přesun vozového parku o 200 vozech na vozidla Tesla{" "}
          </h2>
          <p className="text-base font-thin pb-10">Září 15, 2022</p>
        </div>{" "}
        <div className="md:w-1/4">
          <img src={shift} alt="snowy" className="rounded-md" />
          <h2 className="text-2xl pt-6 pb-3">
            Miyakojima Virtual Power Plant{" "}
          </h2>
          <p className="text-base font-thin pb-10"> Září 15, 2022</p>
        </div>
        <div className="md:w-1/4">
          <img src={kilometre} alt="integred" className="rounded-md" />
          <h2 className="text-2xl pt-6 pb-3">The Kilometre Millionaire </h2>
          <p className="text-base font-thin pb-10">Leden 7, 2020</p>
        </div>{" "}
        <div className="md:w-1/4">
          <img src={homeoffice} alt="integred" className="rounded-md" />
          <h2 className="text-2xl pt-6 pb-3">
            A home, an office and two Teslas powered by the sun 24/7{" "}
          </h2>
          <p className="text-base font-thin pb-10">Září 25, 2019</p>
        </div>
        <div className="md:w-1/4">
          <img src={south} alt="integred" className="rounded-md" />
          <h2 className="text-2xl pt-6 pb-3">
            South Melbourne home and office: powered by renewable energy, day{" "}
          </h2>
          <p className="text-base font-thin pb-10">Srpen 12, 2019</p>
        </div>
        <div className="md:w-1/4">
          <img src={snowy} alt="integred" className="rounded-md" />
          <h2 className="text-2xl pt-6 pb-3">Powering the Snowy Vet </h2>
          <p className="text-base font-thin pb-10">Září 30, 2022</p>
        </div>
        <div className="md:w-1/4">
          <img src={story} alt="integred" className="rounded-md" />
          <h2 className="text-2xl pt-6 pb-3">
            Meet Victoria Townsend, a customer of the South Australia Virtual
            Power{" "}
          </h2>
          <p className="text-base font-thin pb-10"> Září 30, 2019</p>
        </div>
        <div className="md:w-1/4">
          <img src={two} alt="integred" className="rounded-md" />
          <h2 className="text-2xl pt-6 pb-3">
            Meet Ron and Sherallee Andrews, customers of the South Australian
            Virtual Power Plant{" "}
          </h2>
          <p className="text-base font-thin pb-10">Červenec 15, 2019</p>
        </div>
      </div>
      <div className="bg-veryLightGray h-80 mx-auto text-center py-16">
        <h1 className="text-3xl pb-16">Submit your story, photo, or video</h1>
        <button
          onClick={() => (window.location = "mailto:yourmain@domain.com")}
          className="text-lg text-lightBlack bg-white py-2 px-5 rounded-md"
        >
          Pošlete nám e-mail
        </button>
        <ul className=" flex-row text-lightBlack text-[13px] gap-5 mt-16 hidden md:flex justify-center">
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

export default Pribehy;
