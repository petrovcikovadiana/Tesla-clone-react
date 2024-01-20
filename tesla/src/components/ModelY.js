import React from "react";
import myVideo from "../assets/Model-Y.mp4";
import ModelS from "./ModelS";
import Nav from "./Nav";

function ModelY() {
  return (
    <div>
      <Nav />
      <div className=" h-screen w-screen flex text-5xl z-20">
        <video
          className="w-full h-full object-cover "
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={myVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute  top-0 left-1/2 transform -translate-x-1/2 text-center text-lightWhite z-10 mt-44">
          <h1 className="text-5xl mb-2">Model Y</h1>
          <p className="text-lg underline">Naplánovat testovací jízdu</p>
          <div className="flex flex-col md:flex-row gap-7 fixed bottom-0 left-0 right-0 top-[500px] sm:top-[500px] md:top-[500px] xl:top-[500px] xxl:top-[720px] justify-center items-center	">
            <button className="bg-opacity-65 bg-lightWhite text-[#171a20] text-base rounded-md py-2 w-[500px] md:w-[300px] tracking-wider">
              Rychlejší doručení
            </button>
            <button className=" bg-opacity-80 bg-[#171a20] text-white text-base rounded-md py-2 w-[500px] md:w-[300px] tracking-wider">
              Objednávka na míru
            </button>
          </div>
          <div className="w-screen flex justify-center items-center ">
            <p className="text-sm text-center text-lightWhite top-[570px] xl:top-[550px]  xxl:top-[770px]  fixed mx-auto">
              5 hvězdiček v hodnocení bezpečnosti Euro NCAP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelY;
