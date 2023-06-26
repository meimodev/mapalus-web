import Page2 from "../../comps/Page2";

export default function BagCare() {
    const items = [
        {element: <div className="py-4"/>},
        {type: "title", name: "BAG CARE"},
        {element: <div className="py-4"/>},

        {
            type: "item",
            name: "Small",
            price: "35.000",
        },
        {
            type: "item",
            name: "Medium",
            price: "45.000",
        },
        {
            type: "item",
            name: "Large",
            price: "55.000",
        },

    ];

    return (
        <Page2
            items={items}
            headClassName="text-kland "
            pageClassName="bg-transparent"
            itemClassName="text-white"
            navBarClassName="bg-transparent "
            navBarButtonClassName="text-white"
        />
    );
}
