import Page from "../../comps/Page";

const Snack = () => {
  const items = [
    { type: "title", name: "Snack & Kimbab" },

    { type: "head", name: "SNACK" },
    { type: "item", name: "ITAEWON PREMIUM CROFFLE", price: "25" },
    { type: "item", name: "CHOCO CROFFLE", price: "20" },
    { type: "item", name: "OKONOMIYAKI", price: "20" },
    { type: "item", name: "FRENCH FRIES", price: "15" },
    { type: "item", name: "ONION RINGS", price: "15" },
    { type: "item", name: "PISANG PAKET", price: "15" },

    { type: "head", name: "KIMBAB" },
    { type: "item", name: "CLASIC KIMBAB", price: "20" },
    { type: "item", name: "BULGOGI KIMBAB", price: "25" },
    { type: "item", name: "KATSU KIMBAB", price: "25" },
    { type: "item", name: "MAYAK KIMBAB", price: "15" },
  ];

  return <Page items={items} headClassName="text-kland" />;
};

export default Snack;
