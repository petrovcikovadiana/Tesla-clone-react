import React, { useState, useEffect } from "react";
import heroImage from "../assets/tesla33.jpeg";
import video3 from "../assets/video3.mp4";
import videoo from "../assets/videoo.mp4";
import video2 from "../assets/newvideo.mp4";
import palms from "../assets/palms.jpg";
import ipad from "../assets/ipad.png";
import iphone3 from "../assets/iphone3.avif";
import iphonedog from "../assets/iphonedog.avif";
import iphonemap from "../assets/iphonemap.avif";
import nabijeni from "../assets/nabijeni.jpeg";
import bocni from "../assets/bocni.jpg";
import sided from "../assets/sided.png";
import auto from "../assets/auto.jpeg";
import eye from "../assets/eyes.svg";
import Nav from "./Nav";

const Page3 = () => {
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
      <Nav />
      <div
        className="h-screen w-screen flex text-5xl z-20 "
        style={{
          background: `url(${heroImage})`,
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col items-center mx-auto pt-32">
          <h1 className="text-4xl mb-5">Navrženo pro dlouhý dojezd</h1>
          <p className="text-lg font-base px-10 text-center ">
            Ujeďte až 629 km (WLTP) na jedno nabití díky aktualizovanému
            stylingu exteriéru optimalizovanému pro maximální aerodynamiku.
          </p>
        </div>
      </div>
      {/* smaller video start */}
      <div className="px-44 py-32 bg-black">
        <video
          className="w-full h-full object-cover "
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* smaller video end */}
        {/* dots start */}
        <div>
          <div className="flex flex-row gap-2 pt-10 pb-4">
            <button
              className="w-3 h-3 bg-slate-500 rounded-full"
              onClick={() =>
                handleDotClick(
                  "Dvě nové barvy",

                  "Barvy Stealth Grey a Ultra Red se mění podle světla a pozorovacího úhlu."
                )
              }
            ></button>
            <button
              className="w-3 h-3 bg-lightWhite rounded-full"
              onClick={() =>
                handleDotClick(
                  "Vylepšená kola",

                  "Užijte si nový styl, delší dojezd a nižší hlučnost s vylepšenými pneumatikami a koly."
                )
              }
            ></button>
          </div>
          <div className="flex flex-col ">
            <h2 className="text-lightWhite pb-4">{headingText}</h2>
            <p className="text-lightWhite text-sm">{displayText}</p>
          </div>
        </div>
        {/* dots end */}
        {/* content above video start */}
        <div className="flex flex-col items-center justify-center pt-20 md:w-[600px] text-center mx-auto">
          <h2 className="text-lightWhite pb-4 text-3xl ">
            Zbrusu nový interiér
          </h2>
          <p className="text-lightWhite text-sm">
            Usedněte do zcela nového interiéru, který vás uchvátí svým designem
            a díky kterému se uvnitř budete cítit jako v bavlnce. Ambientní
            osvětlení si můžete nastavit podle svých představ.
          </p>
        </div>{" "}
        {/* content above video end */}
      </div>
      {/* video start */}
      <video
        className="w-full h-full object-cover "
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* video above cards end */}
      <div className="bg-lightWhite py-12 px-44">
        {/* video start */}
        <video
          className="w-full h-[480px] object-cover "
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* video above cards end */}
      </div>
      {/* cards with changing colors start */}
      <div className="flex flex-col md:flex-row gap-10 px-44">
        {" "}
        <div className={`w-1/2 ${isBlack(0) ? "text-black" : "text-gray-300"}`}>
          <hr className="w-[204px] h-1  my-4 bg-gray-700 border-0 rounded md:my-8 " />
          <h2 className="text-xl font-bold pb-4">Prémiové materiály</h2>
          <p className="pb-5">
            Obklopovat vás budou měkčí a propracovanější materiály, které jsou
            vyrobeny s vysokou přesností.
          </p>
        </div>
        <div className={`w-1/2 ${isBlack(1) ? "text-black" : "text-gray-300"}`}>
          <hr className="w-[204px] h-1  my-4 bg-gray-700 border-0 rounded md:my-8 " />
          <h2 className="text-xl font-bold pb-4">Úžasný zvuk</h2>
          <p className="pb-5">
            Vychutnejte si více pohlcující zvuk díky audiosystému navrženému
            společností Tesla, vybavenému až 17 reproduktory, dvěma subwoofery a
            dvěma zesilovači.
          </p>
        </div>
        <div className={`w-1/2 ${isBlack(2) ? "text-black" : "text-gray-300"}`}>
          <hr className="w-[204px] h-1  my-4 bg-gray-700 border-0 rounded md:my-8 " />
          <h2 className="text-xl font-bold pb-4">Zadní displej</h2>
          <p className="pb-5">
            Cestující na zadních sedadlech mají k dispozici 8″ dotykovou
            obrazovku s ovládáním klimatizace a multimediálním systémem.
          </p>
        </div>
        <div className={`w-1/2 ${isBlack(3) ? "text-black" : "text-gray-300"}`}>
          <hr class="w-[204px] h-1  my-4 bg-gray-700 border-0 rounded md:my-8 " />
          <h2 className="text-xl font-bold pb-4">Větraná sedadla</h2>
          <p className="pb-5">
            Přední odvětrávaná sedadla si můžete předem vychladit pomocí
            telefonu nebo si můžete nastavit jejich automatickou regulaci pomocí
            ovládání klimatizace.
          </p>
        </div>
        <div className={`w-1/2 ${isBlack(4) ? "text-black" : "text-gray-300"}`}>
          <hr class="w-[204px] h-1  my-4 bg-gray-700 border-0 rounded md:my-8 " />
          <h2 className="text-xl font-bold pb-4">Bezdrátové nabíjení</h2>
          <p className="pb-5">
            Můžete nabíjet dva telefony najednou a díky vylepšeným mikrofonům si
            užívat hovory v dokonalé kvalitě.
          </p>
        </div>
      </div>
      {/* cards with changing colors end */}
      <div className="bg-white py-32 text-center items-center w-[600px] mx-auto">
        <h2 className="text-3xl pb-3">Tišší kabina</h2>
        <p className="text-sm">
          Vychutnejte si mimořádně tichou kabinu díky 360stupňovému
          protihlukovému sklu. Kochejte se oblohou pod celoskleněnou střechou,
          která propouští světlo a zároveň vás chrání před škodlivým UV zářením.
        </p>
      </div>
      <div
        className=" h-screen w-screen flex"
        style={{
          background: `url(${palms})`,
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div>
        <img src={ipad} alt="ipad" className="p-44" />
        <div className="px-44 flex flex-row gap-5 ">
          <h2 className="w-[500px] text-3xl">Elegantní technologie</h2>
          <p className=" text-base">
            Spuštění oblíbené hry nebo přehrávání filmu či skladby je otázkou
            jen pár klepnutí. Pomocí středové dotykové obrazovky můžete mimo
            jiné streamovat média, přizpůsobit si vozidlo nebo se nechat
            navigovat k cíli.
          </p>
        </div>
        <div className="flex flex-col items-center py-16 ">
          <h2 className="text-3xl pb-3">Vzdálený přístup</h2>
          <p>Ovládejte vše z jediné univerzální aplikace Tesla.</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center pb-5">
        <div>
          <img
            src={iphone3}
            alt="iphone"
            className="pb-10 w-[356px] md:h-[660px]"
          />
          <h2 className="text-xl text-center pb-2">Ovládání</h2>
          <p className="text-center">
            Vzdálený přístup k vozidlu a jeho správa.
          </p>
        </div>
        <div>
          <img
            src={iphonedog}
            alt="iphone"
            className="pb-10 w-[356px] md:h-[660px]"
          />
          <h2 className="text-xl text-center pb-2">
            Příprava kabiny vozu před odjezdem
          </h2>
          <p className="text-center">
            Předehřejte si nebo si vychlaďte kabinu odkudkoliv.
          </p>
        </div>{" "}
        <div>
          <img
            src={iphonemap}
            alt="iphone"
            className="pb-10 w-[356px] md:h-[660px]"
          />
          <h2 className="text-xl text-center pb-2">Nabíjení</h2>
          <p className="text-center">
            Naplánujte si trasu s nabíjecími zastávkami.
          </p>
        </div>
      </div>
      <div className="bg-black">
        <div className="flex flex-col items-center justify-center mx-auto py-32">
          <h2 className="text-lightWhite text-3xl pb-3">Pohodlné nabíjení</h2>
          <p className="text-lightWhite text-sm">
            Rychlé, dostupné, snadné – kdekoli, kde je k dispozici elektřina
          </p>
        </div>
        <div>
          <img src={nabijeni} alt="nabijeni" className="p-10" />
          <div className="flex flex-col md:flex-row gap-10 px-44">
            {" "}
            <div
              className={`w-1/2 ${isBlack(0) ? "text-white" : "text-gray-500"}`}
            >
              <hr className="w-[204px] h-1  my-4 bg-gray-700 border-0 rounded md:my-8 " />
              <h2 className="text-xl font-bold pb-4">Doma</h2>
              <p className="pb-5">
                Náš nejpohodlnější a cenově nejdostupnější způsob nabíjení.
              </p>
            </div>
            <div
              className={`w-1/2 ${isBlack(1) ? "text-white" : "text-gray-500"}`}
            >
              <hr className="w-[204px] h-1  my-4 bg-gray-700 border-0 rounded md:my-8 " />
              <h2 className="text-xl font-bold pb-4">Na cestě</h2>
              <p className="pb-5">
                Dobijte až 282 km za pouhých 15 minut* na jedné z více než 50
                000 nabíječek Supercharger po celém světě.
              </p>
            </div>
            <div
              className={`w-1/2 ${isBlack(2) ? "text-white" : "text-gray-500"}`}
            >
              <hr className="w-[204px] h-1  my-4 bg-gray-700 border-0 rounded md:my-8 " />
              <h2 className="text-xl font-bold pb-4">Při parkování</h2>
              <p className="pb-5">
                Připojte vůz v cíli, ať už je to hotel, park nebo jakékoli jiné
                místo.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-7   justify-center items-center pt-10	">
          <button className="bg-opacity-65 bg-transparent border-2 border-lightWhite  text-lightWhite text-base rounded-md py-2 w-[500px] md:w-[300px] tracking-wider">
            Prozkoumejte možnosti nabíjení
          </button>
          <button className=" bg-opacity-80 bg-secondary text-white text-base rounded-md py-2 w-[500px] md:w-[300px] tracking-wider">
            Plánovač tras
          </button>
        </div>
        <div className="w-screen flex justify-center items-center py-5 ">
          <p className="text-sm text-center text-lightWhite  mx-auto">
            *Dojezd přidaný za 15 minut, vychází z{" "}
            <span className="underline"> údajů při stálé rychlosti.</span>
          </p>
        </div>
        <div>
          <img src={bocni} alt="bocni_pohled" className="p-24 z-1" />
        </div>
        <div className="flex flex-col md:pl-44 px-10">
          <h2 className="text-lightWhite text-3xl pb-3">
            Navrženo pro bezpečnost
          </h2>
          <p className="text-lightWhite text-sm md:w-[800px] pb-5">
            Model 3 využívá stejné prvky, díky kterým jsou naše ostatní vozidla
            tak bezpečná: boční prahy pohlcující energii, zesílený akumulátor
            umístěný nízko ve vozidle, což snižuje riziko převrácení, a kovovou
            konstrukci karoserie, která unese mnohonásobek hmotnosti vozu.
            Funkce aktivní bezpečnosti, jako je automatické nouzové brzdění,
            jsou součástí standardní výbavy.{" "}
          </p>
          <button className="bg-opacity-65 bg-transparent border-2 border-lightWhite  text-lightWhite text-sm rounded-md py-2 w-[300px] md:w-[200px] tracking-wider">
            Přehled bezpečnosti
          </button>
        </div>
      </div>
      <div className="absolute text-lightWhite">
        <div className="p-12">
          <h1 className="text-2xl font-bold pb-2">360°</h1>
          <p className="text-sm">Stupně viditelnosti</p>
        </div>
        <div className="p-12">
          <img src={eye} alt="eye" className="pb-2 " />{" "}
          <p className="text-sm">Tesla Vision </p>
        </div>
        <div className="p-12">
          <h1 className="text-2xl font-bold pb-2">250 m</h1>
          <p className="text-sm">Výkonné vizuální zpracování</p>
        </div>
      </div>
      <img src={auto} className="imgS" alt="S" />
      <div className="px-44 py-24 flex flex-row text-lightWhite bg-black gap-5">
        <h2 className="w-[500px] text-3xl">Dorazte svěží</h2>
        <p className=" text-base">
          Za vašeho dozoru umožňuje Autopilot v rámci vašeho pruhu automaticky
          řídit, zrychlovat a brzdit. Pomáhá vám tak s nejnáročnější částí
          řízení. Díky bezdrátovým aktualizacím softwaru na dálku jsou
          nejnovější vylepšení okamžitě k dispozici.
        </p>
      </div>
      <div className="flex flex-row justify-center items-center h-screen gap-32 px-24 bg-black">
        <div className="w-1/2 text-lightWhite">
          {" "}
          <h1 className=" text-3xl pb-5">Model 3</h1>
          <div className="flex flex-col md:flex-row gap-5">
            <button className=" border-4 border-lightWhite hover:bg-lightWhite hover:text-lightBlack px-5 h-10 w-[200px] rounded-md text-sm">
              Objednat
            </button>
            <button className=" bg-gray-800 hover:bg-gray-600 px-4  h-10 w-[200px] rounded-md text-sm">
              Dostávat novinky
            </button>
          </div>
        </div>
        <img src={sided} alt="side" className="w-1/2" />
      </div>
      <div className="bg-black">
        <div className="flex items-center justify-center mx-auto w-[700px] text-center ">
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
};

export default Page3;
