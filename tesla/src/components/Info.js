import React from "react";
import Nav from "./Nav";
import bleck from "../assets/blesk.svg";
import { AiOutlineGlobal } from "react-icons/ai";
import myVideo from "../assets/about.webm";

function Info() {
  return (
    <div>
      <Nav />
      {/* hero starts */}
      <div className="flex flex-col md:flex-row  absolute md:top-3/4 top-2/3  text-center justify-center items-center bottom-0 left-0 z-40 right-0 md:gap-24 gap-10  text-lightWhite max-w-[1600px] px-10 md:px-0 mx-auto">
        <div className="flex md:flex-row gap-24">
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-xl">100 000+</h2>
            <p className="text-sm">Zamestnanců </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <AiOutlineGlobal className="text-xl h-7 w-7" />{" "}
            <p className="text-sm">Jedno poslání </p>
          </div>
          <div className="flex flex-col  items-center gap-3">
            <h2 className="text-xl">8,4 mil. tun*</h2>
            <p className="text-sm">CO2e v roce 2021 </p>
          </div>
        </div>
      </div>
      <div className="h-screen w-screen flex text-5xl z-20 relative">
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
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-white font-medium tracking-wide z-10 mt-36 ">
          <h1 className="text-4xl mb-2">O nás</h1>
          <p className="text-sm">
            Urychlení globálního přechodu k udržitelným zdrojům energie
          </p>
        </div>
      </div>
      {/* hero end */}
    </div>
  );
}

export default Info;
