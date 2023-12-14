import React from "react";
import heroImage from "../assets/Model-S.png";

function ModelS() {
  return (
    <div
      className="snap-start h-screen w-screen flex text-5xl z-20 "
      style={{
        background: `url(${heroImage})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center mx-auto pt-20">
        <h1>Model S</h1>
        <p className="text-lg underline">Prozkoumejte skladové vozy</p>
      </div>
    </div>
  );
}

export default ModelS;
