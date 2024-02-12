import React from "react";
import Nav from "./Nav";
import S from "../assets/icon-S.png";
import Y from "../assets/icon-Y.png";
import X from "../assets/icon-X.png";
import icon from "../assets/icon-3.avif";
import arrow from "../assets/arrow.svg";
import Navblack from "./Navblack";

function Videopruvodci() {
  return (
    <div>
      <Navblack />
      {/* hero start */}
      <div className="w-screen md:space-y-24 my-24  bg-white flex flex-col items-center justify-center pb-20">
        <div>
          <h1 className="text-4xl font-semibold pb-5">
            Seznamte se s vozem Tesla
          </h1>
        </div>
        <div className="flex md:flex-row flex-wrap gap-10 items-center justify-center">
          <div className="border-2 border-gray-300 px-6 py-12 items-center justify-center text-center">
            <img src={S} alt="S" className="w-[218px] h-[122px]" />
            <div className="flex md:flex-row gap-1 justify-center items-center pt-3">
              <h2 className="text-2xl">Model S</h2>
              <img src={arrow} alt="arrow" />
            </div>
            <p className="text-lightGray text-sm font-base pt-3">7 videí</p>
          </div>
          <div className="border-2 border-gray-300 px-6 py-12 items-center justify-center text-center">
            <img src={icon} alt="S" className="w-[218px] h-[122px]" />
            <div className="flex md:flex-row gap-1 justify-center items-center pt-3">
              <h2 className="text-2xl">Model 3</h2>
              <img src={arrow} alt="arrow" />
            </div>
            <p className="text-lightGray text-sm font-base pt-3">7 videí</p>
          </div>
          <div className="border-2 border-gray-300 px-6 py-12 items-center justify-center text-center">
            <img src={X} alt="S" className="w-[218px] h-[122px]" />
            <div className="flex md:flex-row gap-1 justify-center items-center pt-3">
              <h2 className="text-2xl">Model X</h2>
              <img src={arrow} alt="arrow" />
            </div>
            <p className="text-lightGray text-sm font-base pt-3">7 videí</p>
          </div>
          <div className="border-2 border-gray-300 px-6 py-12 items-center justify-center text-center">
            <img src={Y} alt="S" className="w-[218px] h-[122px]" />
            <div className="flex md:flex-row gap-1 justify-center items-center pt-3">
              <h2 className="text-2xl">Model Y</h2>
              <img src={arrow} alt="arrow" />
            </div>
            <p className="text-lightGray text-sm font-base pt-3">7 videí</p>
          </div>
        </div>
      </div>
      {/* hero end */}
      {/* footer start */}
      <div className="bg-[#393c41] h-80 text-lightWhite  pt-10 px-10">
        <div className="flex flex-row gap-10  justify-center">
          <div>Vaše nejbližší Prodejna a servisní centrum je Dresden</div>
          <div>
            <p>Lovosice Supercharger</p>
          </div>
          <div className="flex flex-row gap-7  justify-center ">
            <div className=" items-center justify-center">
              <p>Model S</p>
              <p>Model 3</p>
              <p>Model X</p>
              <p>Cybertruck</p>
            </div>
            <div>
              <p>Objednat vůz Tesla</p>
              <p>Svolávací akce po vozidla</p>
              <p>Investoři</p>
              <p>Dodavatelé</p>
            </div>
          </div>
        </div>
        <div className=" justify-center">
          <hr class="h-px my-8 bg-gray-600 border-0 " />

          <p className="flex justify-center">
            Tesla © 2023 | Soukromí a právní informace
          </p>
        </div>
      </div>
      {/* footer start */}
    </div>
  );
}

export default Videopruvodci;
