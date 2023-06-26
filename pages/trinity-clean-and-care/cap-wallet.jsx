import Page2 from "../../comps/Page2";

export default function CapWallet() {
    const items = [
        {element: <div className="py-4"/>},
        {type: "title", name: "CAP & WALLET"},
        {element: <div className="py-4"/>},

        {
            type: "item",
            name: "Wallet (Dompet)",
            price: "55.000",
        },
        {
            type: "item",
            name: "Cap (Topi)",
            price: "40.000",
        },
        {
            type: "item",
            name: "Reshape Cap (Topi)",
            price: "20.000",
        },
        {
            type: "item",
            name: "Paket Cuci Top (4 Pasang) *Diluar Reshape",
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
