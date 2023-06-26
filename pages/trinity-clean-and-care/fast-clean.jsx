import Page2 from "../../comps/Page2";

export default function FastClean() {
    const items = [
        {element: <div className="py-4"/>},
        {type: "title", name: "FAST CLEAN"},
        {type: "desc", value: "Mencuci hanya bagian luar sepatu (tidak termasuk outsole)"},
        {element: <div className="py-4"/>},

        {
            type: "item",
            name: "Fast Clean",
            price: "30.000",
        },
        {
            type: "item",
            name: "Fast Clean (Sepatu Putih)",
            price: "35.000",
        },
        {
            type: "item",
            name: "Paket Fast Clean (2 pasang) *Diluar sepatu putih",
            price: "50.000",
        },
        {
            type: "item",
            name: "Paket Fast Clean (2 pasang) *Sepatu putih ",
            price: "50.000",
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
