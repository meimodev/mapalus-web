import Page2 from "../../comps/Page2";

export default function RepaintRecolor() {
    const items = [
        {element: <div className="py-4"/>},
        {type: "title", name: "REPAINT / RECOLOR"},
        {element: <div className="py-4"/>},

        {
            type: "item",
            name: "SNEAKERS (Termasuk Deep Clean)",
            price: "130.000 - 200.000",
        },
        {
            type: "item",
            name: "TOPI (Termasuk Deep Clean)",
            price: "150.000 - 200.000",
        },
        {
            type: "item",
            name: "REPAINT MIDSOLE (Boost) *Termasuk Deep Clean",
            price: "130.000 - 200.000",
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
