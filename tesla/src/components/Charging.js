import React, { useState, useEffect } from "react";

import charging from "../assets/charging.mp4";
import black from "../assets/black.avif";
import garage from "../assets/garage.avif";
import blue from "../assets/blue.avif";
import white from "../assets/white.avif";
import tesla from "../assets/teslacharg.avif";
import mereni from "../assets/mereni.avif";
import gas from "../assets/gas.avif";
import battery from "../assets/baterry.avif";
import cest from "../assets/cest.avif";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Charging = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const isBlack = (index) => index === activeIndex;

  const [headingText, setHeadingText] = useState("Dvě nové barvy");

  const [displayText, setDisplayText] = useState(
    "Barvy Stealth Grey a Ultra Red se mění podle světla a pozorovacího úhlu."
  );

  const handleDotClick = (newHeadingText, newText) => {
    setHeadingText(newHeadingText);
    setDisplayText(newText);
  };
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
          <source src={charging} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute  top-0 left-1/2 transform -translate-x-1/2 text-center text-lightWhite z-10 mt-44">
          <h1 className="text-5xl mb-2">Nabíjení</h1>
          <p className="text-lg ">Jeďte kamkoli, nabíjejte kdekoli</p>
          <div className="flex fixed bottom-0 left-0 right-0 top-[500px] sm:top-[500px] md:top-[400px] xl:top-[500px] xxl:top-[720px] justify-center items-center 	">
            <button className=" bg-transparent border-4 text-lightWhite text-lg rounded-md py-2 w-96  tracking-wider">
              Testovací jízda{" "}
            </button>
          </div>
        </div>
      </div>
      {/* hero end */}
      {/* cards start */}
      <div className="w-screen h-screen bg-white">
        <div className="flex flex-col text-black items-center justify-center  mx-auto pt-32 w-1/2">
          <h1 className="text-4xl pb-10 text-center">
            Připojte, nabijte a můžete vyrazit
          </h1>
          <p className="text-center text-xl">
            Díky velkému dojezdu pro každodenní jízdy i výlety vás vozy Tesla
            dostanou tam, kam chcete. Nabíjení je rychlé, pohodlné a dostupné
            všude, kde je elektřina.
          </p>
        </div>
        <div className="flex md:flex-row gap-10 mx-auto items-center justify-center">
          <div className="flex md:flex-row flex-col gap-8 md:px-52 px-10 pt-20">
            <div className="flex flex-col gap-5">
              <img src={garage} alt="garage" className="rounded-sm" />
              <h1 className="text-3xl">Během spánku</h1>
              <p className="tracking-wider">
                Připojte vůz doma nebo k blízkým veřejným nabíječkám.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <img src={blue} alt="garage" className="rounded-sm" />
              <h1 className="text-3xl">Během dne</h1>
              <p className="tracking-wider">
                Charge at a{" "}
                <Link to="/supercharger">
                  <span className="underline">local Supercharger </span>{" "}
                </Link>{" "}
                or at your workplace.
              </p>
            </div>{" "}
            <div className="flex flex-col gap-5">
              <img src={white} alt="garage" className="rounded-sm" />
              <h1 className="text-3xl">Na výletech</h1>
              <p className="tracking-wider">
                Dobíjejte u stanic Supercharger po cestě nebo v cíli.
              </p>
            </div>
          </div>
        </div>
        {/* cards end */}
        <div>
          <img src={black} alt="black" className="w-3/4 pt-20 mx-auto" />
          <div className="flex md:flex-row flex-col items-center justify-center md:gap-20 md:px-52 xxl:px-96 py-16">
            <div className="w-1/2">
              <h1 className="font-bold text-4xl md:pb-5">
                Začněte svůj den s nabitou baterií
              </h1>
              <button className="bg-transparent border-4 border-black py-2 px-24 my-5">
                Zjistit více
              </button>
            </div>
            <p className="w-1/2 text-lg">
              Nabíjejte doma a po probuzení budete mít nabitou baterii. K
              maximální flexibilitě přispívá snadné používání a nabíjení pomocí
              veřejných nabíječek v okolí vašeho domova.
            </p>
          </div>
        </div>
        {/* charging start */}
        <div
          className=" h-screen w-screen flex text-5xl z-20 "
          style={{
            background: `url(${tesla})`,
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col md:items-start md:pt-24 md:pl-44 items-center ">
            <h1 className="text-4xl text-lightWhite pb-8">
              Svoboda cestovat bez hranic
            </h1>
            <p className="text-xl text-lightWhite pb-8 pl-7">
              Nabíjejte v největší síti rychlonabíječek na světě. Naše síť
              nabíjecích stanic Supercharger je rozsáhlá, extra rychlá a
              spolehlivá.
            </p>
            <div className="flex md:flex-row flex-col gap-10">
              <button className=" border-4 bg-transparent  text-lightWhite text-lg rounded-md py-2 w-[500px] md:w-[280px] tracking-wider ">
                Kde nás najdete
              </button>
              <button className="bg-opacity-65  bg-lightBlack  text-lightWhite text-lg rounded-md py-3 w-[500px] md:w-[280px] tracking-wider ">
                Zjistit více
              </button>
            </div>
          </div>
        </div>{" "}
        {/* charging end */}
        <div className="w-screen h-screen hidden md:block items-center justify-center ">
          <div className="md:pl-52 xxl:pl-96 py-20">
            <h1 className=" text-4xl pb-5">Stačí zadat cíl</h1>
            <p className="text-secondary text-lg px-10">
              Váš vůz Tesla automaticky vyhledá nejlepší trasu a doporučí po
              cestě nabíjecí stanice.
            </p>
          </div>
          <div className="flex flex-col h-1/2 w-3/4 mx-auto text-5xl z-20 ">
            {/* img above cards start */}
            <img src={mereni} alt="mereni" />
            {/* img above cards end */}
            {/* cards with changing colors start */}
            <div className="flex flex-col md:flex-row gap-10 pb-20 ">
              {" "}
              <div
                className={`w-1/3 ${
                  isBlack(0) ? "text-black" : "text-gray-300"
                }`}
              >
                <hr className="w-80 h-1  my-4 bg-gray-700 border-0 rounded md:my-8 " />
                <h2 className="text-xl font-bold pb-4">Optimalizuje trasu</h2>
                <p className="pb-5 text-lg">
                  Najde nejlepší trasu, která vám pomůže vyhnout se dopravě, a v
                  případě potřeby nabíjejte.
                </p>
              </div>
              <div
                className={`w-1/3 ${
                  isBlack(1) ? "text-black" : "text-gray-300"
                }`}
              >
                <hr className="w-80 h-1  my-4 bg-gray-700 border-0 rounded md:my-8 " />
                <h2 className="text-xl font-bold pb-4">Meření baterie</h2>
                <p className="pb-5 text-lg">
                  Poskytne v reálném čase odhady baterie založené na vašem stylu
                  jízdy.
                </p>
              </div>
              <div
                className={`w-1/3 ${
                  isBlack(2) ? "text-black" : "text-gray-300"
                }`}
              >
                <hr className="w-80 h-1  my-4 bg-gray-700 border-0 rounded md:my-8 " />
                <h2 className="text-xl font-bold pb-4">Doporučuje nabíječky</h2>
                <p className="pb-5 text-lg">
                  Doporučuje místa pro nabíjení na vaší trase.
                </p>
              </div>
            </div>
            {/* cards with changing colors end */}
          </div>
        </div>
        <img src={gas} alt="black" className="w-screen pt-20 mx-auto" />
        <div className="md:pl-44 md:py-20 xxl:px-[700px] text-center md:text-start">
          <h1 className="text-4xl pb-5">Vynechte čerpací stanici</h1>
          <p className="text-lg md:w-2/3 text-secondary">
            Snižte náklady na kilometr a už nikdy neplaťte za benzín. Nabíjení
            elektřinou obvykle stojí méně než placení za palivo u místní
            stanice.
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-24 md:px-44 md:py-20 xxl:px-[700px]">
          <img src={battery} alt="battery" className="md:w-1/2" />
          <div className="flex flex-col justify-center ">
            {" "}
            <h1 className="text-4xl pb-5">Není nutná žádná údržba baterie</h1>
            <p className="text-lg w-2/3 text-secondary pb-5">
              Naše baterie nevyžadují žádnou pravidelnou údržbu a jsou navrženy
              tak, aby vydržely déle než vaše vozidlo. A jen tak pro případ –
              každý nákup nového vozidla zahrnuje osmiletou záruku na baterii.*
            </p>
            <p className="text-base w-2/3 text-secondary pb-20">
              *Má omezený počet ujetých kilometrů.
            </p>
          </div>
        </div>
        <div>
          <img src={cest} alt="cest" />
          <div className="bg-black h-96 text-lightWhite flex flex-col items-center text-center pt-20">
            <h1 className="text-4xl pb-5 text-center">Cestování bez hranic</h1>
            <p className="text-lg pb-16 text-center">
              Naplánujte si testovací jízdu a zjistěte, jak nabíjet doma nebo na
              cestách.
            </p>
            <Link to="/jizda">
              <button className="bg-transparent border-4 border-lightWhite text-lg py-2 px-24 ">
                Testovací jízda
              </button>
            </Link>
            <ul className=" flex-row text-gray-50 text-[13px] gap-5 mt-16 hidden md:flex mx-auto ">
              <li>Tesla © 2023</li>
              <li>Soukromí a právní informace</li>
              <li>Kontakt</li>
              <li>Novinky</li>
              <li>Dostávat novinky</li>
              <li>Kde nás najdete</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charging;
