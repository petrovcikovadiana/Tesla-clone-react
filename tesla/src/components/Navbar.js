import React, { useState } from "react";
import {
  AiOutlineQuestionCircle,
  AiOutlineUser,
  AiOutlineGlobal,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import logo from "../assets/Tesla-Logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  let links = [
    {
      name: "Vozy",
      link: "/",
      sublinks: [
        {
          name: "Model S",
          link: "/pageS",
          image: require("../assets/icon-S.png"),
          additionalTextL: "Více",
          additionalTextR: "Objednat",
        },

        {
          name: "Model 3",
          link: "/page3",
          image: require("../assets/icon-3.avif"),
          additionalTextL: "Více",
          additionalTextR: "Objednat",
        },
        {
          name: "Model X",
          link: "/pageX",
          image: require("../assets/icon-X.png"),
          additionalTextL: "Více",
          additionalTextR: "Objednat",
        },
        {
          name: "Model Y",
          link: "/pagey",
          image: require("../assets/icon-Y.png"),
          additionalTextL: "Více",
          additionalTextR: "Objednat",
        },
        {
          name: "Cybertruck",
          link: "/cybertruck",
          image: require("../assets/icon-cyber.png"),
          additionalTextL: "Více",
          additionalTextR: "Objednat",
        },
        {
          name: "Pomozte mi s výběrem",
          link: "/help",
          image: require("../assets/blue-red.png"),
          additionalTextL: "Více",
          additionalTextR: "Objednat",
        },
      ],
      text1: "Testovací jízda",
      text2: "Předem nakonfigurovaná vozidla",
      text3: "Certifikované ojeté vozy",
      text4: "Firemní vozidla",
      text5: "Roadster",
    },
    {
      name: "Energetická kapacita",
      link: "/",
      sublinks: [
        {
          name: "Powerwall",
          link: "/powerwall",
          image: require("../assets/powerwall.png"),
          additionalTextL: "Více",
        },

        {
          name: "Megapack",
          link: "/megapack",
          image: require("../assets/megapack.png"),

          additionalTextL: "Více",
        },
      ],
      content1: "Podniky veřejných služeb",
      content2: "Komerční",
    },
    {
      name: "Nabíjení",
      link: "/",
      sublinks: [
        {
          name: "Nabíjení",
          link: "/nabijeni",
          image: require("../assets/charging.png"),
          additionalTextL: "Více",
          additionalTextR: "Objednat",
        },

        {
          name: "Domácí nabíjení",
          link: "/homecharging",
          image: require("../assets/homecharging.png"),

          additionalTextL: "Více",
          additionalTextR: "Objednat",
        },
        {
          name: "Supercharging",
          link: "/supercharging",
          image: require("../assets/supercharging.png"),

          additionalTextL: "Více",
          additionalTextR: "Objednat",
        },
      ],
      content3: "Plánovač tras",
      content4: "Hlasování o stanici Supercharger",
      content5: "Provozujte Supercharger stanice",
      content6: "Hostitelské nabíječky Wall Connector",
    },
    { name: "Informace", link: "/" },
    {
      name: "Obchod",
      link: "/",
      sublinks: [
        {
          name: "Nabíjení",
          link: "/nabijeni",
          image: require("../assets/charging.png"),
        },
        {
          name: "Příslušenství vozidla",
          link: "/",
          image: require("../assets/vehicle.png"),
        },
        {
          name: "Oblečení",
          link: "/",
          image: require("../assets/hat.png"),
        },
        {
          name: "Životní styl",
          link: "/nabijeni",
          image: require("../assets/batoh.png"),
        },
      ],
    },
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
        <div className="font-bold text-2xl cursor-pointer flex items-center">
          <Link to="/">
            <img className="w-[153px] h-[43px]" src={logo} alt="logo" />
          </Link>
        </div>
        {/* hamburger menu nabídka start */}
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
          {/* hamburger menu nabídka end */}
          {/* desktop links start */}
          {links.map((link) => (
            <li
              key={link.name}
              className="md:pr-6 text-xl md:my-0 my-7 relative group "
            >
              <Link
                to={link.link}
                className="md:text-lightWhite hover:text-gray-400 duration-500"
              >
                {link.name}
              </Link>
              {link.sublinks && (
                <ul className="hidden mx-auto items-center justify-center w-[1600px]  bg-lightWhite text-gray-500 group-hover:block p-24 z-10">
                  <div className="flex flex-row">
                    <div className="flex flex-wrap gap-5 text-center">
                      {" "}
                      {link.sublinks.map((sublink) => (
                        <li key={sublink.name} className="">
                          <Link to={sublink.link}>
                            <div>
                              <img
                                src={sublink.image}
                                alt={sublink.name}
                                className="w-[184px] h-[104px]"
                              />
                              <div className="flex flex-col">
                                <span>{sublink.name}</span>
                                <span className="text-sm text-secondary">
                                  <span className="underline">
                                    {sublink.additionalTextL}
                                  </span>{" "}
                                  &nbsp;&nbsp;&nbsp;
                                  <span className="underline">
                                    {sublink.additionalTextR}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </div>

                    {/* desktop links end */}

                    <div className="h-72  border-r border-gray-300  "></div>
                    <div className="flex flex-col pl-16 text-lightBlack ">
                      <span className="mb-2">{link.text1}</span>
                      <span className="mb-2">{link.text2}</span>
                      <span className="mb-2">{link.text3}</span>
                      <span className="mb-2">{link.text4}</span>
                      <span className="mb-2">{link.text5}</span>
                      <span className="mb-2">{link.content3}</span>
                      <span className="mb-2">{link.content4}</span>
                      <span className="mb-2">{link.content5}</span>
                      <span className="mb-2">{link.content6}</span>
                      <span className="mb-2">{link.content1}</span>{" "}
                      <span className="mb-2"> {link.content2}</span>
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
            <button className="btn-modal px-3">
              <AiOutlineQuestionCircle />
            </button>
          </Link>
          <button className="btn-modal px-3">
            <AiOutlineGlobal />
          </button>
          <button onClick={toggleModal} className="btn-modal px-3">
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
