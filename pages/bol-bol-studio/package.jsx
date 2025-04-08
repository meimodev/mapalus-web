import React, {useState} from 'react';

const Package = ({packages, onSelectPackage, addsOn}) => {

    //function to convert the price number to using K if its thousand and M if its millions
    const formatPrice = (price) => {
        if (price >= 1000) {
            return (price / 1000).toFixed(price % 1000 === 0 ? 0 : 1) + ' K';
        } else {
            return price;
        }
    };


    return (
        <div className="p-4 bg-gray-900 text-white">
            <h2 className="text-2xl font-bold ">Pilih Paket</h2>
            <p className="text-sm mb-4 italic">Silahkan pilih paket dasar</p>
            <div className="flex flex-col gap-4 rounded w-full">

                {packages.map((p) => (
                    <button
                        key={p.id}
                        onClick={() => onSelectPackage(p)}
                        className="p-4 border border-gray-600 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 ">
                        <div className='flex gap-3 items-center'>
                            <div className="min-w-[5rem] font-bold text-left">
                                {p.name.toUpperCase()}
                            </div>
                            <div className='flex-col flex-grow text-xs text-left'>
                                <div>
                                    <span className="font-bold">{p.duration} Menit </span>sesi foto
                                </div>
                                <div>
                                    maximal <span className="font-bold">{p.capacity} orang</span>
                                </div>
                                {p.notes && <div className='text-xs text-left'>{p.notes.map((note, index) => <div
                                    key={index}>{note}</div>)}</div>}
                            </div>


                            <h4 className="text-2xl font-bold text-amber-400">
                                {formatPrice(p.price)}
                            </h4>
                        </div>

                    </button>
                ))}

            </div>
            <div className="my-4 border-b-amber-400 border-b-2"/>

            <h2 className="text-2xl font-bold ">Adds On</h2>
            <p className="text-sm italic mb-4">Tambahan diluar paket </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
                {addsOn.map((addOn, index) => (
                    <div key={index} className="p-4  bg-gray-800 rounded-lg ">
                        <div className="flex items-center">
                            <div className="flex-grow text-xs">
                                {addOn.title}
                            </div>
                            <div className="font-bold text-md text-amber-400">
                                {formatPrice(addOn.price)}
                            </div>
                        </div>
                    </div>
                ))}


            </div>


        </div>
    );
};

export default Package;
