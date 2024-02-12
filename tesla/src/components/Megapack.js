import React from "react";
import video from "../assets/megapack_v.webm";
import install from "../assets/install.webm";
import bezpeci from "../assets/bezpeci.webm";
import clean from "../assets/cleaner.avif";
import odolnost from "../assets/odolnost.avif";
import apps from "../assets/apps.avif";
import fully from "../assets/fully.avif";

import Nav from "./Nav";
import Navblack from "./Navblack";

function Megapack() {
  return (
    <div>
      <Navblack />
      {/* hero video start */}{" "}
      <div className=" h-screen w-screen flex text-5xl z-20">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-black font-medium tracking-wide z-10 mt-36 ">
          <h1 className="text-5xl mb-2">Megapack</h1>
          <p className="text-lg ">Obrovské řešení pro ukládání energie</p>
        </div>
        <video
          className="w-full h-full object-cover "
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flex flex-col md:flex-row  absolute md:top-3/4 top-2/3  text-center justify-center items-center bottom-0 left-0 z-40 right-0 md:gap-24 gap-10  text-black max-w-[1600px] px-10 md:px-0 mx-auto">
          <div className="flex md:flex-row md:gap-24 gap-10">
            <div className="flex flex-col items-center ">
              <h2 className="md:text-4xl text-2xl pb-2">10+ GWh </h2>
              <p className="text-base">Nasazeno </p>
            </div>
            <div>
              <h2 className="md:text-4xl text-2xl pb-2">24/7 </h2>
              <p className="text-base">Nekonečně škálovatelné </p>
            </div>
            <div className="flex flex-col  items-center">
              <h2 className="md:text-4xl text-2xl pb-2">3.9 MWh </h2>
              <p className="text-base">Na jednotku </p>
            </div>
          </div>
          <div>
            <button className="bg-transparent border-4 border-black text-black text-base rounded-md py-3 w-[500px] md:w-[300px] tracking-wider">
              Kontaktujte nás{" "}
            </button>
          </div>
        </div>
      </div>
      {/* hero video end */} {/* cleaner network start */}
      <div className="flex md:flex-row flex-col w-screen h-screen text-lightBlack bg-white md:px-44 px-10 md:gap-32 items-center justify-center">
        <div>
          <img
            src={clean}
            alt="interior"
            className="md:w-[558px] md:h-[313px] xxl:w-[700px] xxl:h-[500px] pt-10"
          />
        </div>
        <div className="md:w-[530px] xxl:w-[700px] items-center justify-center my-auto ">
          <h2 className="mb-4">Čistší síť</h2>
          <p>
            Budoucnost obnovitelné energie závisí na ukládání energie ve velkém
            měřítku. Megapack je výkonná baterie, která zajišťuje podporu a
            ukládání energie, přičemž pomáhá stabilizovat síť a předcházet
            výpadkům. Posílením naší udržitelné energetické infrastruktury
            můžeme vytvořit čistší síť, která chrání naše komunity a životní
            prostředí.
          </p>
        </div>
      </div>
      {/* cleaner network end */}
      {/* odolnost start */}
      <div className="h-screen w-scren flex ">
        <img src={odolnost} alt="clean" className="w-screen" />

        <div className="flex flex-col gap-10 absolute items-center">
          <h2 className="text-5xl">Odolnost</h2>
          <p className="text-xl tracking-wider md:px-80 px-10 items-center mx-auto text-center">
            Megapack spolehlivě a bezpečně ukládá energii do sítě, čímž
            eliminuje potřebu plynových špičkových zdrojů energie a pomáhá
            předcházet výpadkům. Každá jednotka může uložit více než 3,9 MWh
            energie – to je dostatečné množství na to, aby bylo možné jednu
            hodinu napájet průměrně 3 600 domácností.
          </p>
        </div>
      </div>
      {/* odolnost end */}
      {/* instalace start */}
      <div className="flex md:flex-row flex-col w-screen h-screen text-lightBlack bg-white md:px-44 px-10 md:gap-20 items-center justify-center">
        <div className="md:w-[530px] xxl:w-[700px] items-center justify-center my-auto ">
          <h2 className="mb-4 text-5xl">Snadná instalace</h2>
          <p>
            Každá jednotka Megapack se dodává plně smontovaná a připravená k
            provozu, což umožňuje rychlou instalaci a odbourává zbytečnou
            složitost. Systémy vyžadují minimální údržbu a zahrnují až 20letou
            záruku.
          </p>
        </div>
        <div>
          <video
            autoPlay
            loop
            muted
            playsInline
            src={install}
            alt="install"
            className="md:w-[558px] md:h-[313px] xxl:w-[700px] xxl:h-[500px] pt-10"
          />
        </div>
      </div>
      {/* instalace end */}
      {/* fully start */}
      <div className="h-screen w-scren flex ">
        <img src={fully} alt="clean" className="w-screen" />

        <div className="flex flex-col gap-10 absolute items-center">
          <h2 className="text-5xl">Plně integrovaný</h2>
          <p className="text-xl tracking-wider md:px-80 px-10 items-center mx-auto text-center">
            Megapack spolehlivě a bezpečně ukládá energii do sítě, čímž
            eliminuje potřebu plynových špičkových zdrojů energie a pomáhá
            předcházet výpadkům. Každá jednotka může uložit více než 3,9 MWh
            energie – to je dostatečné množství na to, aby bylo možné jednu
            hodinu napájet průměrně 3 600 domácností.
          </p>
        </div>
      </div>
      {/* fully end */}
      {/* bezpeci start */}
      <div className="flex md:flex-row flex-col w-screen h-screen text-lightBlack bg-white md:px-44 px-10 md:gap-20 items-center justify-center">
        <div>
          <video
            autoPlay
            loop
            muted
            playsInline
            src={install}
            alt="install"
            className="md:w-[558px] md:h-[313px] xxl:w-[700px] xxl:h-[500px] pt-10"
          />
        </div>
        <div className="md:w-[530px] xxl:w-[700px] items-center justify-center my-auto ">
          <h2 className="mb-4 text-4xl">Bezpečné již od návrhu</h2>
          <p>
            Megapack je jedním z nejbezpečnějších produktů pro bateriové
            ukládání energie svého druhu. Jednotky procházejí rozsáhlými
            požárními testy a zahrnují integrované bezpečnostní systémy,
            specializovaný monitorovací software a nepřetržitou podporu.
          </p>
        </div>
      </div>
      {/* bezpeci end */}
      {/* vyuziti start */}
      <div className="h-screen bg-black w-scren flex items-center justify-center px-10 md:px-32">
        <div className="flex md:flex-row flex-col gap-10">
          <img src={apps} alt="install" className="md:w-1/2 rounded-sm" />
          <div className="flex flex-col gap-2 md:w-1/2 text-lightWhite xxl:pr-96">
            <h2 className="text-4xl pb-3">Využití</h2>
            <p className="text-xl tracking-wider pb-5">
              Megapack je určen pro{" "}
              <span className="underline">veřejné služby</span> a{" "}
              <span className="underline ">velké komerční projekty</span> . Náš
              tým odborníků vám pomůže navrhnout systém, který splní vaše cíle
              projektu a maximalizuje potenciál vašeho webu.
            </p>
            <div className="flex md:flex-row md:gap-10 gap-10">
              <div>
                <hr class="h-px w-10 my-4 bg-lightWhite border-0" />
                <h2 className="font-bold">
                  {" "}
                  Vyrovnávání výkyvů obnovitelných zdrojů
                </h2>
                <p>
                  Vyrovnávejte tok obnovitelných zdrojů do sítě ukládáním a
                  vybíjením energie
                </p>
                <hr class="h-px w-10 my-4 bg-lightWhite border-0" />
                <h2 className="font-bold"> Podpora poptávky </h2>
                <p>
                  Vybíjejte energii během špičky a podpořte tak distribuční
                  infrastrukturu
                </p>
                <hr class="h-px w-10 my-4 bg-lightWhite border-0" />
                <h2 className="font-bold"> Investice do infrastruktury </h2>
                <p>
                  Odložte nákladné upgrady síťové infrastruktury ukládáním
                  energie na jedno místo
                </p>
              </div>
              <div>
                <hr class="h-px w-10 my-4 bg-lightWhite border-0" />
                <h2 className="font-bold"> Regulace napětí a frekvence </h2>
                <p>
                  Stabilizujte úrovně napětí absorpcí jalového výkonu a úpravou
                  výkonu
                </p>
                <hr class="h-px w-10 my-4 bg-lightWhite border-0" />
                <h2 className="font-bold"> Účast na trhu </h2>
                <p>
                  V reakci na upozornění provozovatele systému poskytněte
                  podporu energetické síti
                </p>
                <hr class="h-px w-10 my-4 bg-lightWhite border-0" />
                <h2 className="font-bold"> Mikrosíť</h2>
                <p>
                  Vybudujte lokalizovanou síť, která se může odpojit od hlavní
                  elektrické sítě
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* vyuziti end */}
      {/* footer start */}
      <div className="flex flex-col w-screen h-screen bg-black  text-lightWhite items-center justify-center mx-auto">
        <h1 className="text-4xl pb-5">Budování čistší sítě</h1>
        <p className="pb-5">
          Pokud potřebujete více informací, kontaktujte nás.
        </p>
        <button className="px-16 py-2 text-lg bg-transparent rounded-sm border-4 border-lightWhite">
          Kontaktujte nás
        </button>
        <div className="flex justify-center">
          <ul className=" flex-row text-gray-50 justify-center mx-auto text-[13px] gap-5 pt-60 hidden absolute md:flex">
            <li>Tesla © 2023</li>
            <li>Soukromí a právní informace</li>
            <li>Kontakt</li>
            <li>Novinky</li>
            <li>Dostávat novinky</li>
            <li>Kde nás najdete</li>
          </ul>
        </div>
      </div>
      {/* footer end */}
    </div>
  );
}

export default Megapack;
