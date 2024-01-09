import Navbar from "./Navbar";
import Img5 from "../assets/compositor-8.webp";
import Img2 from "../assets/ms.avif";

import motor from "../assets/motor.avif";
import redwheel from "../assets/first.avif";
import redback from "../assets/second.avif";
import redfront from "../assets/third.avif";
import eye from "../assets/eye.svg";
import autopilot from "../assets/autopilot.avif";
import modelxx from "../assets/modelxx.avif";
import zebra from "../assets/zebra.avif";
import redcar from "../assets/redcar.avif";
import up from "../assets/up.avif";
import side from "../assets/icon-S.png";
import React, { useState, useEffect } from "react";
import interior from "../assets/interior.webm";
import ModelX from "./ModelX";

function PageX() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const isBlack = (index) => index === activeIndex;

  const [headingText, setHeadingText] = useState("Zážitek jako v kině");

  const [displayText, setDisplayText] = useState(
    "17-palcová dotyková, do stran naklápěcí obrazovka nabízí rozlišení 2200 x 1300, věrné barvy a výjimečnou odezvu pro hraní her, sledování filmů a mnoho dalšího."
  );

  const handleDotClick = (newHeadingText, newText) => {
    setHeadingText(newHeadingText);
    setDisplayText(newText);
  };
  const [isGray, setIsGray] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsGray((prevIsGray) => !prevIsGray);
    }, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Navbar />
      {/* hero starts */}
      <div className="flex flex-col md:flex-row absolute top-[430px] text-center justify-center items-center bottom-0 left-0 z-40 right-0 gap-32 text-lightWhite max-w-[1600px]">
        <div>
          <h2 className="text-2xl pb-2">543 km</h2>
          <p className="text-sm">Dojezd (WLTP) </p>
        </div>
        <div>
          <h2 className="text-2xl pb-2">2,6 s </h2>
          <p className="text-sm">0-100 km/h* </p>
        </div>
        <div>
          <h2 className="text-2xl pb-2">9,9 s </h2>
          <p className="text-sm">1/4 mile </p>
        </div>
        <div>
          <h2 className="text-2xl pb-2">1020 hp </h2>
          <p className="text-sm">Napájení vozidla </p>
        </div>
      </div>
      <ModelX />
      {/* hero end */}
      <div className="w-screen bg-black h-56   ">
        <p>Interiér budoucnosti</p>
      </div>
      <img src={Img5} alt="interior" className="w-screen" />
      <div className="w-screen bg-black h-56 "></div>
      <div>
        {" "}
        <video
          className="w-full h-full object-cover "
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={interior} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* dots start */}
      <div className="h-80 bg-black px-20  ">
        <div className="flex flex-row gap-2 pt-10 pb-4 items-center justify-center mx-auto  ">
          <button
            className="w-3 h-3 bg-slate-500 rounded-full "
            onClick={() =>
              handleDotClick(
                "Zážitek jako v kině",

                "17-palcová dotyková, do stran naklápěcí obrazovka nabízí rozlišení 2200 x 1300, věrné barvy a výjimečnou odezvu pro hraní her, sledování filmů a mnoho dalšího. "
              )
            }
          ></button>
          <button
            className="w-3 h-3 bg-lightWhite rounded-full"
            onClick={() =>
              handleDotClick(
                "Yoke volant",

                "Odvážný nový přístup k řízení nabízí lepší ovladatelnost a ničím nerušený výhled na silnici před vámi. Sešlápněte brzdu a Model X automaticky vybere správný směr jízdy."
              )
            }
          ></button>
        </div>
        <div className="flex flex-col items-center ">
          <h2 className="text-lightWhite pb-4">{headingText}</h2>
          <p className="text-lightWhite text-sm  w-[600px]">{displayText}</p>
        </div>
      </div>
      {/* dots end */}
      {/* gallery start */}
      <div className="flex flex-row text-lightWhite bg-black px-44 gap-32">
        <div>
          <img src={Img2} alt="interior" className="w-[558px] h-[313px]" />
        </div>
        <div className="w-[530px] items-center justify-center my-auto ">
          <h2 className="mb-4">Zůstaňte připojeni</h2>
          <p>
            Můžete přes Bluetooth bleskově připojit více zařízení nebo rychle
            nabíjet zařízení pomocí bezdrátového a 36W nabíjení USB-C.
          </p>
        </div>
      </div>
      <div className="flex flex-row text-lightWhite bg-black px-44 gap-32 pb-16">
        <div className="w-[530px] items-center justify-center my-auto ">
          <h2 className="mb-4">Prostorový zvuk</h2>
          <p>
            Audiosystém s 22 reproduktory a výkonem 960 wattů s technologií
            aktivního potlačení hluku od vozovky nabízí fantastický poslech a
            kvalitu zvuku jako ve studiu.
          </p>
        </div>
        <div>
          <img src={up} alt="interior" className="w-[558px] h-[313px] " />
        </div>
      </div>
      {/* gallery end */}
      {/* hero 2 start */}
      <div className="relative flex md:flex-col">
        <div>
          <img src={modelxx} className="imgS" alt="S" />
          <div className="flex flex-col md:flex-row absolute top-[150px] text-center justify-center items-center bottom-0 left-0 right-0 gap-16 text-lightWhite pb-10">
            <div>
              <h2 className="text-2xl pb-2">1020 hp </h2>
              <p className="text-sm">Napájení vozidla </p>
            </div>{" "}
            <div>
              <h2 className="text-2xl pb-2">9,9 s </h2>
              <p className="text-sm">1/4 míle</p>
            </div>
            <div>
              <h2 className="text-2xl pb-2">2,6 s </h2>
              <p className="text-sm">0-100 km/h*</p>
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col md:flex-row mx-44 gap-5">
          <div className="py-16 w-96">
            <p>Plaid</p>
            <h1 className="text-3xl pb-6">Více než Ludicrous</h1>
            <div className="flex flex-col md:flex-row gap-5">
              <button className=" border-4 border-lightBlack  h-12 w-[250px] rounded-md text-sm">
                Objednat
              </button>
              <button className=" border-4 bg-gray-200 px-4  h-12 w-[250px] rounded-md text-sm">
                Prozkoumejte skladové vozy
              </button>
            </div>
          </div>

          <div className="py-16 pr-16">
            <p>
              Díky nejvyššímu výkonu a nejrychlejší akceleraci v kategorii SUV
              je Model X Plaid nejvýkonnějším SUV, které kdy bylo vyrobeno.
              Aktualizovaná architektura baterie umožňuje konfiguracím Long
              Range i Plaid absolvovat na trati jednu jízdu za druhou bez
              snížení výkonu.
            </p>
          </div>
        </div>
      </div>
      {/* hero 2 end */}
      {/* plaid model start */}
      <div className="bg-gray-200 w-[1600px] h-[1600px]">
        <div className="px-44 py-24">
          <h2 className="text-3xl pb-5 ">Elektrický pohon</h2>
          <p className="w-[700px] font-light">
            Platformy vozů Model S sjednocují technologie pohonného ústrojí a
            baterie z cílem zajistit bezkonkurenční výkon, dojezd a efektivitu.
            Přepracovaná tepelná architektura modulu a článku dovoluje rychlejší
            nabíjení a poskytuje vám více výkonu i výdrže při jakýchkoliv
            podmínkách.
          </p>
        </div>
        <img src={motor} alt="motor" className="px-12 pb-10" />{" "}
        <div className="flex flex-col md:flex-row gap-10 px-44">
          {" "}
          <div className={`w-1/2 ${isGray ? "text-black" : "text-gray-300"}`}>
            <hr className="w-[580px] h-1  my-4 bg-gray-700 border-0 rounded md:my-8 " />
            <h2 className="text-xl font-bold pb-4">Model X</h2>
            <p className="pb-5">
              Platforma s pohonem všech kol Dual Motor má nejvyšší dojezd a nyní
              přináší i neuvěřitelný výkon a akceleraci.
            </p>
            <div className="flex flex-row gap-12">
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold">3,9 s</h3>
                <p className="text-sm">0-100 km/h</p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold">576 km</h3>
                <p className="text-sm">Dojezd (WLTP)</p>
              </div>
            </div>
          </div>
          <div className={`w-1/2 ${isGray ? "text-gray-300" : "text-black"}`}>
            <hr class="w-[580px] h-1  my-4 bg-gray-700 border-0 rounded md:my-8 " />
            <h2 className="text-xl font-bold pb-4">Model X Plaid</h2>
            <p className="pb-5">
              Platforma s pohonem všech kol Tri Motor s vektorováním točivého
              momentu obsahuje tři nezávislé motory s karbonem potaženými
              rotory, které udržují výkon více než 1 000 koní až do maximální
              rychlosti.
            </p>
            <div className="flex flex-row gap-12">
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold">2,6 s</h3>
                <p className="text-sm">0-100 km/h</p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold">543 km</h3>
                <p className="text-sm">Dojezd (WLTP)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* plaid model end */}
      {/* gallery start */}
      <div className="relative flex md:flex-col bg-black text-lightWhite">
        <div>
          <img src={zebra} className="imgS" alt="S" />
        </div>{" "}
        <div className="flex flex-col md:flex-row mx-44 gap-5">
          <div className="py-16 w-96">
            <p>Exteriér</p>
            <h1 className="text-3xl pb-6">Navrženo s důrazem na efektivitu</h1>
            <div className="flex flex-col md:flex-row gap-5">
              <button className=" border-4 border-lightWhite px-5 h-12 w-[250px] rounded-md text-sm">
                Objednat
              </button>
              <button className=" bg-gray-800 px-4  h-12 w-[250px] rounded-md text-sm">
                Prozkoumejte skladové vozy
              </button>
            </div>
          </div>
          <div className="py-16 pr-16">
            <p>
              Model X má součinitel odporu vzduchu jen 0,24 Cd – nejnižší ze
              všech sériově vyráběných SUV na světě. Vylepšené aerodynamické
              prvky vám společně s novými koly a pneumatikami pomáhají dojet
              dále, s ostřejší ovladatelností a lepším komfortem.
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="flex flex-row text-lightWhite bg-black px-44 gap-32">
        <div className="w-[530px] items-center justify-center my-auto ">
          <h2 className="mb-4">Neúnavný výkon</h2>
          <p>
            Poměrová kola a pneumatiky zaměřené na výkon zajišťují lepší
            přilnavost a zároveň přispívají k–maximálnímu přenosu výkonu.
          </p>
        </div>
        <div>
          <img src={redwheel} alt="interior" className="w-[558px] h-[313px]" />
        </div>
      </div>
      <div className="flex flex-row text-lightWhite bg-black px-44 gap-32">
        <div>
          <img src={redback} alt="interior" className="w-[558px] h-[313px]" />
        </div>
        <div className="w-[530px] items-center justify-center my-auto ">
          <h2 className="mb-4">Optimalizovaná aerodynamika</h2>
          <p>
            Důraz na detail na všech exteriérových površích dělá z Model S
            nejaerodynamičtější sériově vyráběný vůz na Zemi.
          </p>
        </div>
      </div>
      <div className="flex flex-row text-lightWhite bg-black px-44 gap-32 pb-16">
        <div className="w-[530px] items-center justify-center my-auto ">
          <h2 className="mb-4">Vylepšený styling</h2>
          <p>Kultovní křivky jsou moderní, svěží a elegantní.</p>
        </div>
        <div>
          <img src={redfront} alt="interior" className="w-[558px] h-[313px]" />
        </div>
      </div>
      {/* gallery end */}
      <div className="flex flex-row">
        <img src={redcar} alt="redcar" className="w-3/4" />

        <div className="w-1/4 p-10">
          <p className="text-lg">Dojezd</p>
          <h1 className="text-2xl pb-5 font-bold">Cestování bez hranic</h1>
          <p className="text-sm">
            Díky odhadovanému dojezdu až 634 kilometrů a přístupu k největší a
            nejvýkonnější síti rychlonabíječek na světě strávíte méně času
            nabíjením a více času řízením.
          </p>
          <button className="mt-[470px] border-4 border-lightBlack px-32 py-1">
            Objednat
          </button>
        </div>
      </div>
      <div className="relative flex md:flex-col bg-lightWhite text-black ">
        <div className="absolute text-lightBlack">
          <div className="p-12">
            <h1 className="text-2xl font-bold pb-2">360°</h1>
            <p className="text-sm">
              Zadní, boční a přední kamera pro maximální výhled
            </p>
          </div>
          <div className="p-12">
            <h1 className="text-2xl font-bold pb-2">250 m</h1>
            <p className="text-sm">
              Výkonné vizuální zpracování s dosahem až 250 metrů
            </p>
          </div>
          <div className="p-12">
            <img src={eye} alt="eye" className="pb-2" />{" "}
            <p className="text-sm">
              Tesla Vision detekuje blízká vozidla, pomáhá zabraňovat možným
              kolizím a asistuje s parkováním{" "}
            </p>
          </div>
        </div>
        <img src={autopilot} className="imgS" alt="S" />
        <div className="flex flex-col md:flex-row mx-44 gap-5">
          <div className="py-16 w-96">
            <p>Autopilot</p>
            <h1 className="text-3xl pb-6">Budoucnost řízení</h1>
            <div className="flex flex-col md:flex-row gap-5">
              <button className=" border-4 border-lightBlack px-5 h-12 w-[250px] rounded-md text-sm">
                Objednat
              </button>
              <button className=" bg-gray-200 px-4  h-12 w-[250px] rounded-md text-sm">
                Prozkoumejte skladové vozy
              </button>
            </div>
          </div>
          <div className="py-16 pr-16">
            <p>
              Za vašeho dozoru umožňuje Autopilot vozu v rámci vašeho pruhu
              automaticky řídit, zrychlovat a brzdit. Pomáhá vám tak s
              nejnáročnější částí řízení. S over-the-air aktualizacemi jsou
              nejnovější funkce okamžitě k dispozici.
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="bg-lightWhite">
        <div className="flex flex-row justify-center items-center h-screen gap-32 px-24">
          <div className="w-1/2">
            {" "}
            <h1 className=" text-3xl pb-5">Model X</h1>
            <p className="text-sm pb-5">
              Navrhněte si svůj nebo požádejte poradce Tesla Advisor o zpětné
              volání, během kterého se dozvíte více
            </p>
            <div className="flex flex-col md:flex-row gap-5">
              <button className=" border-4 border-lightBlack px-5 h-10 w-[250px] rounded-md text-sm">
                Objednat
              </button>
              <button className=" bg-gray-200 px-4  h-10 w-[250px] rounded-md text-sm">
                Požádat o zpětné volání{" "}
              </button>
            </div>
          </div>
          <img src={side} alt="side" className="w-1/2" />
        </div>
        <div className="flex items-center justify-center mx-auto w-[700px] text-center">
          <p className="text-secondary text-sm">
            Některé funkce vozidla, které více využívají data, vyžadují alespoň
            standardní konektivitu. Patří k nim mapy, navigace a hlasové
            příkazy. Přístup k funkcím, které využívají mobilní data nebo
            licence třetích stran, může podléhat změnám.{" "}
            <span className="underline">
              Přečtěte si další informace o standardní konektivitě a jejích
              omezeních.
            </span>
          </p>
        </div>
        <div>
          {" "}
          <ul className=" flex-row text-secondary items-center justify-center text-[13px] gap-5 mt-16 hidden md:flex pb-6">
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
  );
}

export default PageX;
