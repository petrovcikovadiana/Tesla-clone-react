import React from "react";
import desktop from "../assets/desktop.jpg";
import c from "../assets/c.jpg";
import machine from "../assets/machine.png";
import hero from "../assets/hero.avif";
import wild from "../assets/wild.avif";
import men from "../assets/men.avif";
import Navbar from "./Navbar";
import cyber from "../assets/cyber.webm";
import plech from "../assets/plech.mp4";
import sklo from "../assets/sklo.mp4";
import prepared from "../assets/prepared.mp4";
import cyb from "../assets/cyb.svg";

function Cybertruck() {
  return (
    <div>
      <Navbar />
      {/* hero image start */}

      <div
        className=" h-screen w-screen flex text-5xl z-20 relative"
        style={{
          background: `url(${desktop})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-lightWhite font-medium tracking-wide z-10 mt-44 ">
          <img src={cyb} alt="cyber_icon" />{" "}
        </div>
        <div className="flex flex-col md:flex-row gap-7 absolute bottom-0 left-0 right-0 top-[600px] justify-center items-center	">
          <button className="bg-opacity-80 border-4 border-[#171a20] border-t-lightGray bg-[#171a20] text-lightGray text-sm rounded-md py-3 w-[500px] md:w-[200px] tracking-wider">
            DOSTÁVAT NOVINKY
          </button>
        </div>
      </div>
      {/* hero image end */}
      <div
        className=" h-screen w-screen flex text-5xl z-20 relative"
        style={{
          background: `url(${hero})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col md:flex-row gap-7 absolute bottom-0 left-0 right-0 top-[600px] justify-center items-center	">
          <div className="">
            <ul className="flex flex-row gap-10">
              <li className="pr-2 pt-2 w-56  border-t-white border-2 border-b-transparent border-l-transparent text-lightWhite">
                <div className="flex flex-col p-2 bg-black bg-opacity-50 h-[80px]	">
                  <div>
                    <p className="text-xl opacity-100">4 990 KG</p>{" "}
                  </div>
                  <div className="text-sm font-light">
                    PŘÍPUSTNÁ HMOTNOST PŘÍVĚSU
                  </div>
                </div>
              </li>
              <li className=" pt-2 w-56 border-t-white border-2 border-b-transparent border-l-transparent border-r-transparent text-lightWhite">
                <div className="flex flex-col p-2 bg-black bg-opacity-50 h-[80px]	">
                  <div>
                    <p className="text-xl opacity-100">547 KM*</p>{" "}
                  </div>
                  <div className="text-sm font-light">ODHAD.DOJEZD</div>
                </div>
              </li>{" "}
              <li className="pl-2 pt-2 w-56 border-t-white border-2 border-b-transparent border-r-transparent border-l-lightWhite text-lightWhite">
                <div className="flex flex-col p-2 bg-black bg-opacity-50 h-[80px]	">
                  <div>
                    <p className="text-xl opacity-100">2,7 SEK</p>{" "}
                  </div>
                  <div className="text-sm font-light">0-100 KM/H</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* video full start */}
      <div className=" h-screen flex overflow-hidden">
        <video
          className="w-full h-full object-cover pt-44 px-20 bg-black "
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={cyber} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex flex-row gap-10  bg-black py-20 px-44">
        <h1 className="uppercase text-4xl text-lightGray">
          Navrženo pro jakoukoliv planetu
        </h1>
        <p
          className="w-[550px] font-lighter text-sm text-secondary leading-loose
"
        >
          DOSTATEČNĚ ODOLNÝ A ROBUSTNÍ VŮZ, ABYSTE MOHLI CESTOVAT KAMKOLI BUDETE
          CHTÍT. ZVLÁDNĚTE COKOLI S ELEKTRONICKÝM ADAPTIVNÍM VZDUCHOVÝM
          ODPRUŽENÍM, KTERÉ NABÍZÍ ZDVIH 305 MM A SVĚTLOU VÝŠKU 432 MM.
        </p>
      </div>
      {/* video full end */}

      {/* video content start */}
      <div className="flex flex-row px-10 items-top justify-center gap-20 bg-black py-20 ">
        <video
          className="w-[628px] h-[628px] object-cover   bg-black "
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={plech} type="video/mp4" />
          Your browser does not support the video tag.
        </video>{" "}
        <div className="flex flex-col  bg-black w-[550px]">
          <h2 className="uppercase text-4xl pb-10 text-lightGray pt-16">
            žádná barva, žádné úlomky
          </h2>
          <p
            className=" text-secondary font-lighter text-sm leading-loose
"
          >
            {" "}
            VNĚJŠÍ PLÁŠŤ Z EXTRATVRDÉ NEREZOVÉ OCELI PŘISPÍVÁ K MENŠÍMU MNOŽSTVÍ
            PROMÁČKNUTÍ, POŠKOZENÍ A DLOUHODOBÉMU VZNIKU KOROZE. OPRAVY JSOU
            JEDNODUCHÉ A RYCHLÉ.
          </p>
        </div>
      </div>
      <div className="flex flex-row px-10 items-top justify-center gap-20 bg-black py-20 ">
        <div className="flex flex-col  bg-black w-[550px]">
          <h2 className="uppercase text-4xl pb-10 text-lightGray pt-16">
            ODOLNÉ PROTI ROZBITÍ
          </h2>
          <p
            className=" text-secondary font-lighter text-sm leading-loose
"
          >
            {" "}
            SKLO ARMOR GLASS ODOLÁVÁ NÁRAZU BASEBALOVÉHO MÍČE PŘI RYCHLOSTI 112
            KM/H NEBO KRUPOBITÍ 4. TŘÍDY. AKUSTICKÁ SKLA PŘISPÍVAJÍ K TOMU, ŽE
            JE V KABINĚ TICHO JAKO VE VESMÍRU.
          </p>
        </div>
        <video
          className="w-[628px] h-[628px] object-cover   bg-black "
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={sklo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>{" "}
      </div>
      {/* video content end */}
      {/* video full start */}
      <div className=" h-screen flex overflow-hidden ">
        <video
          className="w-full h-full object-cover pt-44 px-20 bg-black "
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={prepared} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex flex-row   bg-black py-20 px-44 gap-32">
        <h1 className="uppercase text-4xl text-lightGray">
          VÍCE NEŽ PŘIPRAVENO
        </h1>
        <p
          className="w-[708px] font-lighter text-sm text-secondary leading-loose
"
        >
          UTÁHNĚTE VŠECHNO, CO POTŘEBUJETE, DÍKY UŽITEČNÉMU ZATÍŽENÍ 1 134 KG A
          PŘÍPUSTNÉ HMOTNOSTI PŘÍVĚSU 4 990 KG, COŽ ODPOVÍDÁ PRŮMĚRNÉMU
          HMOTNOSTI SLONA AFRICKÉHO. EXTRA PEVNÁ KOMPOZITNÍ LOŽNÁ PLOCHA
          NEVYŽADUJE VLOŽKU A JE DOSTATEČNĚ VELKÁ PRO KONSTRUKČNÍ MATERIÁLY O
          VELIKOSTI 4’X8’.
        </p>
      </div>
      {/* video full end */}
      {/* wild desktop start */}
      <div
        className=" h-screen w-screen flex text-5xl z-20 relative"
        style={{
          background: `url(${wild})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {" "}
        <div className="absolute top-0 left-1/4 transform -translate-x-1/2 text-start p-8  w-[450px] text-lightWhite tracking-wide z-10 mt-44 bg-black bg-opacity-70 rounded-br-3xl border-t-2 border-t-lightWhite ">
          <h1 className="text-xl uppercase pb-5 font-light">Do divočiny</h1>
          <p className="font-light text-sm leading-loose">
            DOJEĎTE AŽ 547 KM* NA JEDNO NABITÍ — TO BOHATĚ POSTAČÍ NA TO, ABYSTE
            SE DOSTALI DO OKOLNÍ PŘÍRODY. DOJEZD DALŠÍCH AŽ 235 KM ZÍSKÁTE BĚHEM
            POUHÝCH 15 MINUT NABÍJENÍ SUPERCHARGING.
          </p>
        </div>
      </div>
      {/* wild desktop end */}
      {/* left content and right image start */}
      <div className="flex flex-row px-32 py-32 bg-black">
        <div className="w-[400px] pt-20">
          <h2 className="uppercase text-3xl text-lightGray w-56 pb-10">
            ENERGIE VŽDY NA DOSAH RUKY
          </h2>
          <p className="font-lighter text-sm text-secondary leading-loose w-56">
            OVLÁDEJTE SVOJE NÁSTROJE NEBO NABÍJEJTE LIBOVOLNÝ ELEKTROMOBIL
            POMOCÍ INTEGROVANÝCH 120V A 240V ZÁSUVEK NA LOŽNÉ PLOŠE I V KABINĚ.
            BĚHEM VÝPADKU SÍTĚ MŮŽETE DODAT AŽ 11,5 KW ENERGIE PŘÍMO SVÉ
            DOMÁCNOSTI, TAKŽE NEZŮSTANETE BEZ SVĚTLA.
          </p>
        </div>
        <img src={men} alt="men" className="w-[950px] rounded-bl-3xl" />
      </div>
      {/* left content and right image end */}
      {/* video full start */}
      <div className=" h-screen flex overflow-hidden ">
        <video
          className="w-full h-full object-cover pt-10 px-20 bg-black "
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={prepared} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex flex-row   bg-black py-10 px-44 gap-32">
        <h1 className="uppercase text-4xl text-lightGray">DOPAMINOVÝ DOPING</h1>
        <p
          className="w-[708px] font-lighter text-sm text-secondary leading-loose
"
        >
          ZRYCHLENÍ Z 0 NA 100 KM/H ZA POUHÝCH 2,7 SEKUNDY† V REŽIMU BEAST MODE
          PŘI ZACHOVÁNÍ STABILITY PŘI VYSOKÝCH RYCHLOSTECH. DÍKY TECHNOLOGII
          STEER-BY-WIRE A NATÁČENÍ ZADNÍ NÁPRAVY ZÍSKÁTE OVLADATELNOST
          SPORTOVNÍHO VOZU A VĚTŠÍ POLOMĚR OTÁČENÍ, NEŽ MÁ VĚTŠINA SEDANŮ.
        </p>
      </div>
      {/* video full end */}
      {/* left content and right image start */}
      <div className="flex flex-row px-32 py-32 bg-black">
        <div className="w-[400px] pt-20">
          <h2 className="uppercase text-3xl text-lightGray w-56 pb-10">
            ODOLNÝ ZVENKU, POHODLNÝ UVNITŘ{" "}
          </h2>
          <p className="font-lighter text-sm text-secondary leading-loose w-56">
            NECHTE SE OKOUZLIT PROSTORNOU KABINOU PLNOU NAŠICH MODERNÍCH
            TECHNOLOGICKÝCH A ZÁBAVNÍCH FUNKCÍ.
          </p>
        </div>
        <img src={machine} alt="men" className="w-[950px] rounded-bl-3xl" />
      </div>
      {/* left content and right image end */}
      {/* last image start */}

      <div
        className=" h-screen w-screen flex text-5xl z-20 relative"
        style={{
          background: `url(${c})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-lightWhite font-medium tracking-wide z-10 mt-44 ">
          <img src={cyb} alt="cyber_icon" />{" "}
        </div>
        <div className="flex flex-col md:flex-row gap-7 absolute bottom-0 left-0 right-0 top-[500px] justify-center items-center	">
          <button className="bg-opacity-80 border-4 border-[#171a20] border-t-lightGray bg-[#171a20] text-lightGray text-sm rounded-md py-3 w-[500px] md:w-[200px] tracking-wider">
            DOSTÁVAT NOVINKY
          </button>
        </div>
        <div className="flex flex-col absolute bottom-0 left-0 right-0 top-[670px] justify-center items-center text-sm font-thin text-lightWhite">
          <p>*Pohon všech kol</p>
          <p>†Cyberbeast; s odečteným rollout</p>
          {/* footer start */}
          <div className="pt-10">
            {" "}
            <ul className=" flex-row text-lightGray uppercase items-center justify-center text-[13px] gap-5 hidden md:flex ">
              <li>Tesla © 2023</li>
              <li>Soukromí a právní informace</li>
              <li>Kontakt</li>
              <li>Novinky</li>
              <li>Dostávat novinky</li>
              <li>Kde nás najdete</li>
            </ul>
          </div>
                    {/* footer end */}

        </div>
      </div>
      {/* last image end */}
    </div>
  );
}
export default Cybertruck;
