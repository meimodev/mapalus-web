import Page from "../../comps/Page";

const Cocltail = () => {
  const items = [
    { type: "title", name: "Cocktail" },

    {
      element: (
        <div className="text-center text-zinc-900 text-xs py-44 flex flex-col gap-5">
          <div>do directly ask attended barista to do the order </div>
          <div>Cheers ;) </div>
        </div>
      ),
    },
  ];

  return (
    <Page
      items={items}
      headClassName="text-kland"
      pageClassName="bg-gray-100 pb-24"
      itemClassName="text-gray-900"
      navBarClassName="bg-gray-100"
    />
  );
};

export default Cocltail;
