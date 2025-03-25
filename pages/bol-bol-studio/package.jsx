import React, {useState} from 'react';

const Package = ({packages, selectedPackage, onSelectPackage}) => {

    //function to convert the price number to using K if its thousand and M if its millions
    const formatPrice = (price) => {
        if (price >= 1000) {
            return (price / 1000).toFixed(price % 1000 === 0 ? 0 : 1) + 'K';
        } else {
            return price;
        }
    };

    return (
        <div className="p-4 bg-gray-900 text-white">
            <h2 className="text-2xl font-bold mb-4">Pilih Paket</h2>
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
                                    per {p.duration} minutes
                                </div>
                                <div>
                                    per {p.capacity} pax
                                </div>
                            </div>

                            <h4 className="text-2xl font-bold text-amber-400">
                                {formatPrice(p.price)}
                            </h4>
                        </div>

                    </button>
                ))}

            </div>


        </div>
    );
};

export default Package;
