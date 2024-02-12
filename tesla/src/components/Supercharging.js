import React from "react";
import myVideo from "../assets/super.webm";
import Nav from "./Nav";
import mapa from "../assets/map.avif";

function Supercharging() {
  return (
    <div>
      <Nav /> {/* hero start */}
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
        <div className="flex flex-col absolute top-0 left-1/2 transform -translate-x-1/2 items-center mx-auto pt-32 text-lightWhite">
          <h1>Supercharger</h1>
        </div>
        <div className="flex flex-row absolute xxl:top-[600px]  md:top-[500px] top-[400px] px-10 text-center mx-auto justify-center items-center bottom-0 left-0 right-0 gap-16 text-lightWhite max-w-[1600px]">
          <div>
            <h2 className="text-2xl pb-2">50 000+</h2>
            <p className="text-sm">Globální nabíjecí stanice Supercharger</p>
          </div>
          <div>
            <h2 className="text-2xl pb-2">15 min </h2>
            <p className="text-sm">Získejte dojezd až 275 km</p>
          </div>
          <div>
            <h2 className="text-2xl pb-2">Kč </h2>
            <p className="text-sm">Méně než benzín</p>
          </div>
        </div>
      </div>
      {/* hero end */}
      {/* mapa start */}
      <div className="flex md:flex-row flex-col">
        <div className="md:w-1/4 xxl:w-1/5 pt-24 p-6 items-center justify-center mx-auto text-center">
          <p className="text-lg text-start tracking-widest">Umístění</p>
          <h1 className="text-3xl pb-5 font-base text-start">
            Cestování bez hranic
          </h1>
          <p className="text-sm pb-3 text-start tracking-widest">
            S více než 50 000 nabíjecími stanicemi Supercharger společnost Tesla
            vlastní a provozuje největší globální síť rychlonabíječek na světě.
            Nabíjecí stanice Supercharger, které se nachází na hlavních trasách
            v blízkosti praktických zařízení, vám zajistí energii, když jste
            mimo domov. Jednoduše vůz připojíte, nabijete a můžete vyrazit.
          </p>

          <button className="md:mt-[300px] rounded-md bg-transparent  border-4 border-lightBlack text-lightBlack px-28 py-2 mt-10">
            Kde nás najdete{" "}
          </button>
        </div>
        <img src={mapa} alt="redcar" className="md:w-3/4 h-screen" />
      </div>
      {/* mapa end */}
    </div>
  );
}

export default Supercharging;
