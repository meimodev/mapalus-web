import React, {useState} from "react";
import dayjs from "dayjs";

export default function BookingDialog({isOpen, onClose, onSubmit, packages, studioInfo}) {
    const [bookingDate, setBookingDate] = useState(null);
    const [startMinutes, setStartMinutes] = useState(null);
    const [endMinutes, setEndMinutes] = useState(null);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [note, setNote] = useState("");
    const [selectedPackages, setSelectedPackages] = useState("");

    const openMinutes = studioInfo?.openingHours?.openMinutes;
    const closeMinutes = studioInfo?.openingHours?.closeMinutes;

    const toTimeLabel = (minutes) => {
        if (typeof minutes !== "number") return "";
        return dayjs().startOf("day").add(minutes, "minute").format("HH:mm");
    }

    const parseTimeToMinutes = (value) => {
        if (!value) return null;
        const [h, m] = value.split(":").map(Number);
        if (!Number.isFinite(h) || !Number.isFinite(m)) return null;
        return h * 60 + m;
    }

    const handleSubmit = () => {
        if (!bookingDate) {
            alert("Please select a date");
            return;
        }
        if (typeof startMinutes !== "number" || typeof endMinutes !== "number") {
            alert("Please select a time range");
            return;
        }
        if (endMinutes <= startMinutes) {
            alert("End time must be after start time");
            return;
        }

        const selectedDate = dayjs(bookingDate).toDate();
        const selectedStartTime = dayjs(bookingDate).startOf("day").add(startMinutes, "minute").toDate();
        const selectedEndTime = dayjs(bookingDate).startOf("day").add(endMinutes, "minute").toDate();

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
        setBookingDate(null);
        setStartMinutes(null);
        setEndMinutes(null);
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
                        value={bookingDate ? dayjs(bookingDate).format("YYYY-MM-DD") : ""}
                        onChange={(e) => {
                            const value = e.target.value;
                            setBookingDate(value ? dayjs(value).toDate() : null);
                        }}
                        className="p-2 bg-gray-800 rounded w-1/2 text-white"
                    />
                </div>

                {/* Time Range Input */}
                <div className="flex flex-col space-y-2">
                    <label className="text-sm ">Time Range</label>
                    <div className="flex gap-4">
                        <input
                            type="time"
                            min={typeof openMinutes === "number" ? toTimeLabel(openMinutes) : undefined}
                            max={typeof closeMinutes === "number" ? toTimeLabel(closeMinutes) : undefined}
                            value={toTimeLabel(startMinutes)}
                            onChange={(e) => setStartMinutes(parseTimeToMinutes(e.target.value))}
                            className="p-2  bg-gray-800 rounded w-1/2 text-white"
                        />
                        <span className="text-sm self-center  font-bold">to</span>
                        <input
                            type="time"
                            min={typeof openMinutes === "number" ? toTimeLabel(openMinutes) : undefined}
                            max={typeof closeMinutes === "number" ? toTimeLabel(closeMinutes) : undefined}
                            value={toTimeLabel(endMinutes)}
                            onChange={(e) => setEndMinutes(parseTimeToMinutes(e.target.value))}
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
                    {bookingDate && typeof startMinutes === "number" && typeof endMinutes === "number" && name && phone && selectedPackages ? (
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
