import React, { useState } from "react";
import {
  AiOutlineQuestionCircle,
  AiOutlineUser,
  AiOutlineGlobal,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import logo from "../assets/Tesla-Logo.png";
import Button from "./Button";
import { Link } from "react-router-dom";
import Create from "../Create";

export default function Navbar() {
  let links = [
    {
      name: "Vozy",
      link: "/",
      sublinks: [
        { name: "ModelY", link: "/create", image: "./assets/model-S.png" },
        { name: "ModelS", link: "/modelS" },
        { name: "ModelX", link: "/modelX" },
        { name: "Model3", link: "/model3" },
        { name: "Cybertruck", link: "/modelX" },
      ],
    },
    { name: "Energetická kapacita", link: "/" },
    { name: "Nabíjení", link: "/" },
    { name: "Informace", link: "/" },
    { name: "Obchod", link: "/" },
  ];
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="w-full fixed top-0 left-0 z-30">
      <div className="md:flex items-center justify-between bg-transparent py-4 md:px-10 px-7">
        <div className="font-bold text-2xxl cursor-pointer flex items-center">
          <img className="w-[153px] h-[43px]" src={logo} alt="logo" />
        </div>
        <button
          onClick={() => setOpen(!open)}
          name={open ? "close" : "menu"}
          className="text-lg text-white absolute right-8 top-6 cursor-pointer md:hidden px-4 py-1 backdrop-blur-md"
        >
          Nabídka
        </button>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:bg-transparent bg-lightWhite text-gray-500 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl md:my-0 my-7 relative group"
            >
              <Link
                to={link.link}
                className="md:text-lightWhite hover:text-gray-400 duration-500"
              >
                {link.name}
              </Link>
              {link.sublinks && (
                <ul className="hidden absolute w-screen top-full bg-lightWhite text-gray-500 group-hover:block">
                  <div className="flex flex-row">
                    <div className="flex flex-row gap-5">
                      {" "}
                      {link.sublinks.map((sublink) => (
                        <li key={sublink.name} className="">
                          <Link to={sublink.link}>
                            <div>
                              <img
                                src={sublink.image}
                                alt={sublink.name}
                                className="w-10 h-10"
                              />
                              <span>{sublink.name}</span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </div>
                    <div>
                      <li>Testovaci jizda </li>
                      <li>Předem nakonfigurovaná vozidla </li>
                      <li>Certifikované ojeté vozy </li>
                      <li>Firemní vozidla </li>
                      <li>Roadster </li>
                    </div>
                  </div>
                </ul>
              )}
            </li>
          ))}
        </ul>
        {/* dropdown menu desktop end */}

        <div className="md:flex hidden text-lightWhite">
          <Link to="/create">
            <button className="btn-modal px-5">
              <AiOutlineQuestionCircle />
            </button>
          </Link>
          <button className="btn-modal px-5">
            <AiOutlineGlobal />
          </button>
          <button onClick={toggleModal} className="btn-modal px-5">
            {" "}
            <AiOutlineUser />
          </button>{" "}
          {modal && (
            <div className="modal">
              <div onClick={toggleModal} className="overlay"></div>
              <div className="modal-content  mx-auto text-center ">
                <h2 className="text-center text-3xl pb-7 text-gray-900">
                  Přihlásit se
                </h2>
                <div class="mb-5 ">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 items-center justify-center mx-auto"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-200  text-gray-900 text-sm rounded-md  block w-[332px] h-[40px] p-2.5 items-center justify-center mx-auto  "
                  />
                </div>
                <button className="bg-blue-200 px-4 rounded-md w-[332px] h-[40px]  text-gray-900 ">
                  Další
                </button>
                <p className="underline items-center text-gray-900 text-base justify-center text-center pt-5">
                  Máte potíže s přihlášením?
                </p>

                <div class="inline-flex items-center justify-center w-full">
                  <hr class="w-64 h-px my-8 bg-gray-100 border-1 " />
                  <span class="absolute px-3  text-gray-500 -translate-x-1/2 bg-white left-1/2 0">
                    Nebo
                  </span>
                </div>
                <button className="bg-gray-200 px-4 rounded-md w-[332px] h-[40px] mb-5 text-gray-900 ">
                  Vytvořit účet
                </button>
                <button className="close-modal" onClick={toggleModal}>
                  <AiOutlineCloseCircle />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
