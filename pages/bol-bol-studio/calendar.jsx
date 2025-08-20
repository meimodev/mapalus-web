import React, {useState} from "react";
import dayjs from "dayjs";
import {Strip} from "./package";

const obf = (isAdmin, str) => {

    if (!str) return "";

    if (isAdmin) return str;

    if (str.length > 4) {
        return str.slice(0, -4) + '****'; // Censor the last 4 characters
    } else if (str.length > 2) {
        return str.slice(0, 2) + '****'; // Censor all but the first 2 characters
    } else {
        return str.slice(0, 2) + '****'; // If the string is too short, show only 2 characters
    }
}

export default function CalendarView({bookings, isAdmin, onCancelBooking, onSelectDate, selectedDate}) {
    const [currentDate, setCurrentDate] = useState(dayjs());
    const [selected, setSelected] = useState(dayjs(selectedDate));


    const today = dayjs();
    const startOfMonth = currentDate.startOf("month");
    const startDay = startOfMonth.day();
    const daysInMonth = currentDate.daysInMonth();

    const prevMonth = () => {
        setCurrentDate(currentDate.subtract(1, "month"));
    };

    const nextMonth = () => {
        setCurrentDate(currentDate.add(1, "month"));
    };

    const renderDays = () => {
        const days = [];

        for (let i = 0; i < startDay; i++) {
            days.push(<div key={`empty-${i}`} className="h-10  rounded-full "></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const date = currentDate.date(day);
            const isToday = today.isSame(date, 'day');
            const isSelected = selected.isSame(date, 'day');

            let dayBookings = [];

            if (bookings) {
                dayBookings = bookings.filter(booking => dayjs(booking.start).isSame(date, 'day'));
            }


            days.push(
                <div
                    key={day}
                    className={`transition duration-200 hover:scale-90 h-14 flex rounded-lg flex-col items-center justify-center   cursor-pointer text-blue-800
                    ${isSelected ? ' bg-blue-800 text-white border-white border-2' : ` bg-white`}
                    `}
                    onClick={() => {
                        setSelected(date);
                    }}
                >
                    <div
                        className={`font-lemon ${isToday ? 'underline underline-offset-2 decoration-2' : ''}`}>{day}</div>
                    {dayBookings.length > 0 && (
                        <div className={`text-xs text-blue-800 font-lemon ${isSelected ? 'text-white' : ''}`}>{dayBookings.length}</div>
                    )}
                </div>
            );
        }

        return days;
    };

    const renderSelectedDateSlots = () => {


        // const selectedDayBookings =bookings.filter(booking => dayjs(booking.start).isSame(selected, 'day'));
        let selectedDayBookings = [];
        selectedDayBookings.push(bookings);

        if (bookings) {
            selectedDayBookings = bookings.filter(booking => dayjs(booking.start).isSame(selected, 'day'));
        }


        return (
            <div className="mt-4">
                <h3 className="text-lg font-lemon mb-2">{selected.format("D MMMM YYYY")}</h3>
                {selectedDayBookings.length > 0 ? (
                    selectedDayBookings.map((booking, index) => {
                        if (!booking) {
                            return <div key={index}></div>
                        }
                        const bookingName = booking.name;
                        return (
                            <div key={index} className="my-6">
                                <div className="p-4  border-2 border-white rounded-xl my-4">
                                    <div className="flex gap-3 justify-start items-center text-sm ">
                                        <div>
                                            <div className=" text-start">
                                                <p>Start</p>
                                                <p>End</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-start">
                                                <p>{dayjs(booking.start).format("HH:mm")}</p>
                                                <p>{dayjs(booking.end).format("HH:mm")}</p>
                                            </div>
                                        </div>
                                        <div className="  text-start">
                                            <p className=" text-gray-100">{obf(isAdmin, bookingName)} </p>
                                            <p className="text-gray-300">{isAdmin ? `${booking.package} |` : ""} {booking.note}</p>
                                        </div>
                                        {isAdmin ? <div className="">
                                            <button
                                                onClick={() => {
                                                    onCancelBooking(booking);
                                                }}
                                                className="font-bold bg-red-500 text-white px-4 py-2 rounded-2xl
                                                     hover:bg-blue-500 mt-2"
                                            >
                                                Cancel
                                            </button>
                                        </div> : <></>}


                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p className="font-lemon text-xs text-blue-50 pb-4">(¬_¬&quot;)</p>
                )}
                <button
                    onClick={() => {
                        onSelectDate(selected.toDate());
                        setSelected(selected);
                    }}
                    className="transition duration-200 w-full font-lemon bg-white text-blue-800 px-4 py-2 rounded-xl hover:bg-blue-800 hover:text-white border-2 focus:bg-blue-800 focus:text-white"
                >
                    Pesan Sekarang
                </button>
            </div>
        );
    };

    const renderDayTitle = (title) => <div
        className="font-lemon border-b-2 text-xs text-blue-50 border-blue-200 py-2 rounded">{title}</div>;

    return (
        <div className="p-4 bg-blue-800 text-white w-full">

            <div className="flex items-center justify-between mb-4 font-lemon">
                <button
                    onClick={prevMonth}
                    className="border-2 bg-white text-blue-800 px-4 py-2 rounded-full hover:bg-blue-800 hover:text-white "
                >
                    {"<"}
                </button>
                <div className="flex gap-2 items-center">
                    <h2 className="text-xl font-lemon">
                        {currentDate.format("MMMM")}
                    </h2>
                    <p className="text-xs font-lemon">
                        {currentDate.format("YYYY")}
                    </p>
                </div>
                <button
                    onClick={nextMonth}
                    className="border-2 bg-white text-blue-800 px-4 py-2 rounded-full hover:bg-blue-800 hover:text-white ">
                    {">"}
                </button>
            </div>

            <div className="grid grid-cols-7 gap-3 text-center text-sm ">
                {renderDayTitle("Min")}
                {renderDayTitle("Sen")}
                {renderDayTitle("Sel")}
                {renderDayTitle("Rab")}
                {renderDayTitle("Kam")}
                {renderDayTitle("Jum")}
                {renderDayTitle("Sab")}
            </div>

            <div className="grid grid-cols-7 gap-3 mt-4 w-full mb-4">
                {renderDays()}
            </div>

            <div className="my-4 flex justify-center bottom-4 overflow-clip w-full left-0 right-0 ">
                <Strip length={115}/>
            </div>

            {selected && (
                <div className="mt-4 text-center">
                    {renderSelectedDateSlots()}
                </div>
            )}

        </div>
    );
}
