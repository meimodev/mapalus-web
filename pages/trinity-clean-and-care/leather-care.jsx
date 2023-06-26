import Page2 from "../../comps/Page2";

export default function LeatherCare() {
    const items = [
        {element: <div className="py-4"/>},
        {type: "title", name: "LEATHER CARE"},
        {type: "desc", value: "Perawatan sepatu atau tas berbahan kulit"},
        {element: <div className="py-4"/>},

        {
            type: "item",
            name: "Sneakers",
            price: "60.000",
        },
        {
            type: "item",
            name: "Bag",
            price: "65.000",
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
