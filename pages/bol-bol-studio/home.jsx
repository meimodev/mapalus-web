import React from 'react';

const HomeView = ({onClickBooking}) => {

    return (
        <div className="p-4 bg-gray-900 text-white h-screen flex flex-col  justify-center ">

            <div className="text-center">
                <h2 className="text-2xl font-bold ">Bol bol Studio</h2>

                <div className="py-2">
                    Everyday 11:00 - 22:00
                </div>

                <button
                    onClick={onClickBooking}
                    className="text-white px-4 py-2 rounded-2xl bg-blue-600 mt-4">
                    BOOK NOW
                </button>
            </div>
        </div>
    );
};

export default HomeView;
