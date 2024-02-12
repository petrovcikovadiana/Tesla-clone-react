import React from "react";
import mapa from "../assets/map.avif";
import Nav from "./Nav";
import icon3 from "../assets/icon-3.avif";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlinePlusCircle, AiOutlineSync } from "react-icons/ai";
import Navblack from "./Navblack";

function Trasa() {
  return (
    <div>
      <Navblack />
      {/* mapa start */}
      <div className="flex md:flex-row flex-col">
        <div className="md:w-1/4 xxl:w-1/5 pt-24 p-6 items-center justify-center mx-auto text-center">
          <h1 className="text-3xl pb-5 font-base">Cestování bez hranic</h1>
          <p className="text-sm pb-3">
            Zadejte jakýkoli cíl a zjistěte, jak vás k němu Tesla dopraví.
          </p>
          <hr class="border-1 border-slate-300   " />
          <div className="flex flex-row justify-between items-center">
            <img src={icon3} alt="icon" className="w-24" />
            <h3>Model 3 Long Range</h3>
            <AiOutlineDown />
          </div>
          <hr class="border-1 border-slate-300   " />

          <div className="text-start">
            <p className="text-lightGray py-5 ">Zadat adresu</p>
            <hr class="border-1 border-slate-500    " />
            <p className="text-lightGray py-5">Zadat cíl</p>
            <hr class="border-1 border-slate-500    " />
          </div>
          <div className="flex flex-row justify-between text-secondary text-sm pt-3">
            <div className="flex flex-row items-center justify-center gap-2">
              <p>Přidat zastávku</p>
              <AiOutlinePlusCircle />
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              {" "}
              <p>Vymazat</p>
              <AiOutlineSync />
            </div>
          </div>
          <button className="md:mt-[300px] rounded-md bg-blue-400 text-lightWhite px-28 py-2 mt-10">
            Získat trasu
          </button>
        </div>
        <img
          src={mapa}
          alt="redcar"
          className=" hidden md:block md:w-3/4 h-screen"
        />
      </div>
      {/* mapa end */}
    </div>
  );
}

export default Trasa;
