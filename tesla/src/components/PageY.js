import React from "react";
import heroImage from "../assets/desktopy.jpg";
import structure from "../assets/bocni.jpg";
import interier from "../assets/interier.avif";
import autopilot from "../assets/autopilot.avif";
import int from "../assets/int.avif";
import back from "../assets/back.avif";
import trans from "../assets/trans.avif";
import panacek from "../assets/panacek.svg";
import strecha from "../assets/strecha.svg";
import wifi from "../assets/wifi.svg";
import sed from "../assets/sed.svg";
import eye from "../assets/eye.svg";
import kufor from "../assets/kufor.svg";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function PageY() {
  return (
    <div>
      {/* hero start */}
      <Nav />
      <div className="flex flex-row absolute md:top-[500px] top-[450px] text-center justify-center items-center bottom-0 left-0 right-0 gap-16 text-lightWhite max-w-[1600px] mx-auto">
        <div>
          <h2 className="text-2xl pb-2">2 100 +</h2>
          <p className="text-sm">litrů nákladového prostoru </p>
        </div>
        <div>
          <h2 className="text-2xl pb-2">533 km </h2>
          <p className="text-sm">Dojezd (WLTP) </p>
        </div>
        <div>
          <h2 className="text-2xl pb-2">AWD</h2>
          <p className="text-sm">Dual Motor </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-7 absolute bottom-0 left-0 right-0 top-[670px] justify-center items-center	">
        <button className="bg-opacity-80 bg-lightWhite text-lightBlack text-base rounded-md py-2 w-[500px] md:w-[250px] tracking-wider">
          Objednat
        </button>
        <Link to="/jizda">
          <button className=" bg-opacity-65 bg-transparent text-lightWhite border-4  text-base rounded-md py-2 w-[500px] md:w-[250px] tracking-wider">
            Testovací jízda
          </button>
        </Link>
      </div>
      <div
        className="h-screen w-screen flex text-5xl z-20  "
        style={{
          background: `url(${heroImage})`,
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col items-center mx-auto pt-32">
          <h1 className="pb-3">Model Y</h1>
          <p className="text-base underline">Prozkoumejte skladové vozy</p>
        </div>
      </div>
      {/* hero end */}
      {/* bezpecnost start */}
      <div className="flex md:flex-row flex-col">
        <div className="md:w-1/4 p-10">
          <p className="text-lg">Bezpečnost</p>
          <h1 className="text-2xl pb-5 font-bold">Navrženo pro bezpečnost</h1>
          <p className="text-sm pb-5">
            Bezpečnost je nejdůležitější u každého vozu Tesla. Naše vozy
            navrhujeme tak, aby{" "}
            <span className="underline">
              překračovaly bezpečnostní standardy.
            </span>
          </p>
          <h3 className="text-sm font-bold">
            5 hvězdiček a nejlepší bezpečnost ve své třídě
          </h3>
          <p className="text-sm pb-5">
            Model Y získal v roce 2022 5 hvězdiček v hodnocení bezpečnosti Euro
            NCAP a získal ocenění Nejlepší ve své třídě v kategorii malých
            terénních vozů.
          </p>
          <div className="flex flex-col gap-5 text-sm">
            <button className="md:mt-[350px] border-4 border-lightBlack px-32 py-1">
              Objednat
            </button>
            <button className=" bg-gray-200 px-16 py-2">
              Prozkoumejte skladové vozy
            </button>
          </div>
        </div>
        <img src={structure} alt="structure" className="md:w-3/4" />
      </div>
      {/* bezpecnost end */}
      {/* utilita start */}
      <div className="flex flex-row">
        <div
          className=" h-screen w-screen flex text-5xl z-20  "
          style={{
            background: `url(${interier})`,
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-row items-center mx-auto pt-[550px] px-24 gap-10 text-center">
            <div className="flex flex-col items-center justify-center mx-auto">
              <img src={panacek} alt="pan" />{" "}
              <p className="text-sm text-lightWhite ">
                Pohodlné sezení pro pět dospělých cestujících
              </p>
            </div>{" "}
            <div className="flex flex-col items-center justify-center mx-auto">
              <img src={sed} alt="pan" />{" "}
              <p className="text-sm text-lightWhite ">
                Všestranná sedadla a zavazadlový prostor pro náklad a cestující
              </p>
            </div>{" "}
            <div className="flex flex-col items-center justify-center mx-auto">
              <img src={kufor} alt="pan" />{" "}
              <p className="text-sm text-lightWhite ">
                Díky snadnému přístupu do zavazadlového prostoru je nakládání a
                vykládání pohodlné{" "}
              </p>
            </div>{" "}
          </div>
        </div>
        <div className="w-1/4 p-10 hidden md:block">
          <p className="text-lg">Utilita</p>
          <h1 className="text-2xl pb-5 font-bold">Místo pro všechno</h1>
          <p className="text-sm pb-5">
            Model Y poskytuje maximální všestrannost – schopnost přepravit 5
            cestujících a jejich náklad. Každé sedadlo druhé řady se dá
            samostatně zcela sklopit a vytvořit tak flexibilní úložný prostor
            pro lyže, nábytek, zavazadla a další věci. Dveře zavazadlového
            prostoru se otevírají do nízké podlahy zavazadlového prostoru, což
            usnadňuje a urychluje nakládání a vykládání.
          </p>

          <div className="flex flex-col gap-5 text-sm">
            <button className="mt-[350px] border-4 border-lightBlack px-32 py-1">
              Objednat
            </button>
            <button className=" bg-gray-200 px-16 py-2">
              Prozkoumejte skladové vozy
            </button>
          </div>
        </div>
      </div>
      {/* utilita end */}
      {/* dual motor start */}
      <div className="relative flex md:flex-col">
        <div className="hidden md:block">
          <img src={back} className="imgS" alt="S" />
          <div className="flex flex-col md:flex-row absolute top-[150px] text-center justify-center items-center bottom-0 left-0 right-0 gap-16 text-lightWhite pb-10 px-64">
            <div>
              <h2 className="text-2xl pb-2">2 </h2>
              <p className="text-sm">
                Nezávislé motory digitálně řídí točivý moment předních a zadních
                kol
              </p>
            </div>{" "}
            <div>
              <h2 className="text-2xl pb-2">3,7 s </h2>
              <p className="text-sm">
                Nejvyšší zrychlení – z 0 na 100 km/h* za 3,7 sekundy
              </p>
            </div>
            <div>
              <h2 className="text-2xl pb-2">2,1 s </h2>
              <p className="text-sm">
                Bezproblémová jízda v dešti, na sněhu, v blátě i v terénu díky
                vynikající kontrole trakce
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col md:flex-row mx-44 gap-5">
          <div className="py-16 w-96">
            <p>Pohon všech kol</p>
            <h1 className="text-3xl pb-6">Dual Motor</h1>
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
              Systém pohonu všech kol Tesla využívá dva extra citlivé nezávislé
              elektromotory, které digitálně regulují točivý moment dodávaný na
              přední a zadní kola—pro mnohem lepší ovladatelnost a kontrolu
              trakce i stability. Model Y je schopen jízdy v dešti, na sněhu, v
              blátě i v terénu.
            </p>
          </div>
        </div>
      </div>
      {/* dual motor end */}
      {/* cestovani bez hranic start */}
      <div className="flex flex-row">
        <div
          className=" h-screen w-screen flex text-5xl z-20  "
          style={{
            background: `url(${interier})`,
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-row items-center mx-auto pt-[550px] px-24 gap-10 text-center">
            <div className="flex flex-col items-center justify-center mx-auto">
              <h3 className="text-2xl text-lightWhite pb-3">533 km</h3>{" "}
              <p className="text-sm text-lightWhite ">
                Jezděte bez omezení díky dojezdu až 533 km (WLTP) na jedno
                nabití
              </p>
            </div>{" "}
            <div className="flex flex-col items-center justify-center mx-auto">
              <h3 className="text-2xl text-lightWhite pb-3">15 min</h3>{" "}
              <p className="text-sm text-lightWhite ">
                Nabijte na Superchargeru až 241 km za 15 minut
              </p>
            </div>{" "}
            <div className="flex flex-col items-center justify-center mx-auto">
              <h3 className="text-2xl text-lightWhite pb-3">50 000 +</h3>{" "}
              <p className="text-sm text-lightWhite ">
                Nabíječky Supercharger umístěny podél
              </p>
            </div>{" "}
          </div>
        </div>
        <div className="w-1/4 p-10 hidden md:block">
          <p className="text-lg">Dojezd</p>
          <h1 className="text-2xl pb-5 font-bold">Cestování bez hranic</h1>
          <p className="text-sm pb-5">
            Model Y je plně elektrický, takže již nikdy nebudete muset navštívit
            čerpací stanici. Pokud budete vůz nabíjet doma přes noc, můžete
            každé ráno přijít k vozu s plně nabitým akumulátorem. A vůz snadno
            dobijete i na cestách – u kterékoli veřejné stanice nebo u nabíječek
            v síti společnosti Tesla. V současné době máme po celém světě více
            než 50 000 nabíječek Supercharger a každý týden otevíráme šest
            nových nabíjecích stanic.
          </p>

          <div className="flex flex-col gap-5 text-sm">
            <button className="mt-[350px] border-4 border-lightBlack px-32 py-1">
              Objednat
            </button>
            <button className=" bg-gray-200 px-16 py-2">
              Prozkoumejte skladové vozy
            </button>
          </div>
        </div>
      </div>
      {/* cestovani bez hranic end */}
      {/* autopilot start */}{" "}
      <div className="relative flex md:flex-col bg-lightWhite text-black ">
        <div className="absolute text-lightBlack ">
          <div className="p-12 ">
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
              Vyspělé bezpečnostní a praktické funkce systému Autopilot vám
              pomáhají s nejúnavnějšími aspekty řízení.
            </p>
          </div>
        </div>
      </div>{" "}
      {/* autopilot end */}
      {/* interier start */}{" "}
      <div className="relative flex md:flex-col bg-white text-black ">
        <div className="absolute text-lightWhite left-[1200px]">
          <div className="p-10 w-80">
            <h1 className="text-2xl font-bold pb-2">15 palců</h1>
            <p className="text-sm">
              Dotyková obrazovka navržená pro průběžná vylepšení
            </p>
          </div>
          <div className="p-10 w-80">
            <img src={wifi} alt="wifi" className="pb-2" />{" "}
            <p className="text-sm">
              Bezdrátové aktualizace softwaru na dálku přinášejí nové funkce a
              vyšší výkon
            </p>
          </div>
          <div className="p-10 w-80">
            <img src={strecha} alt="strecha" className="pb-2" />{" "}
            <p className="text-sm">
              Velká prosklená střecha nabízí více prostoru nad hlavou a ochranu
              před UV zářením
            </p>
          </div>
        </div>
        <img src={int} className="imgS" alt="S" />
        <div className="flex flex-col md:flex-row mx-44 gap-10">
          <div className="py-16 w-96">
            <p>Interiér</p>
            <h1 className="text-3xl pb-6">Navržen s důrazem na řidiče</h1>
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
              Díky vyvýšenému místu k sezení a nízkému přístrojovému panelu má
              řidič úchvatný výhled na silnici před sebou. Interiér vozu Model Y
              je jednoduchý a čistý, s 15palcovou dotykovou obrazovkou,
              podmanivým zvukovým systémem a velkou celoskleněnou střechou,
              která vytváří více prostoru nad hlavou a poskytuje ničím nerušený
              výhled na oblohu.
            </p>
          </div>
        </div>
      </div>{" "}
      {/* interier end */}
      {/* final page start */}
      <div className="bg-white">
        <div className="flex flex-row justify-center items-center h-screen gap-32 px-24">
          <div className="w-1/2">
            {" "}
            <h1 className=" text-3xl pb-5">Model Y</h1>
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
          <img src={trans} alt="side" className="w-1/2" />
        </div>
        {/* final page end */}
        {/* footer start */}
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
      {/* footer end */}
    </div>
  );
}

export default PageY;
