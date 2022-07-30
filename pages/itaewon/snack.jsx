import Page from "../../comps/Page";

const Snack = () => {
  const items = [
    { type: "title", name: "Snack & Kimbab" },

    { type: "head", name: "KIMBAB" },
    { type: "item", name: "CLASIC KIMBAB", price: "20" },
    { type: "item", name: "MAYAK KIMBAB", price: "20" },
    { type: "item", name: "BULGOGI KIMBAB", price: "25" },
    { type: "item", name: "KATSU KIMBAB", price: "25" },

    { type: "head", name: "SNACK" },
    { type: "item", name: "ITAEWON SALAD", price: "15" },
    { type: "item", name: "ITAEWON SALAD WITH CHICKEN BREAST", price: "20" },
    { type: "item", name: "OKONOMIYAKI", price: "20" },
    { type: "item", name: "FRENCH FRIES", price: "15" },
    { type: "item", name: "ONION RINGS", price: "15" },
    { type: "item", name: "PISANG PAKET", price: "15" },
  ];

  return (
    <Page
      items={items}
      headClassName="text-kland "
      pageClassName="bg-gray-100 pb-24"
      itemClassName="text-gray-900"
      navBarClassName="bg-gray-100"
    />
  );
};

export default Snack;
