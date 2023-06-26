import Page2 from "../../comps/Page2";

export default function DeepClean() {
    const items = [
        {element: <div className="py-4"/>},
        {type: "title", name: "DEEP CLEAN"},
        {type: "desc", value: "Mencuci seluruh bagian sepatu"},
        {element: <div className="py-4"/>},

        {
            type: "item",
            name: "Deep Clean",
            price: "50.000",
        },
        {
            type: "item",
            name: "Deep Clean (Sepatu Putih)",
            price: "55.000",
        },
        {
            type: "item",
            name: "Paket Deep Clean (3 pasang) *Diluar sepatu putih",
            price: "100.000",
        },
        {
            type: "item",
            name: "Paket Deep Clean (3 pasang) *Sepatu putih",
            price: "120.000",
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
