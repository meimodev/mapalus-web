import Page from "../../comps/Page";

export default function Food() {
  const items = [
    { type: "title", name: "FOOD" },

    { type: "head", name: "KOREAN CUISINE" },

    { type: "item", name: "ITAEWON DONKATSU", price: "25" },
    { type: "item", name: "SWEET & SPICY BULGOGI", price: "25" },
    { type: "item", name: "SALTY & SOUR BULGOGI", price: "25" },
    { type: "item", name: "CHICKEN KATSU", price: "25" },
    { type: "item", name: "YANGNYEOM CHICKEN", price: "25" },
    { type: "item", name: "DUBU-JJIGAE", price: "18" },
    { type: "item", name: "KIMCHI-JJIGAE", price: "18" },
    { type: "head", name: "INDONESIAN CUISINE" },
    { type: "item", name: "ITAEWON DONKATSU", price: "25" },
    { type: "item", name: "SWEET & SPICY BULGOGI", price: "25" },
    { type: "item", name: "SALTY & SOUR BULGOGI", price: "25" },
    { type: "item", name: "CHICKEN KATSU", price: "25" },
    { type: "item", name: "YANGNYEOM CHICKEN", price: "25" },
    { type: "item", name: "DUBU-JJIGAE", price: "18" },
    { type: "item", name: "KIMCHI-JJIGAE", price: "18" },
  ];

  return <Page items={items} headClassName="text-kland" />;
}
