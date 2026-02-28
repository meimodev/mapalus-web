import React from 'react';
import dayjs from "dayjs";
import {Fade} from "react-awesome-reveal";
import {Strip} from "./package";

const HomeView = ({studioInfo, onClickBooking}) => {

    const openMinutes = studioInfo?.openingHours?.openMinutes;
    const closeMinutes = studioInfo?.openingHours?.closeMinutes;
    const timezoneLabel = studioInfo?.timezoneLabel || "";

    const openLabel = typeof openMinutes === "number"
        ? dayjs().startOf("day").add(openMinutes, "minute").format("HH:mm")
        : "";
    const closeLabel = typeof closeMinutes === "number"
        ? dayjs().startOf("day").add(closeMinutes, "minute").format("HH:mm")
        : "";

    const socials = studioInfo?.socials || {};

    return (
        <div className="bg-blue-800 text-white h-screen flex flex-col  justify-center ">

            {/*<img src="https://ik.imagekit.io/geb6bfhmhx/bol-bol-studio/main.jpg?updatedAt=1754041084936" alt="main image"*/}
            {/*/>*/}


            <div
                className=" bg-[url('https://ik.imagekit.io/geb6bfhmhx/bol-bol-studio/main.jpg?updatedAt=1754041084936')] w-full h-full mx-auto bg-contain bg-center bg-no-repeat relative">

                <Fade direction="down" triggerOnce>
                    <div className="absolute flex justify-center top-4 overflow-clip w-full left-0 right-0 ">
                        <Strip length={115}/>
                    </div>
                </Fade>

                <div
                    className="text-center bottom-0 left-0 right-0 absolute bg-gradient-to-t from-blue-800 via-blue-800 to-transparent ">

                    <Fade direction="up" triggerOnce>
                        <div className="pt-12 font-bold">
                            <div className="text-5xl font-lemon">
                                OPEN EVERYDAY!
                            </div>
                            <div className="text-xl flex justify-center gap-2">
                                <span>{openLabel}</span>
                                <span className="text-xs font-thin font-mono">{timezoneLabel}</span>
                                <span>-</span>
                                <span>{closeLabel}</span>
                                <span className="text-xs font-thin font-mono">{timezoneLabel}</span>
                            </div>
                        </div>
                    </Fade>

                    <Fade direction="up" triggerOnce>
                        <div className="flex justify-around font-poppins pt-4 pb-4 font-bold text-xs">
                            <a href={socials.instagramUrl} target="_blank"
                               className='flex gap-1 items-center'>
                                <img src="/logos/logo-instagram.svg" className="w-4 h-4" alt=""/> {socials.instagramHandle}
                            </a>
                            <a href={socials.tiktokUrl} target="_blank" className='flex gap-1 items-center'>
                                <img src="/logos/logo-tiktok.svg" className="w-4 h-4" alt=""/> {socials.tiktokHandle}
                            </a>
                            <a href={socials.facebookUrl} target="_blank"
                               className='flex gap-1 items-center'>
                                <img src="/logos/logo-facebook.svg" className="w-8 h-8" alt=""/> {socials.facebookLabel}
                            </a>

                        </div>
                    </Fade>

                    <Fade direction="up" triggerOnce>
                        <button
                            onClick={onClickBooking}
                            className="transition duration-200 text-blue-800 px-8 py-4 rounded-2xl bg-white mt-4 font-lemon active:scale-[0.99]"
                        >
                            Pesan Sekarang
                        </button>
                    </Fade>

                    <Fade direction="up" triggerOnce>
                        <div className="my-4 flex justify-center bottom-4 overflow-clip w-full left-0 right-0 ">
                            <Strip length={115}/>
                        </div>
                    </Fade>

                </div>
            </div>
        </div>
    );
};

export default HomeView;
