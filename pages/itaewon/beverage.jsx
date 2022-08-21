import Page from "../../comps/Page";

export default function Beverage() {
  const items = [
    { type: "title", name: "BEVERAGE" },

    { type: "head", name: "COFFEE" },
    { type: "item", name: "ESPRESSO", price: "15 / - - - " },
    { type: "item", name: "AMERICANO", price: "20 / 22" },
    { type: "item", name: "CAPPUCINO", price: "22 / 24" },
    { type: "item", name: "LATTE", price: "22 / 24" },
    { type: "item", name: "MOCHA", price: "25 / 27" },

    { type: "head", name: "SWEET COFFEE" },
    { type: "item", name: "CARAMEL LATTE", price: "24 / 26" },
    { type: "item", name: "HAZELNUT LATTE", price: "24 / 26" },
    { type: "item", name: "VANILLA LATTE", price: "24 / 26" },
    { type: "item", name: "KOPI SUSU", price: "12 / 15" },

    { type: "head", name: "SIGNATURE DRINK" },
    { type: "item", name: "SWEETY FEBS", price: "24 / 25" },
    { type: "item", name: "AREN COFFEE", price: "22 / 25" },
    { type: "item", name: "CARRIZPRESSO", price: "22 / 25" },
    { type: "item", name: "MATCHA STRAWBERRY", price: "- - - / 26" },
    { type: "item", name: "RED COLD", price: "- - - / 28" },

    { type: "head", name: "NON COFFEE" },
    { type: "item", name: "CHOCO LATTE ", price: "20 / 24" },
    { type: "item", name: "CHOCO CARAMEL ", price: "24 / 26" },
    { type: "item", name: "CHOCO VANILLA ", price: "24 / 26" },
    { type: "item", name: "REDVELVET LATTE ", price: "20 / 24" },
    { type: "item", name: "TARO", price: "20 / 24" },
    { type: "item", name: "MATCHA LATTE ", price: "20 / 24" },
    { type: "item", name: "MILK HAZELNUT", price: "20 / 23" },
    { type: "item", name: "MILK VANILLA", price: "20 / 23" },
    { type: "item", name: "TEA ", price: "10 / 12" },
    { type: "item", name: "MINERAL WATER", price: "5" },

    { type: "head", name: "MOCKTAIL" },
    { type: "item", name: "LYCHEE MINT", price: "20" },
    { type: "item", name: "MOJITO LIME", price: "20" },
    { type: "item", name: "SUNRISE", price: "20" },
  ];

  return (
    <Page
      items={items}
      headClassName="text-itaewon "
      pageClassName="bg-gray-100"
      itemClassName="text-gray-900"
      navBarClassName="bg-gray-100"
    />
  );
}
