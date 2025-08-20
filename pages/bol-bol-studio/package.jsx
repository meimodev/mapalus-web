import React, {useState} from 'react';

export const Strip = ({length}) => <div className="inline-grid grid-flow-col grid-rows-3 ">
    {[...Array(length).keys()].map(i => (
        <div
            key={i}
            className={`w-4 h-4 ${i % 2 === 0 ? 'bg-white' : 'bg-blue-800'}`}
        ></div>
    ))}
</div>

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
        <div className="p-4 bg-blue-800 text-white">
            <div className="flex gap-6 overflow-clip my-4 justify-between items-center ">
                <div className="grow-1 w-full ">
                    <h2 className="text-2xl font-lemon ">Pilih Paket</h2>
                    <p className="text-sm italic font-american">Paket dasar dulu yaaa</p>
                </div>
                <div className="grow-0 overflow-clip  ">
                    <Strip length={51}/>
                </div>
            </div>

            <div className="flex flex-col gap-4 rounded w-full">

                {packages && packages.map((p) => (
                    <button
                        key={p.id}
                        onClick={() => onSelectPackage(p)}
                        className="transition duration-200 p-4 border-2 font-lemon border-white rounded-xl hover:bg-white hover:text-blue-800 focus:bg-white focus:text-blue-800 focus:border-amber-400">
                        <div className='flex gap-3 items-center'>
                            <div className="min-w-[5rem] text-left">
                                {p.name.toUpperCase()}
                            </div>
                            <div className='flex-col flex-grow text-xs text-left font-american'>
                                <div>
                                    <span className="font-bold ">{p.duration} Menit </span>sesi foto
                                </div>
                                <div>
                                    maximal <span className="font-bold">{p.capacity} orang</span>
                                </div>
                                {p.notes &&
                                    <div className='text-xs text-left'>{p.notes && p.notes.map((note, index) => <div
                                        key={index}>{note}</div>)}</div>}
                            </div>

                            <h4 className="text-2xl ">
                                {formatPrice(p.price)}
                            </h4>
                        </div>

                    </button>
                ))}

            </div>

            <div className="flex gap-6 overflow-clip my-4 justify-between items-center ">
                <div className="grow-1 w-full ">
                    <h2 className="text-2xl font-lemon ">TAMBAHAN</h2>
                    <p className="text-sm italic font-american">Kalo paket dasar kurang</p>
                </div>
                <div className="grow-0 overflow-clip  ">
                    <Strip length={51}/>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
                {addsOn && addsOn.map((addOn, index) => (
                    <div key={index} className="p-4  bg-white rounded-lg ">
                        <div className="flex items-center text-blue-800 font-american gap-4">
                            <div className="flex-grow text-xs">
                                {addOn.title}
                            </div>
                            <div className="min-w-12 font-bold text-md font-lemon">
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
