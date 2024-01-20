import logo from "../assets/Tesla-Logo.png";
import icons from "../assets/icon-S.png";
import iconx from "../assets/icon-X.png";
import icony from "../assets/icon-Y.png";
import iconcy from "../assets/icon-cyber.png";
import bluered from "../assets/blue-red.png";
import powerwall from "../assets/powerwall.png";
import megapack from "../assets/megapack.png";
import charging from "../assets/charging.png";
import hat from "../assets/hat.png";
import batoh from "../assets/batoh.png";
import vehicle from "../assets/vehicle.png";
import supercharging from "../assets/supercharging.png";
import homecharging from "../assets/homecharging.png";
import icon3 from "../assets/icon-3.avif";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  AiOutlineQuestionCircle,
  AiOutlineUser,
  AiOutlineGlobal,
  AiOutlineCloseCircle,
  AiOutlineRight,
  AiOutlineLeft,
} from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const [vozyModalOpen, setVozyModalOpen] = useState(false);

  const toggleVozyModal = () => {
    setVozyModalOpen(!vozyModalOpen);
  };

  const [energyModalOpen, setEnergyModalOpen] = useState(false);
  const toggleEnergyModal = () => {
    setEnergyModalOpen(!energyModalOpen);
  };

  const [chargingModalOpen, setChargingModalOpen] = useState(false);
  const toggleChargingModal = () => {
    setChargingModalOpen(!chargingModalOpen);
  };

  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const toggleInfoModal = () => {
    setInfoModalOpen(!infoModalOpen);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  // mobile menu content start

  const MobileModalContent = () => {
    return (
      <div>
        {" "}
        <div className="md:hidden bg-white ">
          <ul className="flex flex-col  space-y-4 text-black items-start  w-screen h-screen pl-5 py-3 text-xl pt-24 font-medium">
            <button onClick={toggleVozyModal} className="">
              <div className="flex flex-row gap-[590px]  hover:bg-veryLightGray hover:rounded-sm p-4">
                <li className="">Vozy </li>
                <AiOutlineRight />
              </div>
            </button>
            <button onClick={toggleEnergyModal}>
              <div className="flex flex-row gap-[450px] hover:bg-veryLightGray hover:rounded-sm p-4">
                <li>Energetická kapacita </li>
                <AiOutlineRight />
              </div>
            </button>
            <button onClick={toggleChargingModal}>
              <div className="flex flex-row gap-[565px] hover:bg-veryLightGray hover:rounded-sm p-4">
                <li>Nabíjení </li>
                <AiOutlineRight />
              </div>
            </button>{" "}
            <button onClick={toggleInfoModal}>
              <div className="flex flex-row gap-[550px] hover:bg-veryLightGray hover:rounded-sm p-4">
                <li>Informace </li>
                <AiOutlineRight />
              </div>
            </button>{" "}
            <div className="hover:bg-veryLightGray hover:rounded-sm p-4   w-[690px]">
              <Link to="/obchod">
                <li>Obchod </li>
              </Link>
            </div>
            <div className="hover:bg-veryLightGray hover:rounded-sm p-4   w-[690px]">
              <Link to="/create">
                {" "}
                <li>Podpora</li>
              </Link>
            </div>
            <div className="flex flex-row gap-4 items-center hover:bg-veryLightGray hover:rounded-sm p-4  w-[690px] justify-start">
              <AiOutlineGlobal size={24} />
              <p>Česko</p>
            </div>
            <div className="flex flex-row gap-4 items-center hover:bg-veryLightGray hover:rounded-sm p-4  w-[690px]  justify-start">
              <AiOutlineUser size={24} />
              <p>Účet</p>
            </div>
          </ul>
        </div>
      </div>
    );
  };
  const InfoModalContent = ({ toggleMobileMenu, toggleInfoModal }) => {
    const handleBackClick = () => {
      toggleInfoModal(); // Close the Info modal
      // toggleMobileMenu(); doesnt work
      MobileModalContent(); // Show the mobile menu
    };

    const handleCloseClick = () => {
      toggleInfoModal(); // Close the info modal
      toggleMobileMenu(); // Show the hero
    };
    return (
      <div className="vozy-modal flex  flex-col">
        <div>
          <div>
            <div className="flex flex-col sm:flex-row pt-5 items-center justify-between px-10">
              <button onClick={handleBackClick}>
                <AiOutlineLeft />
              </button>
              <h2 className=" text-lg">Informace</h2>
              <button onClick={handleCloseClick}>
                <AiOutlineClose />
              </button>
            </div>
          </div>
        </div>
        <div className="pl-10 font-base text-xl text-black pt-10">
          <p className="pb-8 ">Testovaci jízda</p>
          <p className="pb-8">Příběhy zákazníků</p>{" "}
          <p className="pb-8 ">Události</p>
          <p className="pb-8 ">Videoprůvodci</p>
          <p className="pb-8 ">Kde nás najdete</p>
          <p className="pb-8 ">Plánovač tras</p>
          <p className="pb-8 ">Najít certifikovaného instalačního technika</p>
          <p className="pb-8 ">Najít opravnu karosérií</p>
          <p className="pb-8 ">Vice informací</p>
          <p className="pb-8 ">Kariéra</p>
          <p className="pb-8 ">Investoři</p>
        </div>
      </div>
    );
  };
  const ChargingModalContent = ({ toggleMobileMenu, toggleChargingModal }) => {
    const handleBackClick = () => {
      toggleChargingModal(); // Close the Info modal
      // toggleMobileMenu(); doesnt work
      MobileModalContent(); // Show the mobile menu
    };
    const handleCloseClick = () => {
      toggleChargingModal(); // Close the energy modal
      toggleMobileMenu(); // Show the hero
    };
    return (
      <div className="vozy-modal">
        {" "}
        <div>
          <div>
            <div className="flex flex-col sm:flex-row pt-5 items-center justify-between px-10">
              <button onClick={handleBackClick}>
                <AiOutlineLeft />
              </button>
              <h2 className=" text-lg ">Nabíjení</h2>
              <button onClick={handleCloseClick}>
                <AiOutlineClose />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-10 px-5 py-14">
            {/* charging start */}
            <div className="flex flex-col gap-2 items-center">
              <img
                src={charging}
                alt="charging"
                className="w-[184px] h-[103px] items-center"
              />
              <h3 className="font-medium text-xl">Charging</h3>
              <p className="underline text-secondary">Více</p>
            </div>
            {/* charging end */}
            {/* homecharging start */}

            <div className="flex flex-col gap-2 items-center">
              <img
                src={homecharging}
                alt="homecharging"
                className="w-[184px] h-[103px] items-center"
              />
              <h3 className="font-medium text-xl">Homecharging</h3>
              <div className="flex flex-row gap-5 underline text-secondary">
                <p>Více</p>
                <p>Obchod</p>
              </div>
            </div>
            {/* homecharging end */}
            {/* supercharging start */}

            <div className="flex flex-col gap-2 items-center">
              <img
                src={supercharging}
                alt="supercharging"
                className="w-[184px] h-[103px] items-center"
              />
              <h3 className="font-medium text-xl">Supercharging</h3>
              <div className="flex flex-row gap-5 underline text-secondary">
                <p>Více</p>
                <p>Najít</p>
              </div>
            </div>
            {/* supercharging end */}
          </div>
          <hr class="border-1 border-slate-300 mx-10  " />
          <div className="pl-10 font-base text-xl text-black">
            <p className="pb-8 pt-8">Plánovač tras</p>
            <p className="pb-8">Hlasování o stanici Supercharger</p>{" "}
            <p className="pb-8 ">Provozujte Supercharger stanice</p>
            <p className="pb-8 ">Hostitelské nabíječky Wall Connector</p>
          </div>
        </div>{" "}
      </div>
    );
  };

  const EnergyModalContent = () => {
    const handleBackClick = () => {
      toggleEnergyModal(); // Close the Vozy modal
      // toggleMobileMenu(); // Show the hero
      MobileModalContent();
    };
    const handleCloseClick = () => {
      toggleEnergyModal(); // Close the energy modal
      toggleMobileMenu(); // Show the hero
    };
    return (
      <div className="vozy-modal">
        <div>
          <div>
            <div className="flex flex-col sm:flex-row pt-5 items-center justify-between px-10">
              <button onClick={handleBackClick}>
                <AiOutlineLeft />
              </button>
              <h2 className=" text-lg ">Energetická kapacita</h2>
              <button onClick={handleCloseClick}>
                <AiOutlineClose />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-10 px-10 py-14">
            {/* powerwall start */}
            <div className="flex flex-col gap-2 items-center">
              <img
                src={powerwall}
                alt="powerwall"
                className="w-[184px] h-[103px] items-center"
              />
              <h3 className="font-medium text-xl">Powerwall</h3>
              <p>Více</p>
            </div>
            {/* powerwall end */}
            {/* megapack start */}

            <div className="flex flex-col gap-2 items-center">
              <img
                src={megapack}
                alt="megapack"
                className="w-[184px] h-[103px] items-center"
              />
              <h3 className="font-medium text-xl">Megapack</h3>
              <p>Více</p>
            </div>
            {/* megapack end */}
          </div>
          <hr class="border-1 border-slate-300 mx-10  " />
          <div className="pl-10 font-base text-xl text-black">
            <p className="pb-8 pt-8">Podniky veřejných služeb</p>
            <p className="pb-8">Komerční</p>
          </div>
        </div>{" "}
      </div>
    );
  };
  const VozyModalContent = ({ toggleMobileMenu, toggleVozyModal }) => {
    const handleBackClick = () => {
      toggleVozyModal(); // Close the Vozy modal
      // toggleMobileMenu(); // Show the hero
      MobileModalContent();
    };

    const handleCloseClick = () => {
      toggleVozyModal(); // Close the Vozy modal
      toggleMobileMenu(); // Show the hero
    };
    return (
      <div className="vozy-modal">
        <div>
          {" "}
          <div>
            <div className="flex flex-col sm:flex-row pt-5 items-center justify-between px-10">
              <button onClick={handleBackClick}>
                <AiOutlineLeft />
              </button>
              <h2 className="text-lg">Vozy</h2>
              <button onClick={handleCloseClick}>
                <AiOutlineClose />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-10 px-10 py-14">
            {/* icons S start */}
            <div className="flex flex-col gap-2 items-center">
              <Link to="/pages">
                <img
                  src={icons}
                  alt="icons"
                  className="w-[184px] h-[103px] items-center"
                />
              </Link>
              <h3 className="font-medium text-xl">Model S</h3>
              <div className="flex flex-row gap-5 underline text-secondary">
                <p>Více</p>
                <p>Objednat</p>
              </div>
            </div>
            {/* icons S end */}
            {/* icons 3 start */}

            <div className="flex flex-col gap-2 items-center">
              <Link to="/page3">
                <img
                  src={icon3}
                  alt="icon3"
                  className="w-[184px] h-[103px] items-center"
                />
              </Link>
              <h3 className="font-medium text-xl">Model 3</h3>
              <div className="flex flex-row gap-5 underline text-secondary">
                <p>Více</p>
                <p>Objednat</p>
              </div>
            </div>
            {/* icons 3 end */}
            {/* icons X start */}

            <div className="flex flex-col gap-2 items-center">
              <Link to="/pagex">
                <img
                  src={iconx}
                  alt="iconx"
                  className="w-[184px] h-[103px] items-center"
                />
              </Link>
              <h3 className="font-medium text-xl">Model X</h3>
              <div className="flex flex-row gap-5 underline text-secondary">
                <p>Více</p>
                <p>Objednat</p>
              </div>
            </div>
            {/* icons X end */}
            {/* icons Y start */}

            <div className="flex flex-col gap-2 items-center">
              <Link to="/pagey">
                <img
                  src={icony}
                  alt="icony"
                  className="w-[184px] h-[103px] items-center"
                />
              </Link>
              <h3 className="font-medium text-xl">Model Y</h3>
              <div className="flex flex-row gap-5 underline text-secondary">
                <p>Více</p>
                <p>Objednat</p>
              </div>
            </div>
            {/* icons Y end */}
            {/* icons cyber start */}

            <div className="flex flex-col gap-2 items-center">
              <Link to="/cybertruck">
                <img
                  src={iconcy}
                  alt="iconcy"
                  className="w-[184px] h-[103px] items-center"
                />
              </Link>
              <h3 className="font-medium text-xl">Cybertruck</h3>
              <div className="flex flex-row gap-5 underline text-secondary">
                <p>Více</p>
                <p>Objednat</p>
              </div>
            </div>
            {/* icons cyber end */}
            {/* icons bluered start */}

            <div className="flex flex-col gap-2 items-center">
              <Link to="/help">
                <img
                  src={bluered}
                  alt="bluered"
                  className="w-[184px] h-[103px] items-center"
                />
              </Link>
              <h3 className="font-medium text-xl">Pomozte mi s výběrem</h3>
              <div className="flex flex-row gap-5 underline text-secondary">
                <p>Více</p>
                <p>Objednat</p>
              </div>
            </div>
            {/* icons bluered end */}
          </div>
          <hr class="border-1 border-slate-300 mx-10  " />
          <div className="pl-10 font-base text-xl text-black">
            <p className="pb-8 pt-8">Testovací jízda</p>
            <p className="pb-8">Předem nakonfigurovaná vozidla</p>
            <p className="pb-8">Certifikované ojeté vozy</p>
            <p className="pb-8">Firemní vozidla</p>
            <p>Roadster</p>
          </div>
        </div>{" "}
      </div>
      // mobile menu content end
    );
  };

  return (
    <div className="flex w-full top-0 left-0 items-center hover:text-black bg-transparent fixed md:hover:bg-white  z-40 ">
      <div className=" flex  justify-between items-center mx-auto hover:text-black ">
        <div className="dropbtn ">
          <Link to="/">
            <img
              src={logo}
              className=" tesla-logo w-[153px] h-[43px] "
              alt="logo"
            />
          </Link>
        </div>
        {/* hamburger button mobile start */}
        <div className="md:hidden ">
          <button
            onClick={toggleMobileMenu}
            className="text-white  absolute right-7 top-3 px-4 py-1 backdrop-blur-md z-40"
          >
            {mobileMenuOpen ? (
              <AiOutlineClose size={24} color="black" />
            ) : (
              "Nabídka"
            )}
          </button>
        </div>
        {/* hamburger button mobile start */}
        {vozyModalOpen && (
          <VozyModalContent
            toggleMobileMenu={toggleMobileMenu}
            toggleVozyModal={toggleVozyModal}
          />
        )}
        {mobileMenuOpen && <MobileModalContent />}

        <div className="md:flex hidden hover:text-black text-white text-base items-center justify-center w-[1200px] ">
          <div className="dropdown z-30 transition ">
            <button className="dropbtn   ">Vozy</button>
            <div className="dropdown-content px-44 py-16 ">
              <div className="row flex flex-wrap gap-5 mx-auto">
                {/* columns with cars icons start*/}
                <div className="column ">
                  <Link to="/pages">
                    <img
                      src={icons}
                      alt="icons"
                      className="w-[184px] h-[103px] items-center"
                    ></img>{" "}
                  </Link>
                  <li className="items-center text-xl">Model S</li>
                  <div className="flex flex-row gap-5 text-secondary underline justify-center">
                    <p>Více</p>
                    <p>Objednat</p>
                  </div>
                </div>
                <div className="column">
                  <Link to="/page3">
                    <img
                      src={icon3}
                      alt="icon3"
                      className="w-[184px] h-[103px] items-center"
                    ></img>{" "}
                  </Link>
                  <li className="items-center text-xl">Model 3</li>
                  <div className="flex flex-row gap-5 text-secondary underline justify-center">
                    <p>Více</p>
                    <p>Objednat</p>
                  </div>
                </div>
                <div className="column">
                  {" "}
                  <Link to="/pagex">
                    {" "}
                    <img
                      src={iconx}
                      alt="iconx"
                      className="w-[184px] h-[103px] items-center"
                    ></img>{" "}
                  </Link>
                  <li className="items-center text-xl">Model X</li>
                  <div className="flex flex-row gap-5 text-secondary underline justify-center">
                    <p>Více</p>
                    <p>Objednat</p>
                  </div>
                </div>
                <div className="column">
                  {" "}
                  <Link to="/pagey">
                    <img
                      src={icony}
                      alt="icony"
                      className="w-[184px] h-[103px] items-center"
                    ></img>{" "}
                  </Link>
                  <li className="items-center text-xl">Model Y</li>
                  <div className="flex flex-row gap-5 text-secondary underline justify-center">
                    <p>Více</p>
                    <p>Objednat</p>
                  </div>
                </div>{" "}
                <div className="column">
                  {" "}
                  <Link to="/cybertruck">
                    <img
                      src={iconcy}
                      alt="iconcy"
                      className="w-[184px] h-[103px] items-center"
                    ></img>{" "}
                  </Link>
                  <li className="items-center text-xl"> Cybertruck</li>
                  <div className="flex flex-row gap-5 text-secondary underline justify-center">
                    <p>Více</p>
                    <p>Objednat</p>
                  </div>
                </div>{" "}
                <div className="column">
                  {" "}
                  <Link to="/help">
                    <img
                      src={bluered}
                      alt="iconr"
                      className="w-[184px] h-[103px] items-center"
                    ></img>{" "}
                  </Link>
                  <li className="items-center text-xl">Pomozte mi s výběrem</li>
                  <div className="flex flex-row gap-5 text-secondary underline justify-center">
                    <p>Více</p>
                    <p>Objednat</p>
                  </div>
                </div>
              </div>
              <div className="h-72  border-r border-gray-300  "></div>
              <div className="pl-20 font-bolder text-xl text-black">
                <p className="pb-3">Testovací jízda</p>
                <p className="pb-3">Předem nakonfigurovaná vozidla</p>
                <p className="pb-3">Certifikované ojeté vozy</p>
                <p className="pb-3">Firemní vozidla</p>
                <p>Roadster</p>
              </div>
            </div>
          </div>
          {/* columns with cars icons end*/}
          {/* column with energy start */}
          <div className="dropdown z-30">
            <button className="dropbtn">Energetická kapacita</button>
            <div className="dropdown-content px-96 py-16">
              <div className="row flex flex-wrap gap-5 mx-auto">
                <div className="column">
                  <img
                    src={powerwall}
                    alt="powerwall"
                    className="w-[184px] h-[103px] items-center"
                  ></img>{" "}
                  <li>Powerwall</li>
                  <div className="flex flex-row gap-5 text-secondary underline justify-center">
                    <p>Více</p>
                  </div>
                </div>
                <div className="column">
                  <img
                    src={megapack}
                    alt="megapack"
                    className="w-[184px] h-[103px] items-center"
                  ></img>{" "}
                  <li>Megapack</li>
                  <div className="flex flex-row gap-5 text-secondary underline justify-center">
                    <p>Více</p>
                  </div>
                </div>
                <div className="h-56  border-r border-gray-300  "></div>
                <div className="pl-20 font-bolder text-xl text-black ">
                  <p className="pb-3">Podniky veřejných služeb</p>
                  <p>Komerční</p>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* column with energy end */}
          {/* column with charging start */}
          <div className="dropdown z-30">
            <button className="dropbtn">Nabíjení</button>
            <div className="dropdown-content px-56 py-16">
              <div className="row flex gap-5 mx-auto">
                <div className="column">
                  <img
                    src={charging}
                    alt="charging"
                    className="w-[184px] h-[103px] items-center"
                  ></img>{" "}
                  <li>Nabíjení</li>
                  <div className="flex flex-row gap-5 text-secondary underline justify-center">
                    <p>Více</p>
                  </div>
                </div>
                <div className="column">
                  <img
                    src={homecharging}
                    alt="homecharging"
                    className="w-[184px] h-[103px] items-center"
                  ></img>{" "}
                  <li>Domácí nabíjení</li>
                  <div className="flex flex-row gap-5 text-secondary underline justify-center">
                    <p>Více</p>
                    <p>Obchod</p>
                  </div>
                </div>
                <div className="column">
                  <img
                    src={supercharging}
                    alt="supercharging"
                    className="w-[184px] h-[103px] items-center"
                  ></img>{" "}
                  <li>Supercharging</li>
                  <div className="flex flex-row gap-5 text-secondary underline justify-center">
                    <p>Více</p>
                    <p>Najít</p>
                  </div>
                </div>
                <div className="h-56  border-r border-gray-300  "></div>
                <div className="pl-20 font-bolder text-xl text-black">
                  <p className="pb-3">Plánovač tras</p>
                  <p className="pb-3">Hlasování o stanici Supercharger</p>
                  <p className="pb-3">Provozujte Supercharger stanice</p>
                  <p>Hostitelské nabíječky Wall Connector</p>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* column with charging end */}
          {/* column with info start */}
          <div className="dropdown z-30">
            <button className="dropbtn">Informace</button>
            <div className="dropdown-content px-96 py-10">
              <div className="row flex gap-10 text-black text-xl font-bolder mx-auto">
                <div className="column">
                  <h3 className="pb-7 text-secondary">Materiály</h3>
                  <p className="pb-4"> Testovací jízda</p>
                  <p className="pb-4">Příběhy zákazníků</p>
                  <p className="pb-4">Události</p>
                  <p>Videoprůvodci</p>
                </div>
                <div className="column">
                  <h3 className="pb-7 text-secondary">
                    Služby zjišťování polohy
                  </h3>
                  <p className="pb-4"> Kde nás najdete</p>
                  <p className="pb-4">Plánovač tras</p>
                  <p className="pb-4">
                    Najít certifikovaného instalačního technika
                  </p>
                  <p>Najít opravnu karosérií</p>
                </div>
                <div className="column">
                  {" "}
                  <h3 className="pb-7 text-secondary">Company</h3>
                  <p className="pb-4"> Více informací</p>
                  <p className="pb-4">Kariéra</p>
                  <p>Investoři</p>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* column with info end  */}
          {/* column with store start */}
          <div className="dropdown z-30">
            <button className="dropbtn">Obchod</button>
            <div className="dropdown-content px-80 py-10">
              <div className="row flex gap-5 text-xl mx-auto">
                <div className="column ">
                  <img
                    src={homecharging}
                    alt="homecharging"
                    className="w-[184px] h-[103px] items-center text-xl"
                  ></img>{" "}
                  <li>Nabíjení</li>
                </div>
                <div className="column">
                  <img
                    src={vehicle}
                    alt="vehicle"
                    className="w-[184px] h-[103px] items-center text-xl"
                  ></img>{" "}
                  <li>Příslušenství vozidla</li>
                </div>
                <div className="column">
                  <img
                    src={hat}
                    alt="hat"
                    className="w-[184px] h-[103px] items-center text-xl"
                  ></img>{" "}
                  <li>Oblečení</li>
                </div>
                <div className="column">
                  <img
                    src={batoh}
                    alt="batoh"
                    className="w-[184px] h-[103px] items-center text-xl"
                  ></img>{" "}
                  <li>Životní styl</li>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
        {/* column with store end  */}
        {/* right navbar start */}
        <div className="md:flex hidden text-lightWhite  hover:text-black  ">
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
        {/* right navbar end */}
      </div>

      {energyModalOpen && (
        <EnergyModalContent
          toggleMobileMenu={toggleMobileMenu}
          toggleEnergyModal={toggleEnergyModal}
        />
      )}
      {chargingModalOpen && (
        <ChargingModalContent
          toggleMobileMenu={toggleMobileMenu}
          toggleChargingModal={toggleChargingModal}
        />
      )}
      {infoModalOpen && (
        <InfoModalContent
          toggleMobileMenu={toggleMobileMenu}
          toggleInfoModal={toggleInfoModal}
        />
      )}

      {/* {mobileMenuOpen && (
        <div className="md:hidden bg-white ">
          <ul className="flex flex-col  space-y-10 text-black items-start  w-screen h-screen mt-20 pl-10 text-xl font-medium">
            <button onClick={toggleVozyModal}>
              <AiOutlineRight />
              <div className="flex flex-row gap-[540px]">
                <li>Vozy </li>
              </div>
            </button>
            <button onClick={toggleEnergyModal}>
              <div className="flex flex-row gap-[400px]">
                <li>Energetická kapacita </li>
                <AiOutlineRight />
              </div>
            </button>
            <button onClick={toggleChargingModal}>
              <div className="flex flex-row gap-[510px]">
                <li>Nabíjení </li>
                <AiOutlineRight />
              </div>
            </button>{" "}
            <button onClick={toggleInfoModal}>
              <div className="flex flex-row gap-[490px]">
                <li>Informace </li>
                <AiOutlineRight />
              </div>
            </button>{" "}
            <Link to="/obchod">
              <li>Obchod </li>
            </Link>
            <Link to="/create">
              {" "}
              <li>Podpora</li>
            </Link>
            <div
              className="flex flex-row gap-4 items-center justify-center
            "
            >
              <AiOutlineGlobal size={24} />
              <p>Česko</p>
            </div>
            <div
              className="flex flex-row gap-4 items-center justify-center
            "
            >
              <AiOutlineUser size={24} />
              <p>Účet</p>
            </div>
          </ul>
        </div>
      )} */}
    </div>
  );
}
