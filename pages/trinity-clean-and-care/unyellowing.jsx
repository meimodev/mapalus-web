import Page2 from "../../comps/Page2";

export default function UnYellowing() {
    const items = [
        {element: <div className="py-4"/>},
        {type: "title", name: "UNYELLOWING"},
        {type: "desc", value: "Mengembalikan midsole kuning menjadi putih kembali"},
        {element: <div className="py-4"/>},

        {
            type: "item",
            name: "Unyellowing Midsole (Rubber) *Termasuk Deep Clean",
            price: "60.000",
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
