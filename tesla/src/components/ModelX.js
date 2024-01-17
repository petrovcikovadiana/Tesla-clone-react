import React from "react";
import modelX from "../assets/Model-X.png";

function ModelX() {
  return (
    <div
      className="snap-start h-screen w-screen flex text-5xl z-20 relative"
      style={{
        background: `url(${modelX})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-black font-medium tracking-wide z-10 mt-44 ">
        <h1 className="text-5xl mb-2">Model X</h1>
        <p className="text-base underline">Prozkoumejte skladové vozy</p>
      </div>
      <div className="flex flex-col md:flex-row gap-7 absolute bottom-0 left-0 right-0 sm:top-[520px] md:top-[520px] xl:top-[520px] xxl:top-[740px] justify-center items-center	">
        <button className="bg-opacity-80 bg-[#171a20] text-white text-base rounded-md py-3 w-[500px] md:w-[300px] tracking-wider">
          Objednávka na míru
        </button>
        <button className=" bg-opacity-65 bg-lightWhite text-[#171a20]  text-base rounded-md py-3 w-[500px] md:w-[300px] tracking-wider">
          Testovací jízda
        </button>
      </div>
    </div>
  );
}

export default ModelX;
