import React, {useState} from "react";
import dayjs from "dayjs";

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
                    className={`h-14 flex rounded-lg flex-col items-center justify-center   cursor-pointer
                    ${isSelected ? 'font-bold  bg-blue-500 ' : `${isToday ? 'font-bold  bg-gray-900 border-2 ' : ' border-gray-600 border bg-gray-800'} `}
                    `}
                    onClick={() => {
                        setSelected(date);
                    }}
                >
                    <div className={"text-sm font-bold"}>{day}</div>
                    {dayBookings.length > 0 && (
                        <div className="text-xs text-yellow-400 font-light">{dayBookings.length}</div>
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

        if(bookings){
             selectedDayBookings =bookings.filter(booking => dayjs(booking.start).isSame(selected, 'day'));
        }


        return (
            <div className="mt-4">
                <h3 className="text-lg font-bold mb-2">{selected.format("DD MMMM YYYY")}</h3>
                {selectedDayBookings.length > 0 ? (
                    selectedDayBookings.map((booking, index) => {
                        if(!booking){
                            return <div key={index}></div>
                        }
                        const bookingName = booking.name;
                        return (
                            <div key={index} className="mb-2">
                                <div className="p-2 bg-gray-800 border border-gray-700 rounded mb-1">
                                    <div className="flex gap-3 justify-center items-center">
                                        <div>
                                            <div className="text-sm font-semibold">
                                                 <p>{dayjs(booking.start).format("HH:mm")}</p>
                                                <p>{dayjs(booking.end).format("HH:mm")}</p>
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <p className="text-sm text-gray-100">{obf(isAdmin, bookingName)} </p>
                                            <p className="text-xs text-gray-300">{isAdmin ? `${booking.package} |` : ""} {booking.note}</p>
                                        </div>
                                        {isAdmin ? <div className="">
                                            <button
                                                onClick={() => {
                                                    onCancelBooking(booking);
                                                }}
                                                className="font-bold bg-red-500 text-white px-4 py-2 rounded-2xl
                                                     hover:bg-blue-600 mt-2"
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
                    <p className="text-sm text-gray-400">Tidak ada booking.</p>
                )}
                <button
                    onClick={() => {
                        onSelectDate(selected.toDate());
                        setSelected(selected);
                    }}
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2"
                >
                    Book
                </button>


            </div>
        );
    };

    const renderDayTitle = (title) => <div
        className=" border-b-2 text-gray-400 border-gray-800 py-2 rounded">{title}</div>;

    return (
        <div className="p-4 bg-blue-800 text-white w-full">

            <div className="flex items-center justify-between mb-4">
                <button
                    onClick={prevMonth}
                    className="border border-blue-50 text-white px-4 py-2 rounded-full "

                >
                    {"<"}
                </button>
                <div className="flex gap-2 items-center">
                    <h2 className="text-xl font-bold">
                        {currentDate.format("MMMM")}
                    </h2>
                    <p className="text-xs">
                        {currentDate.format("YYYY")}
                    </p>
                </div>
                <button
                    onClick={nextMonth}
                    className="border border-blue-50 text-white px-4 py-2 rounded-full "
                >
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

            <div className="grid grid-cols-7 gap-3 mt-4 w-full">
                {renderDays()}
            </div>

            {selected && (
                <div className="mt-4 text-center">
                    {renderSelectedDateSlots()}
                </div>
            )}

        </div>
    );
}
