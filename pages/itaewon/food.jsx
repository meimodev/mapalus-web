import Page from "../../comps/Page";

export default function Food() {
  const items = [
    { type: "title", name: "FOOD" },

    { type: "head", name: "KOREAN CUISINE" },

    {
      type: "item",
      name: "ITAEWON DONKATSU",
      price: "25",
      desc: (
        <div className="italic pb-2">
          <div>
            Breaded - Deep fried pork cutlet serve with rice and shredded
            cabbage.
          </div>
          <div>
            (Daging yang dipipihkan dibalut tepung roti dan digoreng kering
            disajikan dengan nasi dan potongan kol)
          </div>
        </div>
      ),
    },
    {
      type: "item",
      name: "SWEET & SPICY BULGOGI",
      price: "25",
      desc: (
        <div className="italic pb-2">
          <div>
            Pork chops are broiled with a glaze of soy sauce, chili, and sugar
            serve with rice and shredded cabbage
          </div>
          <div>
            (Potongan daging yang dimasak dengan kecap, cabai, dan bombay
            disajikan dengan nasi dan potongan kol)
          </div>
        </div>
      ),
    },
    {
      type: "item",
      name: "SALTY & SOUR BULGOGI",
      price: "25",
      desc: (
        <div className="italic pb-2">
          <div>
            Marinated pork chop with soy sauce, apple juice, minced ginger and
            garlic serve with rice and shredded cabbage.
          </div>
          <div>
            (Potongan daging yang dimarinasi dengan kecap asin, jus apel, jahe
            dan bawang putih halus disajikan dengan nasi dan potongan kol)
          </div>
        </div>
      ),
    },
    {
      type: "item",
      name: "CHICKEN KATSU",
      price: "25",
      desc: (
        <div className="italic pb-2">
          <div>Donkatsu with chicken instead.</div>
          <div>(Donkatsu menggunakan daging ayam)</div>
        </div>
      ),
    },
    {
      type: "item",
      name: "YANGNYEOM CHICKEN",
      price: "25",
      desc: (
        <div className="italic pb-2">
          <div>
            Korean fried chicken seasoned with sweet and spicy sauce of
            gochujang, gochugaru, garlic, and sugar serve with rice.
          </div>
          <div>
            (Ayam goreng korea dibalut dengan saus pedas manis yang terbuat dari
            gochujang dan gochugaru disajikan dengan nasi)
          </div>
        </div>
      ),
    },
    {
      type: "item",
      name: "DUBU-JJIGAE",
      price: "18",
      desc: (
        <div className="italic pb-2">
          <div>Korean Tofu stew.</div>
          <div>(Sup Tahu ala Korea)</div>
        </div>
      ),
    },
    {
      type: "item",
      name: "KIMCHI-JJIGAE",
      price: "18",
      desc: (
        <div className="italic">
          <div>Kimchi stew.</div>
          <div>(Sup Kimchi ala Korea)</div>
        </div>
      ),
    },

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
