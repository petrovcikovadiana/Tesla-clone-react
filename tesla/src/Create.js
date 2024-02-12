import React from "react";
import Img1 from "./support_hero_desktop.jpg";
import Img2 from "./getting.avif";
import Img3 from "./phone.jpg";
import NavSupport from "./components/NavSupport";

export default function Create() {
  return (
    <div>
      <NavSupport />
      <div className="relative bg-white h-screen">
        <img
          src={Img1}
          alt="house"
          className="md:h-[280px] md:w-[1600px] xxl:h-[450px] xxl:w-[2860px]"
        />
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <input
            type="email"
            id="email"
            className="bg-gray-200 text-gray-900 text-sm rounded-md block w-[332px] h-[40px] p-2.5"
            placeholder="Prohledat podporu"
          />
        </div>
        <div>
          <div className="flex flex-col  justify-center py-24 px-10 ">
            <h2 className="text-4xl  mx-auto ">Oblíbená témata</h2>
            <div className="py-10 mx-auto ">
              <ul className="flex flex-row gap-10">
                <li>Tipy pro jízdu v zimě</li>
                <li>Často kladené dotazy - objednání a dodání</li>
                <li>Podpora účtu</li>
                <li>Mobilní aplikace Tesla</li>
                <li>Návštěvy servisu</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row gap-36 mx-auto justify-center px-10 ">
            <div>
              <h2 className="h2 mb-10">Funkce a nabíjení</h2>
              <p className="text-secondary mb-4">Domácí nabíjení</p>
              <p className="text-secondary mb-4">Softwarové aktualizace</p>
              <p className="text-secondary mb-4">Funkce zabezpečení</p>
              <p className="text-secondary mb-4">Autopilot</p>
            </div>
            <div>
              {" "}
              <h2 className="h2 mb-10">Servis a opravy karosérií</h2>
              <p className="text-secondary mb-4">Příručky "Udělejte si sami"</p>
              <p className="text-secondary mb-4">Návštěvy servisu</p>
              <p className="text-secondary mb-4">Roadside Assistance</p>
              <p className="text-secondary mb-4">Záruka na vozidlo</p>
              <p className="text-secondary mb-4">
                Pojištění prodloužené záruky
              </p>
              <p className="text-secondary mb-4">Návštěvy servisu</p>
            </div>
            <div>
              {" "}
              <h2 className="h2 mb-10">Tesla účet</h2>
              <p className="text-secondary mb-4">Mobilní aplikace Tesla</p>
              <p className="text-secondary mb-4">Doporučte a získejte odměnu</p>
              <p className="text-secondary mb-4">Podpora účtu</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-10 mx-auto justify-center text-end mt-10">
          <div className=" my-auto">
            <h2 className="text-lg mb-7">Začínáme</h2>
            <p className="text-secondary mb-4">
              Zjistěte více o vlastnictví vozů Tesla – včetně návrhu a dodání
              vozu.
            </p>
            <p className="underline  mb-4">
              Často kladené dotazy – objednání a dodání
            </p>
            <p className="underline  mb-4">Připravte se na den dodání</p>
            <p className="underline  mb-4">Po převzetí vozu</p>
            <p className="underline  mb-4">Po nákupu ojetého vozu</p>
            <p className="underline  mb-4">Kde nás najdete</p>
          </div>
          <div>
            {" "}
            <img src={Img2} alt="cars" className="w-[512px] h-[385px]" />
          </div>
        </div>
        <div className="flex flex-row gap-10 mx-auto justify-center text-start mt-10">
          <div>
            {" "}
            <img src={Img3} alt="cars" className="w-[512px] h-[385px]" />
          </div>
          <div className=" my-auto">
            <h2 className="text-lg mb-7">Videoprůvodci</h2>
            <p className="text-secondary mb-4">
              Prohlédněte si knihovnu videí s užitečnými informacemi o funkcích
              produktů.
            </p>
            <p className="underline  mb-4">
              Často kladené dotazy – objednání a dodání
            </p>
            <p className="underline  mb-4">Připravte se na den dodání</p>
            <p className="underline  mb-4">Po převzetí vozu</p>
            <p className="underline  mb-4">Po nákupu ojetého vozu</p>
            <p className="underline  mb-4">Kde nás najdete</p>
          </div>
        </div>
        <div className="bg-lightWhite h-[266px] mt-16 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl pb-2">Nemůžete najít to, co hledáte?</h2>
            <p className="text-secondary text-sm pb-2">
              Pokud v našich tématech podpory stále nemůžete najít to, co
              hledáte, kontaktujte přímo zákaznickou podporu.
            </p>
            <button className="bg-lightWhite text-sm border border-black px-10 py-2">
              Kontaktujte nás
            </button>
          </div>
        </div>
        <div className="bg-[#393c41] h-64 text-lightWhite  pt-10 px-10">
          <div className="flex flex-row gap-10  justify-center">
            <div>Vaše nejbližší Prodejna a servisní centrum je Dresden</div>
            <div>
              <p>Lovosice Supercharger</p>
            </div>
            <div className="flex flex-row gap-7  justify-center ">
              <div className=" items-center justify-center">
                <p>Model S</p>
                <p>Model 3</p>
                <p>Model X</p>
                <p>Cybertruck</p>
              </div>
              <div>
                <p>Objednat vůz Tesla</p>
                <p>Svolávací akce po vozidla</p>
                <p>Investoři</p>
                <p>Dodavatelé</p>
              </div>
            </div>
          </div>
          <div className=" justify-center">
            <hr class="h-px my-8 bg-gray-600 border-0 " />

            <p className="flex justify-center">
              Tesla © 2023 | Soukromí a právní informace
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
