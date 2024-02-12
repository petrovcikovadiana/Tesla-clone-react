import React, { useState, useEffect } from "react";
import power from "../assets/powerwallhero.avif";
import control from "../assets/control.avif";
import book from "../assets/book.svg";
import house from "../assets/house.svg";
import blesk from "../assets/bleck.jpeg";
import dom from "../assets/dom.jpeg";
import tesla from "../assets/tes.jpeg";
import video from "../assets/napajeni.mp4";
import slnko from "../assets/slnko.svg";
import bleck from "../assets/blesk.svg";
import Nav from "./Nav";

const Powerwall = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const getColor = (index) =>
    index === activeIndex ? "text-gray-500" : "text-white";
  const texts = [
    "Ukládejte solární energii či energii z elektrické sítě",
    "Kdykoliv můžete využít uloženou energii k napájení své domácnosti",
    "V noci, když nesvítí slunce",
    "Nebo když dojde k výpadku energie",
    "Dobíjejte během slunečního svitu nebo při obnově energie elektrické sítě",
  ];

  const handleDivClick = (index) => {
    setActiveIndex(index);
  };

  const [headingText, setHeadingText] = useState("Dvě nové barvy");

  const [displayText, setDisplayText] = useState(
    "Barvy Stealth Grey a Ultra Red se mění podle světla a pozorovacího úhlu."
  );

  const handleDotClick = (newHeadingText, newText) => {
    setHeadingText(newHeadingText);
    setDisplayText(newText);
  };
  return (
    <div>
      <Nav /> {/* hero starts */}
      <div className="flex flex-col md:flex-row  absolute md:top-3/4 top-2/3  text-center justify-center items-center bottom-0 left-0 z-40 right-0 md:gap-24 gap-10  text-lightWhite max-w-[1600px] px-10 md:px-0 mx-auto">
        <div className="flex md:flex-row gap-24">
          <div className="flex flex-col items-center ">
            <img src={book} alt="book" className="w-10 pb-2" />{" "}
            <p className="text-base">Ukládání energie </p>
          </div>
          <div>
            <h2 className="text-4xl pb-2">24/7 </h2>
            <p className="text-base">Záložní ochrana </p>
          </div>
          <div className="flex flex-col  items-center">
            <img src={house} alt="house" className="w-10 pb-2" />{" "}
            <p className="text-base">Energie pro vaši domácnost </p>
          </div>
        </div>
        <div>
          <button className="bg-transparent border-4 border-white text-white text-base rounded-md py-3 w-[500px] md:w-[300px] tracking-wider">
            Dostávat novinky
          </button>
        </div>
      </div>
      <div
        className="h-screen w-screen flex text-5xl z-20 relative"
        style={{
          background: `url(${power})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-white font-medium tracking-wide z-10 mt-36 ">
          <h1 className="text-5xl mb-2">Powerwall</h1>
        </div>
      </div>
      {/* hero end */}
      {/* hero 2 start */}
      <div className="relative flex flex-col ">
        <div>
          <img src={blesk} className="imgB" alt="S" />
          <div className="flex flex-row absolute md:top-1/4 top-10 px-5 text-center justify-center items-center bottom-0 left-0 right-0 gap-16 text-lightWhite pb-10">
            <div className="flex flex-col items-center md:w-56">
              <img src={house} alt="house" className="w-10 pb-5" />{" "}
              <p className="text-sm">
                Využijte uloženou energii k napájení své domácnosti během
                výpadku energie{" "}
              </p>
            </div>{" "}
            <div className="flex flex-col items-center md:w-56">
              <img src={slnko} alt="slnko" className="w-10 pb-5" />{" "}
              <p className="text-sm">
                Dobíjejte pomocí čisté energie v kombinaci se solární energií
              </p>
            </div>
            <div className="flex flex-col items-center md:w-56">
              <img src={bleck} alt="blesk" className="w-10 pb-5" />{" "}
              <p className="text-sm">
                Zajistěte chod domácích spotřebičů s minimem přerušení
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col md:flex-row  md:gap-56 bg-black items-center justify-center md:px-44 md:pb-20">
          <div className="py-16 w-96 text-lightWhite">
            <p>Zabezpečení</p>
            <h1 className="text-3xl pb-6 text-lightWhite">Záložní ochrana </h1>
            <div className="flex flex-col md:flex-row gap-5">
              <button className=" border-4 border-lightWhite text-lightWhite  h-12 w-[250px] rounded-md text-sm">
                Dostávat novinky
              </button>
            </div>
          </div>

          <div className=" text-lightWhite md:w-1/2 w-96 pb-3">
            <p>
              Powerwall je baterie, která ukládá energii, detekuje výpadky
              energie a automaticky se stane elektrickým zdrojem vaší domácnosti
              když k výpadku dojde. Na rozdíl od generátorů udrží systém
              Powerwall vaše osvětlení zapnuté a telefony nabité bez jakékoli
              údržby, hluku či doplňování paliva. Zkombinujte systém s
              fotovoltaikou, dobíjejte ho slunečním svitem a zajistěte si tak
              spolehlivý chod domácích spotřebičů.
            </p>
          </div>
        </div>
      </div>
      {/* hero 2 end */}
      {/* video and text start */}
      <div className="flex flex-col md:flex-row  md:gap-56 bg-black items-center justify-center md:px-44">
        <div className="py-16 w-96 text-lightWhite">
          <p>Nezávislost</p>
          <h1 className="text-3xl pb-6 text-lightWhite">Napájení čehokoli</h1>
          <div className="flex flex-col md:flex-row gap-5">
            <button className=" border-4 border-lightWhite text-lightWhite  h-12 w-[250px] rounded-md text-sm">
              Dostávat novinky
            </button>
          </div>
        </div>

        <div className=" text-lightWhite md:w-1/2 w-96 pb-3">
          <p>
            Systém Powerwall snižuje závislost na elektrické síti, neboť ukládá
            solární energii, kterou využijete, když slunce nesvítí. Využijte
            systém Powerwall samostatně nebo ho zkombinujte s dalšími výrobky
            firmy Tesla a ušetřete peníze, snižte vaši uhlíkovou stopu a
            připravte svou domácnost na případné výpadky energie.
          </p>
        </div>
      </div>
      {/* video and text start */}
      <div className="bg-black py-12 md:px-44">
        {/* video start */}
        <video
          className="w-full h-[480px] object-cover "
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* video above cards end */}
      </div>
      {/* cards with changing colors start */}
      <div className="flex flex-col md:flex-row gap-10 px-44 bg-black">
        {Array.from({ length: 5 }, (_, index) => (
          <div
            key={index}
            onClick={() => handleDivClick(index)}
            className={`w-1/2 ${getColor(index)}`}
            style={{ cursor: "pointer" }}
          >
            <hr className="w-[204px] h-1 my-4 bg-white border-0 rounded md:my-8" />
            <p className="pb-5">{texts[index]}</p>
          </div>
        ))}
      </div>
      {/* cards with changing colors end */}
      {/* hero 2 start */}
      <div className="relative md:flex md:flex-col hidden">
        <div>
          <img src={control} className="imgS" alt="S" />
        </div>{" "}
        <div className="flex flex-col md:flex-row mx-44 gap-5 items-center">
          <div className="py-16 w-96">
            <p>Ovládání</p>
            <h1 className="text-3xl pb-6">Monitorování a optimalizace</h1>
            <div className="flex flex-col md:flex-row gap-5">
              <button className=" border-4 border-lightBlack  h-12 w-[250px] rounded-md text-sm">
                Dostávat novinky
              </button>
            </div>
          </div>

          <div className=" text-black ">
            <p>
              Prostřednictvím aplikace Tesla lze sledovat výrobu a spotřebu
              energie v domácnosti v reálném čase. Nastavte své preference za
              účelem optimalizace energetické nezávislosti, ochrany proti
              výpadkům energie a dosažení úspor. Díky okamžitým upozorněním a
              vzdálenému přístupu můžete systém ovládat odkudkoli.
            </p>
          </div>
        </div>
      </div>
      {/* hero 2 end */}
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
        <img src={dom} alt="structure" className="md:w-3/4" />
      </div>
      {/* bezpecnost end */}
      {/* parametry start */}
      {/* parametry end */}
      {/* footer screen start */}
      {/* footer screen end */}
    </div>
  );
};

export default Powerwall;
