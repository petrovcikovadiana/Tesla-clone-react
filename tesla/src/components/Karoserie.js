import React from "react";
import Nav from "./Nav";
import { AiOutlineInfoCircle, AiFillStar } from "react-icons/ai";
import Navblack from "./Navblack";

function Karoserie() {
  return (
    <div>
      <Navblack />
      <div className="py-32">
        <div className="xxl:px-[800px] md:px-80 px-10">
          <h1 className="text-4xl pb-8">Podpora opraven karoserií</h1>
          <p className="text-secondary pb-5">
            Opravy karoserie neznamenají jen nápravu poškozené estetiky – jsou
            důležité také pro zajištění funkčnosti, bezpečnosti a životnosti
            vašeho vozu Tesla.
          </p>
          <h2 className="text-xl pb-2">
            Síť opraven karoserií schválených společností Tesla
          </h2>
          <p className="pb-3 text-secondary">
            Spojili jsme se s nejlepšími opravnami karoserií na světě, abychom
            vytvořili neustále se rozrůstající síť opraven karoserií schválených
            společností Tesla. Od opraven karoserií schválených společností
            Tesla v naší síti požadujeme dodržování nejvyšších standardů, což
            zajišťujeme prostřednictvím přísného školení a hodnocení. Chcete-li
            si naplánovat schůzku, obraťte se přímo na opravnu karoserií.
          </p>
          <p className="text-secondary pb-16">
            Pro další podporu pošlete e-mail našemu týmu podpory opraven
            karoserií. Nezapomeňte uvést číslo VIN a veškeré informace, které
            jsou relevantní pro opravnu karoserií.
          </p>
          <form>
            <label
              for="default-search"
              class=" text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-black "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-80 p-3 ps-10 text-sm text-gray-900 shadow-lg rounded-full bg-white    "
                placeholder="Zadat adresu"
              />
            </div>
          </form>
          <div className="pt-10">
            <h2>Advantage Cars</h2>
            <div className="flex flex-row gap-5 pt-2 ">
              <div className="text-blue-500 flex flex-row">
                {" "}
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>

              <p className="text-thin text-secondary">58 Reviews</p>
            </div>
            <p className="text-secondary">
              980 Freyova, HLAVNÍ MĚSTO PRAHA 190 00
            </p>
            <div className="flex flex-row gap-5 text-secondary">
              <p className="text-blue-500 ">+420 226 223 003</p>
              <p>Website</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Karoserie;
