import Page from "../../comps/Page";

export default function Beverage() {
  const items = [
    { type: "title", name: "BEVERAGE" },

    { type: "head", name: "COFFEE" },
    { type: "item", name: "ESPRESSO", price: "12 / --" },
    { type: "item", name: "AMERICANO | HOT / ICE", price: "16 / 18" },
    { type: "item", name: "CAPPUCINO | HOT / ICE", price: "20 / 24" },
    { type: "item", name: "LATTE | HOT / ICE", price: "20 / 24" },
    { type: "item", name: "MOCHA | HOT / ICE", price: "22 / 25" },

    { type: "head", name: "SWEET COFFEE" },
    { type: "item", name: "CARAMEL LATTE | HOT / ICE", price: "22 / 25" },
    { type: "item", name: "HAZELNUT LATTE | HOT / ICE", price: "22 / 25" },
    { type: "item", name: "VANILLA LATTE | HOT / ICE", price: "22 / 25" },
    { type: "item", name: "CARRIZPRESSO | HOT / ICE", price: "22 / 25" },
    { type: "item", name: "MATCHA ESPRESSO | HOT / ICE", price: "22 / 25" },
    { type: "item", name: "AREN COFFEE | HOT / ICE", price: "20 / 24" },
    { type: "item", name: "IRISH COFFEE | HOT / ICE", price: "22 / 25" },
    { type: "item", name: "KOPI SUSU | HOT / ICE", price: "12 / 15" },

    { type: "head", name: "SIGNATURE DRINK" },
    { type: "item", name: "SWEETY FEBS ( HOT / ICE )", price: "22 / 25" },
    { type: "item", name: "RUM COFFEE ( ICE )", price: "24" },
    { type: "item", name: "BAILEYS COFFEE ( ICE )", price: "24" },

    { type: "head", name: "NON COFFEE" },
    { type: "item", name: "CHOCO LATTE ( HOT / ICE )", price: "20 / 24" },
    { type: "item", name: "CHOCO HAZELNUT ( HOT / ICE )", price: "22 / 25" },
    { type: "item", name: "CHOCO CARAMEL ( HOT / ICE )", price: "22 / 25" },
    { type: "item", name: "REDVELVET LATTE ( HOT / ICE )", price: "20 / 24" },
    { type: "item", name: "MATCHA LATTE ( HOT / ICE )", price: "20 / 24" },
    { type: "item", name: "LIME TEA ( HOT / ICE )", price: "15 / 18" },
    { type: "item", name: "LIME ( HOT / ICE )", price: "15 / 18" },
    { type: "item", name: "TEA ( HOT / ICE )", price: "8 / 8" },
    { type: "item", name: "MINERAL WATER", price: "5" },

    { type: "head", name: "COLD BREW" },
    { type: "item", name: "SHAKEN JOE", price: "22" },
    { type: "item", name: "RED COLD", price: "26" },
    { type: "item", name: "COLD WHITE", price: "26" },

    { type: "head", name: "MANUAL BREW" },
    { type: "item", name: "V60", price: "20" },
    { type: "item", name: "JAPANESSE ICED", price: "22" },

    { type: "head", name: "MOCKTAIL" },
    { type: "item", name: "ORANGE MARS", price: "20" },
    { type: "item", name: "BLUE NEPTUNE", price: "20" },
    { type: "item", name: "DEEP GRAPE", price: "20" },
    { type: "item", name: "LYCHEE MINT", price: "20" },
    { type: "item", name: "MOJITO", price: "20" },
    { type: "item", name: "SUNRISE", price: "20" },
  ];

  return <Page items={items} headClassName="text-itaewon" />;
}
