import React, {useState} from "react";

export default function ConfirmationView({selectedDate, packageName, basePrice, onConfirmOrder}) {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [duration, setDuration] = useState(5);
    const [instagram, setInstagram] = useState("");

    // Generate duration options from 5 to 120 minutes in steps of 5
    const durationOptions = Array.from({length: 24}, (_, i) => (i + 1) * 5);

    // Calculate total price based on selected duration and base price
    const totalPrice = (basePrice * duration) / 60;  // Assuming basePrice is per hour

    return (
        <div className="p-4 bg-gray-900 text-white w-full">
            <div className="mb-4">
                <h2 className="text-2xl font-bold mb-4">Confirm Order</h2>
            </div>

            <div className="space-y-4">
                {/* Name Input */}
                <div className="flex flex-col space-y-2">
                    <label className="text-sm text-gray-400">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500"
                        placeholder="Enter Name"
                    />
                </div>

                {/* Phone Number Input */}
                <div className="flex flex-col space-y-2">
                    <label className="text-sm text-gray-400">Phone Number</label>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="p-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500"
                        placeholder="Enter Phone Number"
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
                        placeholder="Enter Instagram handler"
                    />
                </div>

                {/* Duration Dropdown */}
                <div className="flex flex-col space-y-2">
                    <label className="text-sm text-gray-400">Duration (Minutes)</label>
                    <select
                        value={duration}
                        onChange={(e) => setDuration(parseInt(e.target.value))}
                        className="p-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500"
                    >
                        {durationOptions.map((dur) => (
                            <option key={dur} value={dur}>
                                {dur} minutes
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col space-y-2">
                    <label className="text-sm text-gray-400">Order Summary
                    </label>

                    <div
                        className={"flex flex-col space-y-2  p-2 bg-gray-800 border border-gray-700 rounded text-white"}>

                        {selectedDate && (
                            <label>{selectedDate}</label>
                        )}

                        {packageName && (
                            <label>{packageName}</label>
                        )}

                        <label>Rp. {totalPrice}</label>

                    </div>
                </div>

                <div className={"py-4"}>
                    <button
                        onClick={ onConfirmOrder}
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2"
                    >
                        Confirm Order
                    </button>
                </div>

            </div>
        </div>
    );
}
