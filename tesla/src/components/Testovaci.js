import React from "react";
import myVideo from "../assets/Experience.mp4";

function Testovaci() {
  return (
    <div className="relative snap-start h-screen flex overflow-hidden justify-center">
      <div className="absolute flex flex-col justify-center items-center text-center text-white z-10 mt-44 mx-auto">
        <h1 className="text-4xl mb-2">Zažijte vozy Tesla</h1>
        <p className="text-lg underline">
          Naplánujte si testovací jízdu ještě dnes
        </p>
        <button className="bg-opacity-65 border-4 border-[#f4f4f4] bg-transparent text-[#f4f4f4] text-sm rounded-md py-2 w-[500px] md:w-[280px] tracking-wider mx-auto mt-96">
          Testovací jízda
        </button>
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
