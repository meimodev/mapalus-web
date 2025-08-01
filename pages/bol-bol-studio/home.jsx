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
                            EVERYDAY
                        </div>
                        <div className="text-xl">
                            11:00 AM - 22:00 PM
                        </div>
                    </div>

                    <div className="flex justify-around font-poppins pt-4 pb-4 font-bold">
                        <a href="https://www.instagram.com/bolbol_studio" target="_blank" className='flex gap-1 items-center'>
                            <img src="/logos/logo-instagram.svg" className="w-6 h-6" alt=""/>  @bolbol_studio
                        </a>
                        <a href="https://www.tiktok.com/" target="_blank" className='flex gap-1 items-center'>
                            <img src="/logos/logo-tiktok.svg" className="w-6 h-6" alt=""/>  @bolbol_studio
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
