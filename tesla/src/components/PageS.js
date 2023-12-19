import React from "react";
import Navbar from "./Navbar";
import Img5 from "../assets/compositor-8.webp";
import Img2 from "../assets/ms.avif";
import Img3 from "../assets/9.jpg";
import Img4 from "../assets/bike.avif";
import ModelS from "./ModelS";

function PageS() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row absolute top-[500px] text-center justify-center items-center bottom-0 left-0 right-0 gap-16 text-lightWhite">
        <div>
          <h2 className="text-2xl pb-2">600 km</h2>
          <p className="text-sm">Dojezd (WLTP) </p>
        </div>
        <div>
          <h2 className="text-2xl pb-2">2,1 s </h2>
          <p className="text-sm">0-100 km/h* </p>
        </div>
        <div>
          <h2 className="text-2xl pb-2">322 km/h </h2>
          <p className="text-sm">Maximální rychlost </p>
        </div>
        <div>
          <h2 className="text-2xl pb-2">1020 hp </h2>
          <p className="text-sm">Napájení vozidla </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-7 absolute bottom-0 left-0 right-0 top-[670px] justify-center items-center	">
        <button className="bg-opacity-80 bg-lightBlack text-white text-base rounded-md py-3 w-[500px] md:w-[300px] tracking-wider">
          Objednat
        </button>
        <button className=" bg-opacity-65 bg-lightWhite text-lightBlack  text-base rounded-md py-3 w-[500px] md:w-[300px] tracking-wider">
          Testovací jízda
        </button>
      </div>
      <div className="w-screen flex justify-center items-center  ">
        <p className="text-sm text-center text-lightWhite top-[550px] md:top-[780px] absolute mx-auto">
          Zobrazené specifikace představují hodnoty pro vůz Model S Plaid.
        </p>
      </div>
      <ModelS />
      <div className="w-screen bg-black h-56    ">
        <p>Interiér budoucnosti</p>
      </div>
      <img src={Img5} alt="interior" />
      <div className="w-screen bg-black h-56    ">
        <p>Interiér budoucnosti</p>
      </div>
      <div className="flex flex-row text-lightWhite bg-black px-44 gap-32">
        <div>
          <img src={Img2} alt="interior" className="w-[558px] h-[313px]" />
        </div>
        <div className="w-[530px] items-center justify-center my-auto ">
          <h2 className="mb-4">Zůstaňte připojeni</h2>
          <p>
            Můžete přes Bluetooth bleskově připojit více zařízení nebo rychle
            nabíjet zařízení pomocí bezdrátového a 36W nabíjení USB-C.
          </p>
        </div>
      </div>
      <div className="flex flex-row text-lightWhite bg-black px-44 gap-32">
        <div className="w-[530px] items-center justify-center my-auto ">
          <h2 className="mb-4">Prostorový zvuk</h2>
          <p>
            Audiosystém s 22 reproduktory a výkonem 960 wattů s technologií
            aktivního potlačení hluku od vozovky nabízí fantastický poslech a
            kvalitu zvuku jako ve studiu.
          </p>
        </div>
        <div>
          <img src={Img3} alt="interior" className="w-[558px] h-[313px]" />
        </div>
      </div>
      <div className="flex flex-row text-lightWhite bg-black px-44 gap-32">
        <div>
          <img src={Img4} alt="interior" className="w-[558px] h-[313px]" />
        </div>
        <div className="w-[530px] items-center justify-center my-auto ">
          <h2 className="mb-4">Prostor pro všechno</h2>
          <p>
            Se zavazadlovým prostorem vpředu i vzadu a plně sklopnými sedadly
            není problém naložit jízdní kolo, aniž byste museli demontovat
            přední kolo, a s ním i vaše zavazadla.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PageS;
