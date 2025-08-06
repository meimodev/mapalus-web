import React from 'react';

const HomeView = ({onClickBooking}) => {

    return (
        <div className="bg-blue-800 text-white h-screen flex flex-col  justify-center ">

            {/*<img src="https://ik.imagekit.io/geb6bfhmhx/bol-bol-studio/main.jpg?updatedAt=1754041084936" alt="main image"*/}
            {/*/>*/}

            <div
                className=" bg-[url('https://ik.imagekit.io/geb6bfhmhx/bol-bol-studio/main.jpg?updatedAt=1754041084936')] w-full h-full mx-auto bg-contain bg-center bg-no-repeat relative">

                <div
                    className="text-center bottom-24 left-0 right-0 absolute bg-gradient-to-t from-blue-800 via-blue-800 to-transparent ">

                    <div className="pt-12 font-bold">
                        <div className="text-5xl font-lemon">
                           OPEN EVERYDAY!
                        </div>
                        <div className="text-xl flex justify-center gap-2">
                            <span>11:00 AM</span>
                            <span className="text-xs font-thin font-mono">WITA</span>
                            <span>-</span>
                            <span>21:00 PM</span>
                            <span className="text-xs font-thin font-mono">WITA</span>
                        </div>
                    </div>

                    <div className="flex justify-around font-poppins pt-4 pb-4 font-bold text-xs">
                        <a href="https://www.instagram.com/bolbol_studio" target="_blank"
                           className='flex gap-1 items-center'>
                            <img src="/logos/logo-instagram.svg" className="w-4 h-4" alt=""/> @bolbol_studio
                        </a>
                        <a href="https://www.tiktok.com/" target="_blank" className='flex gap-1 items-center'>
                            <img src="/logos/logo-tiktok.svg" className="w-4 h-4" alt=""/> @bolbol_studio
                        </a>
                        <a href="https://www.facebook.com/share/168ARZJr3N/?mibextid=wwXIfr" target="_blank" className='flex gap-1 items-center'>
                            <img src="/logos/logo-facebook.svg" className="w-8 h-8" alt=""/> Bolbol Pss
                        </a>

                    </div>

                    <button
                        onClick={onClickBooking}
                        className="text-blue-800 px-8 py-4 rounded-2xl bg-white mt-4 font-black">
                        BOOK NOW
                    </button>

                </div>
            </div>
        </div>
    );
};

export default HomeView;
