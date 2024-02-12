import React, { useState } from "react";
import Nav from "./Nav";
import icon3 from "../assets/icon-3.avif";
import S from "../assets/icon-S.png";
import Y from "../assets/icon-Y.png";
import X from "../assets/icon-X.png";
import Navblack from "./Navblack";

function Jizda() {
  const [selectedModel, setSelectedModel] = useState(S);
  const [selectedButton, setSelectedButton] = useState("Model S");

  const handleButtonClick = (model, buttonName) => {
    setSelectedModel(model);
    setSelectedButton(buttonName);
  };

  return (
    <div>
      <Navblack />
      {/* hero start */}
      <div className="h-screen w-screen md:items-center md:justify-center mt-44 md:mt-0 flex flex-col px-20 md:px-40">
        <div className="md:px-52 ">
          <h2 className="md:text-4xl text-3xl text-center md:text-start text-black pb-5">
            Naplánovat testovací jízdu
          </h2>
          <p className="text-lg text-lightBlack text-center md:text-start">
            Vyzkoušejte si testovací jízdu s vozem Tesla v prodejně ve vašem
            okolí. Řidiči musí vlastnit platný řidičský průkaz. Abyste mohli
            řídit Model S a Model X, musíte být držitelem platného řidičského
            průkazu už alespoň sedm let.
          </p>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-center mt-10 ">
          <div className="flex md:flex-col flex-wrap md:justify-normal justify-center gap-5 md:w-1/4  ">
            <button
              className={`border-2 ${
                selectedButton === "Model S"
                  ? "border-blue-500 border-4"
                  : "border-lightGray"
              } py-3 px-10 rounded-md`}
              onClick={() => handleButtonClick(S, "Model S")}
            >
              Model S
            </button>
            <button
              className={`border-2 ${
                selectedButton === "Model 3"
                  ? "border-blue-500 border-4"
                  : "border-lightGray"
              } py-3 px-10 rounded-md`}
              onClick={() => handleButtonClick(icon3, "Model 3")}
            >
              Model 3
            </button>{" "}
            <button
              className={`border-2 ${
                selectedButton === "Model X"
                  ? "border-blue-500 border-4"
                  : "border-lightGray"
              } py-3 px-10 rounded-md`}
              onClick={() => handleButtonClick(X, "Model X")}
            >
              Model X
            </button>{" "}
            <button
              className={`border-2 ${
                selectedButton === "Model Y"
                  ? "border-blue-500 border-4"
                  : "border-lightGray"
              } py-3 px-10 rounded-md`}
              onClick={() => handleButtonClick(Y, "Model Y")}
            >
              Model Y
            </button>
          </div>
          <img src={selectedModel} alt={selectedModel} className="md:w-1/2" />
        </div>
      </div>
      {/* hero end */}
      {/* contact start */}
      <div className="h-screen w-screen md:justify-center flex flex-col md:px-40 ">
        <div className="md:px-52 px-20 ">
          <h2 className="text-4xl text-black pb-5">Najít čas a místo</h2>
          <p className="text-lg text-lightBlack pb-5">
            Zadejte své PSČ pro vyhledání showroomů Tesla a naplánování
            testovací jízdy
          </p>
          <input
            type="text"
            id="psc"
            className="bg-veryLightGray  text-black text-sm rounded-md   block md:w-1/2 p-2.5 "
            placeholder="PSČ"
          />
        </div>
        <div className="md:px-52 px-20 pt-10 md:pt-32">
          <h2 className="text-4xl text-black pb-10">Kontaktní údaje</h2>
          <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  className="block mb-2 text-lg font-medium text-gray-500"
                >
                  Jméno
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-veryLightGray  text-lightGray text-sm rounded-md   block w-full p-2.5  "
                />
              </div>
              <div>
                <label
                  for="last_name"
                  className="block mb-2 text-lg font-medium text-gray-500"
                >
                  Příjmení{" "}
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="bg-veryLightGray  text-black text-sm rounded-md   block w-full p-2.5  "
                />
              </div>
              <div>
                <label
                  for="company"
                  className="block mb-2 text-lg font-medium text-gray-500"
                >
                  Email{" "}
                </label>
                <input
                  type="text"
                  id="company"
                  class="bg-veryLightGray  text-black text-sm rounded-md   block w-full p-2.5  "
                />
              </div>
              <div>
                <label
                  for="phone"
                  class="block mb-2 text-lg font-medium text-gray-500"
                >
                  Telefonní číslo{" "}
                </label>
                <input
                  type="tel"
                  id="phone"
                  class="bg-veryLightGray  text-black text-sm rounded-md   block w-full p-2.5  "
                  placeholder="CZ +420"
                />
              </div>
            </div>
          </form>
          <p className="text-lg text-lightBlack py-20">
            Kliknutím na možnost „Odeslat a pokračovat“ dávám společnosti Tesla
            souhlas, aby mě prostřednictvím poskytnutých kontaktních údajů
            kontaktovala v souvislosti s touto žádostí a s dalšími informacemi o
            produktech, službách a regionálních akcích společnosti Tesla.
            Rozumím, že při volání nebo textových zprávách může společnost
            využívat automatické vytáčení nebo vytáčení řízené počítačem nebo
            předem nahrané zprávy. Běžně se účtují poplatky za zprávy a data.
            Kdykoli se můžu odhlásit v aplikaci Tesla nebo{" "}
            <span className="underline">odhlášení odběru</span> .
          </p>
          <button className="bg-[#3e6ae1] hover:bg-[#3457b1] text-white rounded-md px-16 py-3 mb-10">
            Naplánovat testovací jízdu
          </button>
        </div>
      </div>
      {/* contact end */}
      <ul className="hidden md:flex flex-row text-gray-500 text-[13px] mx-auto gap-5 md:mt-16 items-center justify-center text-center pt-20 pb-10">
        <li>Tesla © 2023</li>
        <li>Soukromí a právní informace</li>
        <li>Kontakt</li>
        <li>Novinky</li>
        <li>Dostávat novinky</li>
        <li>Kde nás najdete</li>
      </ul>
    </div>
  );
}

export default Jizda;
