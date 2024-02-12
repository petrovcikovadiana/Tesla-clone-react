import React from "react";
import Nav from "./Nav";
import wallconnector from "../assets/wallconnector.avif";

function Homecharging() {
  return (
    <div>
      <Nav />
      {/* hero start */}
      <div
        className=" h-screen w-screen flex text-5xl z-20  "
        style={{
          background: `url(${wallconnector})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="absolute top-[550px]  flex flex-col gap-5  items-center justify-center  mx-auto"
          style={{ left: "50%", transform: "translateX(-50%" }}
        >
          <h2 className="text-5xl font-medium text-white">Wall Connector</h2>
          <p className="text-xl text-white">Nejpohodlnejší je nabíjení doma</p>
          <button className="bg-lightWhite text-black text-sm py-2 px-16 rounded-sm">
            Nakupovat
          </button>
        </div>
      </div>
      {/* hero end */}
    </div>
  );
}

export default Homecharging;
