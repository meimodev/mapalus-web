import Page from "../../comps/Page";

export default function Bargbeque() {
  const items = [
    { type: "title", name: "Korean Barbeque" },

    { type: "head", name: "GRILL" },

    {
      type: "item",
      name: "PAKET 2 ORANG",
      price: "90",
      desc: (
        <div className="flex italic pb-3">
          <div className="flex-grow-0 pr-3">Include</div>
          <div className="flex-grow">
            <div className="flex-col">
              <div>Samgyeopsal 1 pax</div>
              <div>Pork Ham 1 pax</div>
              <div>Rice 2 pax</div>
              <div>Itaewon Dipping Sauce</div>
              <div>Lettuce</div>
              <div>Onion</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      type: "item",
      name: "PAKET 4 ORANG",
      price: "155",
      desc: (
        <div className="flex italic pb-3">
          <div className="flex-grow-0 pr-3">Include</div>
          <div className="flex-grow">
            <div className="flex-col">
              <div>Samgyeopsal 2 pax</div>
              <div>Pork Ham 2 pax</div>
              <div>Rice 4 pax</div>
              <div>Itaewon Dipping Sauce</div>
              <div>Lettuce</div>
              <div>Onion</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      type: "item",
      name: "PAKET 6 ORANG",
      price: "215",
      desc: (
        <div className="flex italic pb-3">
          <div className="flex-grow-0 pr-3">Include</div>
          <div className="flex-grow">
            <div className="flex-col">
              <div>Samgyeopsal 3 pax</div>
              <div>Pork Ham 3 pax</div>
              <div>Rice 6 pax</div>
              <div>Itaewon Dipping Sauce</div>
              <div>Lettuce</div>
              <div>Onion</div>
            </div>
          </div>
        </div>
      ),
    },

    { type: "head", name: "GRILL ADD-ONS" },
    { type: "item", name: "SAMGYEOPSAL / PORK BELLY", price: "30" },
    { type: "item", name: "HAM / LOIN ", price: "30" },
    { type: "item", name: "CHICKEN", price: "30" },
    { type: "item", name: "KIMCHI", price: "5" },
    { type: "item", name: "RICE", price: "5" },
  ];

  return (
    <Page
      items={items}
      headClassName="text-kland "
      pageClassName="bg-gray-100 "
      itemClassName="text-gray-900"
      navBarClassName="bg-gray-100"
    />
  );
}
