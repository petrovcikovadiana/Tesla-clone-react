import React from "react";
import {
  AiOutlineQuestionCircle,
  AiOutlineUser,
  AiOutlineGlobal,
} from "react-icons/ai";
import logo from "../assets/Tesla-Logo.png";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  let links = [
    {
      name: "Vozy",
      link: "/",
      categories: ["Category1", "Category2", "Category3"],
    },
    { name: "Energetická kapacita", link: "/" },
    { name: "Nabíjení", link: "/" },
    { name: "Informace", link: "/" },
    { name: "Obchod", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className=" w-full fixed  top-0 left-0 z-20">
      <div className="md:flex items-center justify-between bg-transparent py-4 md:px-10 px-7">
        <div className="font-bold text-2xxl cursor-pointer flex items-center">
          <img className="w-[153px]  h-[43px]" src={logo} alt="logo" />
        </div>
        <button
          onClick={() => setOpen(!open)}
          name={open ? "close" : "menu"}
          className=" text-lg text-white absolute right-8 top-6 cursor-pointer md:hidden px-4 py-1 backdrop-blur-md"
        >
          Nabídka
        </button>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:bg-transparent bg-white text-gray-500  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl md:my-0 my-7 relative"
            >
              <a
                href={link.link}
                className="md:text-white hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}

          <Button>
            <AiOutlineQuestionCircle />
          </Button>
          <Button>
            <AiOutlineGlobal />
          </Button>
          <Button>
            <AiOutlineUser />
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
