import React from "react";
import myVideo from "../assets/Experience.mp4";
import { Link } from "react-router-dom";

function Testovaci() {
  return (
    <div className="relative snap-start h-screen flex overflow-hidden justify-center">
      <div className="absolute flex flex-col justify-center items-center text-center text-lightWhite z-10 mt-44 mx-auto">
        <h1 className="text-4xl mb-2">Zažijte vozy Tesla</h1>
        <p className="text-lg underline">
          Naplánujte si testovací jízdu ještě dnes
        </p>
        <Link to="/jizda">
          <button className="bg-opacity-65 border-4 border-lightWhite bg-transparent text-lightWhite text-sm rounded-md py-2 w-80 md:w-80 tracking-wider mx-auto mt-[450px] md:mt-[400px] xl:mt-[450px] xxl:mt-[600px]">
            Testovací jízda
          </button>
        </Link>
      </div>
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
    </div>
  );
}

export default Testovaci;
