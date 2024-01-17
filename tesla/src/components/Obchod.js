import React from "react";
import wallconnector from "../assets/wallconnector.avif";
import mss from "../assets/mss.avif";
import m33 from "../assets/M33.avif";
import mx from "../assets/mx.avif";
import my from "../assets/my.avif";
import charg from "../assets/access.jpg";
import women from "../assets/Women_web.avif";
import men from "../assets/men_web.avif";
import kids from "../assets/Kids_web.avif";
import lifestyle from "../assets/lifestyle.avif";
import Nav from "./Nav";

function Obchod() {
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

      {/* accessories start */}
      <div>
        <div
          className="relative h-screen w-screen flex text-5xl z-20  "
          style={{
            background: `url(${mss})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {" "}
          <div
            className=" absolute top-[650px] flex flex-col gap-5  items-center justify-center  mx-auto"
            style={{ left: "50%", transform: "translateX(-50%" }}
          >
            <h2 className="text-4xl font-medium text-white">
              Model S - Příslušenství
            </h2>

            <button className="bg-lightWhite text-black text-sm py-2 px-16 rounded-sm">
              Nakupovat
            </button>
          </div>
        </div>
      </div>
      {/* accessories end */}
      {/* M3 start */}
      <div>
        <div
          className="relative h-screen w-screen flex text-5xl z-20  "
          style={{
            background: `url(${m33})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {" "}
          <div
            className=" absolute top-[650px] flex flex-col gap-5  items-center justify-center  mx-auto"
            style={{ left: "50%", transform: "translateX(-50%" }}
          >
            <h2 className="text-4xl font-medium text-white">
              Model 3 - Příslušenství
            </h2>

            <button className="bg-lightWhite text-black text-sm py-2 px-16 rounded-sm">
              Nakupovat
            </button>
          </div>
        </div>
      </div>
      {/* M3 end */}
      {/* MX start */}
      <div>
        <div
          className="relative h-screen w-screen flex text-5xl z-20  "
          style={{
            background: `url(${mx})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {" "}
          <div
            className=" absolute top-[650px] flex flex-col gap-5  items-center justify-center  mx-auto"
            style={{ left: "50%", transform: "translateX(-50%" }}
          >
            <h2 className="text-4xl font-medium text-white">
              Model X - Příslušenství
            </h2>

            <button className="bg-lightWhite text-black text-sm py-2 px-16 rounded-sm">
              Nakupovat
            </button>
          </div>
        </div>
      </div>
      {/* MX end */}
      {/* MY start */}
      <div>
        <div
          className="relative h-screen w-screen flex text-5xl z-20  "
          style={{
            background: `url(${my})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {" "}
          <div
            className=" absolute top-[650px] flex flex-col gap-5  items-center justify-center  mx-auto"
            style={{ left: "50%", transform: "translateX(-50%" }}
          >
            <h2 className="text-4xl font-medium text-white">
              Model Y - Příslušenství
            </h2>

            <button className="bg-lightWhite text-black text-sm py-2 px-16 rounded-sm">
              Nakupovat
            </button>
          </div>
        </div>
      </div>
      {/* MY end */}
      {/* charging start */}
      <div>
        <div
          className="relative h-screen w-screen flex text-5xl z-20  "
          style={{
            background: `url(${charg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {" "}
          <div
            className=" absolute top-[650px] flex flex-col gap-5  items-center justify-center  mx-auto"
            style={{ left: "50%", transform: "translateX(-50%" }}
          >
            <h2 className="text-4xl font-medium text-white">Charging</h2>

            <button className="bg-lightWhite text-black text-sm py-2 px-16 rounded-sm">
              Nakupovat
            </button>
          </div>
        </div>
      </div>
      {/* charging end */}
      {/* clothes start */}
      <div className="flex flex-row gap-2 h-screen">
        <div
          className="relative h-screen w-screen "
          style={{
            background: `url(${men})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute top-[700px] items-center justify-center px-16 text-center">
            <h2 className="text-2xl pb-4">Pánské Oblečení</h2>
            <button className="bg-transparent border-4 border-black px-6 py-1 rounded-md">
              Nakupovat
            </button>
          </div>
        </div>
        <div
          className="relative h-screen w-screen "
          style={{
            background: `url(${women})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute top-[700px] items-center justify-center px-16 text-center">
            <h2 className="text-2xl pb-4">Dámské Oblečení</h2>
            <button className="bg-transparent border-4 border-black px-6 py-1 rounded-md">
              Nakupovat
            </button>
          </div>{" "}
        </div>
        <div
          className="relative h-screen w-screen "
          style={{
            background: `url(${kids})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {" "}
          <div className="absolute top-[700px] items-center justify-center px-16 text-center">
            <h2 className="text-2xl pb-4">Dětské Oblečení</h2>
            <button className="bg-transparent border-4 border-black px-6 py-1 rounded-md">
              Nakupovat
            </button>
          </div>{" "}
        </div>
      </div>
      {/* clothes end */}
      {/* lifestyle start */}
      <div>
        <div
          className="relative h-screen w-screen flex text-5xl z-20  "
          style={{
            background: `url(${lifestyle})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {" "}
          <div
            className=" absolute top-[650px] flex flex-col gap-5  items-center justify-center  mx-auto"
            style={{ left: "50%", transform: "translateX(-50%" }}
          >
            <h2 className="text-4xl font-medium text-black">Životní styl</h2>

            <button className="bg-transparent border-4 border-black text-black text-sm py-2 px-24 rounded-sm">
              Nakupovat
            </button>
          </div>
        </div>
      </div>
      {/* lifestyle end */}
      <div>
        <ul className="flex flex-row text-secondary text-[13px] gap-5  py-10 items-center justify-center">
          <li>Tesla © 2023</li>
          <li>Soukromí a právní informace</li>
          <li>Kontakt</li>
          <li>Novinky</li>
          <li>Dostávat novinky</li>
          <li>Kde nás najdete</li>
        </ul>
      </div>
    </div>
  );
}

export default Obchod;
