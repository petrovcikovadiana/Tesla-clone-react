import React from "react";
import event from "../assets/events.avif";
import Nav from "./Nav";

function Udalosti() {
  return (
    <div>
      <Nav />
      <div>
        <h1 className="hidden md:block absolute text-lightWhite text-4xl top-1/4 left-64">
          Události
        </h1>
        <img src={event} alt="event" className="md:h-1/3 md:w-screen " />
        <div className="flex md:flex-row flex-col gap-32 py-24 items-center justify-center">
          <div className="px-10">
            <h1 className="text-3xl pb-5">V okolí místa Česko</h1>
            <p className="text-secondary text-base">
              Nemůžete najít událost, kterou hledáte?{" "}
              <span className="underline">
                Dostávejte oznámení o budoucích událostech.{" "}
              </span>
            </p>
          </div>
          <div>
            <button className="bg-veryLightGray text-gray-400 font-bold px-16 py-3">
              Hledat podle místa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Udalosti;
