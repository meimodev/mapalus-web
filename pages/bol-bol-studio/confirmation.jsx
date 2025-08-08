import React, {useState} from "react";
import dayjs from "dayjs";
import {Strip} from "./package";

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
        <div className="p-4 bg-blue-800 text-white w-full font-lemon">
            <div className="mb-4">
                <h2 className="text-2xl  mb-4">Konfirmasi Pemesanan</h2>
            </div>

            <div className="space-y-4 font-lemon">
                {/* Name Input */}
                <div className="flex flex-col space-y-2 ">
                    <label className="text-sm text-white">Atas Nama</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="text-sm font-poppins p-2 bg-blue-50 border border-white rounded text-black focus:outline-6 focus:outline-blue-800 "
                        placeholder="Untuk mempermudah pencarian dan pengiriman foto"
                    />
                </div>

                {/* Phone Number Input */}
                <div className="flex flex-col space-y-2">
                    <label className="text-sm text-white">Nomor Handphone aktif</label>
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="text-sm font-poppins p-2 bg-blue-50 border border-white rounded text-black focus:outline-6 focus:outline-blue-800 "
                        placeholder="Nomor HP WA / Telegram untuk pengiriman link foto"
                    />
                </div>

                {/* Instagram Input */}
                <div className="flex flex-col space-y-2">
                    <label className="text-sm text-white">Instagram Handler</label>
                    <input
                        type="instagram"
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                        className="text-sm font-poppins p-2 bg-blue-50 border border-white rounded text-black focus:outline-6 focus:outline-blue-800 "
                        placeholder="Untuk Tag, Follow-Followan, Promosi & Diskon "
                    />
                </div>

                <Strip length={90}/>

                <div className="flex flex-col space-y-2 ">
                    <label className="text-sm text-white">Rincian Pesanan</label>

                    <div
                        className={"flex flex-col   p-2 bg-white border border-blue-800 rounded-3xl text-blue-800 text-sm text-center font-american mx-6"}>

                        {selectedPackage && (
                            <div className="flex flex-col">
                                <label className=" font-lemon text-xl">Paket {selectedPackage.name}</label>

                                {selectedDate && (
                                    <div>
                                        {formatDate(selectedDate)}
                                    </div>
                                )}

                                <div className="flex gap-1 justify-center ">
                                    <p>{formatPrice(selectedPackage.price)}</p>
                                    <p className="text-center font-lemon text-amber-400">*</p>
                                </div>
                            </div>
                        )}

                    </div>

                    <div
                        className={"flex flex-col text-blue-50 text-xs text-left pt-1"}>

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

                <Strip length={90}/>

                <div className={"py-4"}>
                    <button
                        onClick={handleConfirmOrder}
                        className="transition duration-200 w-full font-lemon bg-white text-blue-800 px-4 py-2 rounded-xl hover:bg-blue-800 hover:text-white border-2 focus:bg-blue-800 focus:text-white"
                    >
                        Confirm Order
                    </button>
                </div>
            </div>
        </div>
    );
}
