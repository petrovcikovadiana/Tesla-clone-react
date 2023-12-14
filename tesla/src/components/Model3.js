import React from "react";
import model3 from "../assets/3.jpg";

function Model3() {
  return (
    <div
      className="snap-start h-screen w-screen flex text-5xl z-20 relative"
      style={{
        background: `url(${model3})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-black font-medium tracking-wide z-10 mt-44 ">
        <h1 className="text-5xl mb-2">Model 3</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-7 absolute bottom-0 left-0 right-0 top-[600px] justify-center items-center	">
        <button className="bg-opacity-80 bg-[#171a20] text-white text-base rounded-md py-3 w-[500px] md:w-[300px] tracking-wider">
          Objednávka na míru
        </button>
        <button className=" bg-opacity-65 bg-[#f4f4f4] text-[#171a20]  text-base rounded-md py-3 w-[500px] md:w-[300px] tracking-wider">
          Testovací jízda
        </button>
      </div>
    </div>
  );
}

export default Model3;
