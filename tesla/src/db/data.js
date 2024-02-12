import { AiFillStar } from "react-icons/ai";
import cyb from "../assets/cyb.svg";

const data = [
  {
    img: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY13,$PPSB,$WY19B,$INPB0&view=FRONT34&model=my&size=1920&bkba_opt=2&crop=0,0,0,0&",
    title: "Model Y",
    description: "Model Y s pohonem zadních kol    ",
    availability: "Na cestě – brzy dorazí ",
    prevPrice: "1 103 400 Kč",
    company: "Nike",
    color: "blue",
    category: "Model Y",
  },
  {
    img: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY13,$PPSW,$WY19B,$INPB0&view=FRONT34&model=my&size=1920&bkba_opt=2&crop=0,0,0,0&",
    title: "Model Y",
    description: "Model Y s pohonem zadních kol    ",
    availability: "Na cestě – brzy dorazí ",

    prevPrice: "1 106 400 Kč",
    newPrice: "200",
    company: "Nike",
    color: "white",
    category: "Model Y",
  },

  {
    img: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY13,$PBSB,$WY19B,$INPW0&view=FRONT34&model=my&size=1920&bkba_opt=2&crop=0,0,0,0&",
    title: "Model Y",
    description: "Model Y s pohonem zadních kol    ",
    availability: "Na cestě – brzy dorazí ",

    prevPrice: "1 135 400 Kč",
    newPrice: "200",
    company: "Nike",
    color: "black",
    category: "Model Y",
  },
  {
    img: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY13,$PN00,$WY19B,$INPB0&view=FRONT34&model=my&size=1920&bkba_opt=2&crop=0,0,0,0&",
    title: "Model Y",
    description: "Model Y s pohonem zadních kol    ",
    availability: "Na cestě – brzy dorazí ",

    prevPrice: "1 136 400 Kč",
    newPrice: "200",
    company: "Adidas",
    color: "gray",
    category: "Model Y",
  },
  {
    img: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY13,$PR00,$WY19B,$INPB0&view=FRONT34&model=my&size=1920&bkba_opt=2&crop=0,0,0,0&",
    title: "Model Y",
    description: "Model Y s pohonem zadních kol    ",
    availability: "Na cestě – brzy dorazí ",

    prevPrice: "1 136 400 Kč    ",
    newPrice: "200",
    company: "Vans",
    color: "red",
    category: "Model Y",
  },

  {
    img: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY13,$PR00,$WY19B,$INPB0&view=FRONT34&model=my&size=1920&bkba_opt=2&crop=0,0,0,0&",
    title: "Model X",
    description: "Model X s pohonem zadních kol    ",
    availability: "Na cestě – brzy dorazí ",

    prevPrice: "1 136 400 Kč    ",
    newPrice: "200",
    company: "Vans",
    color: "red",
    category: "Model X",
  },
  {
    img: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX13,$PPSW,$WX00,$IWW00&view=FRONT34&model=mx&size=1920&bkba_opt=2&crop=0,0,0,0&",
    title: "Model X",
    description: "Model X s pohonem zadních kol    ",
    availability: "K dispozici k vyzvednutí",
    prevPrice: "1 136 400 Kč    ",
    newPrice: "50",
    company: "Adidas",
    color: "white",
    category: "Model X",
  },

  {
    img: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX13,$PPSB,$WX20,$ICW00&view=FRONT34&model=mx&size=1920&bkba_opt=2&crop=0,0,0,0&",
    title: "Model X",
    description: "Model X s pohonem zadních kol    ",
    availability: "K dispozici k vyzvednutí",

    prevPrice: "1 136 400 Kč    ",
    newPrice: "50",
    company: "Vans",
    color: "blue",
    category: "Model X",
  },

  {
    img: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX13,$PPSW,$WX20,$IWW00&view=FRONT34&model=mx&size=1920&bkba_opt=2&crop=0,0,0,0&",
    title: "Model X",
    description: "Model X – pohon všech kol Dual Motor   ",
    availability: "K dispozici k vyzvednutí",

    prevPrice: "1 136 400 Kč    ",
    newPrice: "200",
    company: "Nike",
    color: "white",
    category: "Model X",
  },

  {
    img: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX15,$PMNG,$WX00,$ICW00&view=FRONT34&model=mx&size=1920&bkba_opt=2&crop=0,0,0,0&",
    title: "Model X",
    description: "Model X – pohon všech kol Dual Motor   ",
    availability: "K dispozici k vyzvednutí",

    prevPrice: "1 136 400 Kč    ",
    newPrice: "200",
    company: "Adidas",
    color: "gray",
    category: "Model X",
  },

  {
    img: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PBSB,$WS10,$IWW00&view=FRONT34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&",
    title: "Model S",
    description: "Model S – pohon všech kol Dual Motor   ",
    availability: "K dispozici k vyzvednutí",

    prevPrice: "1 136 400 Kč    ",
    newPrice: "150",
    company: "Puma",
    color: "black",
    category: "Model S",
  },
  {
    img: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PMNG,$WS10,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&",
    title: "Model S",
    description: "Model S – pohon všech kol Dual Motor   ",
    availability: "K dispozici k vyzvednutí",
    prevPrice: "1 136 400 Kč    ",
    newPrice: "150",
    company: "Puma",
    color: "gray",
    category: "Model S",
  },
  {
    img: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PPSB,$WS90,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&",
    title: "Model S",
    description: "Model S – pohon všech kol Dual Motor   ",
    availability: "K dispozici k vyzvednutí",

    prevPrice: "1 136 400 Kč    ",
    newPrice: "150",
    company: "Puma",
    color: "blue",
    category: "Model S",
  },
  {
    img: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PPSW,$WS90,$ICW00&view=FRONT34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&",
    title: "Model S",
    description: "Model S – pohon všech kol Dual Motor   ",
    availability: "K dispozici k vyzvednutí",

    prevPrice: "1 136 400 Kč    ",
    newPrice: "150",
    company: "Puma",
    color: "white",
    category: "Model S",
  },
  {
    img: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PMNG,$WS10,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&",
    title: "Model S",
    description: "Model S – pohon všech kol Dual Motor   ",
    availability: "K dispozici k vyzvednutí",

    prevPrice: "1 136 400 Kč    ",
    newPrice: "150",
    company: "Puma",
    color: "black",
    category: "Model S",
  },
];

export default data;
