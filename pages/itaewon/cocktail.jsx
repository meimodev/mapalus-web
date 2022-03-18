import Page from "../../comps/Page";

const Cocltail = () => {
  const items = [
    { type: "title", name: "Cocktail" },

    { type: "head", name: "DIRECT ORDER" },
  ];

  return <Page items={items} headClassName="text-kland" />;
};

export default Cocltail;
