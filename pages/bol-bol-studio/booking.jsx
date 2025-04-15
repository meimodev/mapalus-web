import React, {useState} from "react";
import dayjs from "dayjs";

export default function BookingDialog({isOpen, onClose, onSubmit, packages}) {
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [note, setNote] = useState("");
    const [date, setDate] = useState("");
    const [selectedPackages, setSelectedPackages] = useState("");

    const handleSubmit = () => {
        if (!date) {
            alert("Please select a date");
            return;
        }
        const selectedDate = dayjs(`${date}`).toDate();
        if (!startTime || !endTime) {
            alert("Please select a time range");
            return;
        }
        const selectedStartTime = dayjs(`${date} ${startTime}`).toDate();
        const selectedEndTime = dayjs(`${date} ${endTime}`).toDate();

        const booking = {
            "start": selectedStartTime,
            "end": selectedEndTime,
            name,
            phone,
            note,
            "booking_timestamp": selectedDate,
            "package": selectedPackages,
        }
        onSubmit(booking);
        handleResetInput();
        onClose();
    };

    const handleResetInput = () => {
        setStartTime("");
        setEndTime("");
        setName("");
        setPhone("");
        setNote("");
        setSelectedPackages("");
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className=" text-gray-400 bg-gray-900 p-6 rounded-lg w-96 space-y-4 ">
                <h2 className="text-lg font-bold text-center mb-4 text-white">Tambah Booking</h2>

                <div className="flex flex-col space-y-2">
                    <label className="text-sm ">Booking Date</label>
                    {/*<label className="text-sm text-white">12 Februari 2025</label>*/}
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="p-2 bg-gray-800 rounded w-1/2 text-white"
                    />
                </div>

                {/* Time Range Input */}
                <div className="flex flex-col space-y-2">
                    <label className="text-sm ">Time Range</label>
                    <div className="flex gap-4">
                        <input
                            type="time"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            className="p-2  bg-gray-800 rounded w-1/2 text-white"
                        />
                        <span className="text-sm self-center  font-bold">to</span>
                        <input
                            type="time"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            className="p-2  bg-gray-800 rounded w-1/2 text-white"
                        />
                    </div>
                </div>

                {/* Name Input */}
                <div className="flex flex-col space-y-2">
                    <label className="text-sm ">Booking Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-2  bg-gray-800 rounded text-white"
                        placeholder="Enter Booking Name"
                    />
                </div>

                {/* PHone Input */}
                <div className="flex flex-col space-y-2">
                    <label className="text-sm ">Booking Phone Number</label>
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="p-2  bg-gray-800 rounded text-white"
                        placeholder="Enter Phone Number"
                    />
                </div>

                {/* Package Selection */}
                <div className="flex flex-col space-y-2">
                    <label className="text-sm ">Packages</label>
                    <select
                        value={selectedPackages}
                        onChange={(e) => setSelectedPackages(e.target.value)}
                        className="p-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500"
                    >
                        {packages.map((pkg) => (
                            <option key={pkg.name} value={pkg.name}>
                                {pkg.name} per {pkg.price} duration:{pkg.duration}
                            </option>
                        ))}
                    </select>
                </div>


                {/* Note Input */}
                <div className="flex flex-col space-y-2">
                    <label className="text-sm ">Note</label>
                    <input
                        type="text"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        className="p-2  bg-gray-800 rounded text-white"
                        placeholder="Note"
                    />
                </div>

                {/* Submit and Cancel buttons */}
                <div className="flex gap-4 mt-4 justify-center items-center">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-red-700 text-white rounded-2xl hover:bg-gray-600"
                    >
                        X
                    </button>
                    {date && startTime && endTime && name && phone && selectedPackages ? (
                        <button
                            onClick={handleSubmit}
                            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Add Booking
                        </button>
                    ) : <p className="text-xs">form not complete</p>}

                </div>
            </div>
        </div>
    );
}
