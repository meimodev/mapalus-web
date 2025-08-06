import React, {useState} from "react";
import dayjs from "dayjs";

export default function ConfirmationView({selectedDate, selectedPackage, onConfirmOrder}) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    // const [duration, setDuration] = useState(5);
    const [instagram, setInstagram] = useState("");


    //function to convert the price string to Rupiah Format
    const formatPrice = (price) => {
        if (!price) return "";

        return "Rp " + price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    };

    const formatDate = (date) => {
        console.log(date);
        const _date = dayjs(date);
        return _date.format(" DD MMMM YYYY");
    };

    const handleConfirmOrder = () => {

        const order = {
            name,
            phone,
            instagram,
            package: selectedPackage,
            date: formatDate(selectedDate),
        }

        onConfirmOrder(order);

        setName("");
        setPhone("");
        setInstagram("");
    }

    return (
        <div className="p-4 bg-blue-800 text-white w-full">
            <div className="mb-4">
                <h2 className="text-2xl font-bold mb-4">Konfirmasi Pemesanan</h2>
            </div>

            <div className="space-y-4">
                {/* Name Input */}
                <div className="flex flex-col space-y-2">
                    <label className="text-sm text-gray-400">Atas Nama</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500"
                        placeholder="Untuk mempermudah pencarian dan distribusi"
                    />
                </div>

                {/* Phone Number Input */}
                <div className="flex flex-col space-y-2">
                    <label className="text-sm text-gray-400">Nomor Handphone aktif</label>
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="p-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500"
                        placeholder="Nomor HP WA / Telegram untuk pengiriman link foto"
                    />
                </div>

                {/* Instagram Input */}
                <div className="flex flex-col space-y-2">
                    <label className="text-sm text-gray-400">Instagram Handler</label>
                    <input
                        type="instagram"
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                        className="p-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500"
                        placeholder="Untuk Tag, Follow-Followan, Promosi & Diskon "
                    />
                </div>

                <div className="flex flex-col space-y-2">
                    <label className="text-sm text-gray-400">Order Summary
                    </label>

                    <div
                        className={"flex flex-col   p-2 bg-gray-900 border border-gray-700 rounded text-gray-200 text-sm text-center"}>


                        {selectedPackage && (
                            <div className="flex flex-col ">
                                <label className="font-bold ">Paket {selectedPackage.name}</label>

                                {selectedDate && (
                                    <div>{formatDate(selectedDate)}</div>
                                )}

                                <div className="flex gap-1 justify-center">
                                    <p>{formatPrice(selectedPackage.price)}</p>
                                    <p className="text-center font-bold text-amber-400">*</p>
                                </div>
                            </div>
                        )}

                    </div>
                    <div
                        className={"flex flex-col    text-amber-400 text-sm text-left "}>

                        <div className="flex gap-1">
                            <p className="text-center font-bold ">*</p>
                            <p>Harga yang tertera hanya estimasi !</p>
                        </div>
                        <div className="flex gap-1">
                            <p className="text-center font-bold ">*</p>
                            <p>Harga final akan dikonfirmasi admin bol-bol studio</p>
                        </div>

                    </div>
                </div>


                <div className={"py-4"}>
                    <button
                        onClick={handleConfirmOrder}
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2"
                    >
                        Confirm Order
                    </button>
                </div>

            </div>
        </div>
    );
}
