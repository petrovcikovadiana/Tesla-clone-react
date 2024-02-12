import React from "react";
import Nav from "./Nav";
import dm from "../assets/dm.avif";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Navblack from "./Navblack";

function Technik() {
  return (
    <div>
      <Navblack />
      {/* header start */}
      <div className="flex flex-col py-20 px-10 xxl:px-[700px]">
        <h1 className="text-4xl pb-4">
          Najít Teslou certifikovaného instalačního technika
        </h1>
        <p className="text-secondary text-sm md:w-1/2">
          Při instalaci našich produktů spolupracujeme s proškolenými
          certifikovanými instalačními techniky. Nejbližšího Teslou
          certifikovaného instalačního technika, který vám pomůže s nastavením
          produktů Tesla, vyhledáte níže.
        </p>
        {/* header end */}
        {/* content start */}

        <div className="flex flex-row pt-10">
          <div className="flex flex-col gap-5 ">
            {" "}
            <input
              type="text"
              id="psc"
              className="bg-veryLightGray  text-secondary text-base rounded-md   block w-2/3 p-3 "
              placeholder="PSČ nebo adresa"
            />
            <p>Produkt k instalaci</p>
            <button className="text-lightGray w-1/2  border-4 border-blue-300 py-1">
              Nabíječka Wall Connector
            </button>
            <div className="flex flex-col md:w-[600px] p-32 items-center justify-center text-sm text-secondary text-center ">
              <AiOutlineInfoCircle />
              <p>
                Zadáte-li výše svou adresu nebo PSČ a zvolíte produkt, zobrazí
                se certifikovaní instalační technici ve vašem okolí
              </p>
            </div>
          </div>
          <div className="md:w-2/3 hidden md:flex">
            <img src={dm} alt="dom" className="rounded-lg" />
          </div>
        </div>
        {/* content end */}
      </div>
    </div>
  );
}

export default Technik;
