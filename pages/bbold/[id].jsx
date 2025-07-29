/* eslint-disable @next/next/no-img-element */
import {_BuildMeta} from ".";
import {useRouter} from "next/router";
import {Fade} from "react-awesome-reveal";
import FooterDefault from "../../comps/FooterDefault";
import {pictureData} from ".";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination, Navigation} from "swiper";

export default function Pages() {
    const router = useRouter();
    const {id} = router.query;

    function shuffle(array) {
        let currentIndex = array.length,
            randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }

        return array;
    }

    const SwiperWrapper = ({children, className}) => {
        return (
            <Swiper
                speed={3000}
                // pagination={{
                //   dynamicBullets: true,
                // }}
                autoplay={{
                    delay: -400,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className={"mySwiper h-full w-full " + className}
            >
                {children}
            </Swiper>
        );
    };

    const pictures = {
        b2: {
            images: [
                ...pictureData[0].images,
                ...pictureData[1].images,
                ...pictureData[2].images,
                ...pictureData[3].images,
                ...pictureData[4].images,
            ],
        },
        b4: {
            images: [
                ...pictureData[5].images,
                ...pictureData[6].images,
            ],
        },
        c: {
            images: [
                ...pictureData[7].images,
            ],
        },
        lanyard: {
            images: [
                ...pictureData[8].images,
            ],
        },
        pin: {
            images: [
                ...pictureData[9].images,
                ...pictureData[10].images,
            ],
        },
    };

    const links = {
        b2: {
            whatsApp:
                "https://api.whatsapp.com/send?phone=+6285756681077&text=ORDER-BBOLD-B2",
            map: "https://www.google.com/maps/place/BBOLD.MMXX+TONDANO/@1.3033844,124.9084929,17z/data=!3m1!4b1!4m5!3m4!1s0x328715e2e5de6b81:0x4965ac475ae18d7c!8m2!3d1.3033865!4d124.9106838",
            tokopedia:
                "https://www.tokopedia.com/bbold/bbold-dekorasi-dinding-size-b2-22-5cm-x-30cm-x-2cm",
            shopee:
                "https://shopee.co.id/BBOLD-Dekorasi-Dinding-Size-B2-(30cm-x-22.5cm-x-2cm)-i.14752641.3385608954?sp_atk=2726d202-be04-42dd-b01b-3767a6f015cf&xptdk=2726d202-be04-42dd-b01b-3767a6f015cf",
        },
        b4: {
            whatsApp:
                "https://api.whatsapp.com/send?phone=+6285756681077&text=ORDER-BBOLD-B4",
            map: "https://www.google.com/maps/place/BBOLD.MMXX+TONDANO/@1.3033844,124.9084929,17z/data=!3m1!4b1!4m5!3m4!1s0x328715e2e5de6b81:0x4965ac475ae18d7c!8m2!3d1.3033865!4d124.9106838",
            tokopedia:
                "https://www.tokopedia.com/bbold/bbold-dekorasi-dinding-size-b4-30cm-x-45cm-x-2cm-photo-tulisan",
            shopee:
                "https://shopee.co.id/BBOLD-I-Dekorasi-Dinding-Size-B4-(45cm-x-30cm-x-2cm)-PHOTO-ONLY-i.14752641.8667438025?sp_atk=3429f840-16e3-46c3-ad22-1914f6b99ae8&xptdk=3429f840-16e3-46c3-ad22-1914f6b99ae8",
        },
        c: {
            whatsApp:
                "https://api.whatsapp.com/send?phone=+6285756681077&text=ORDER-BBOLD-SIZE-C",
            map: "https://www.google.com/maps/place/BBOLD.MMXX+TONDANO/@1.3033844,124.9084929,17z/data=!3m1!4b1!4m5!3m4!1s0x328715e2e5de6b81:0x4965ac475ae18d7c!8m2!3d1.3033865!4d124.9106838",
        },
        lanyard: {
            whatsApp:
                "https://api.whatsapp.com/send?phone=+6285756681077&text=ORDER-BBOLD-LANYARD",
            map: "https://www.google.com/maps/place/BBOLD.MMXX+TONDANO/@1.3033844,124.9084929,17z/data=!3m1!4b1!4m5!3m4!1s0x328715e2e5de6b81:0x4965ac475ae18d7c!8m2!3d1.3033865!4d124.9106838",
        },
        pin: {
            whatsApp:
                "https://api.whatsapp.com/send?phone=+6285756681077&text=ORDER-BBOLD-PIN",
            map: "https://www.google.com/maps/place/BBOLD.MMXX+TONDANO/@1.3033844,124.9084929,17z/data=!3m1!4b1!4m5!3m4!1s0x328715e2e5de6b81:0x4965ac475ae18d7c!8m2!3d1.3033865!4d124.9106838",
        },
    };

    const description = {
        b2: (
            <div className="pt-4">
                <div>Harga HomeDecor / Custom Gifts</div>
                <div>Photo, Poster, Quotes</div>
                <div className="text-xl flex-col flex font-lemon text-neutral-100 py-2">
                    <span>Size B2 ( 22.5cm x 30cm )</span>
                    <span>Rp 95.000</span>
                </div>
                <div className="flex flex-col text-xs">
                    <em>- Penambahan tulisan, memakan 🍜 waktu ⏰ 1 - 2 hari</em>
                    <em>- Waktu pekerjaan terhitung setelah design di konfirmasi</em>
                </div>
            </div>
        ),
        b4: (
            <div className="pt-4">
                <div>Harga HomeDecor / Custom Gifts</div>
                <div>Photo, Poster, Quotes</div>
                <div className="text-xl flex-col flex font-lemon text-neutral-100 py-2">
                    <span>Size B4 ( 30cm x 45cm )</span>
                    <span>Rp 190.000</span>
                </div>
                <div className="flex flex-col text-xs">
                    <em>- Penambahan tulisan, memakan 🍜 waktu ⏰ 1 - 2 hari</em>
                    <em>- Waktu pekerjaan terhitung setelah design di konfirmasi</em>
                </div>
            </div>
        ),
        c: (
            <div className="pt-4">
                <div>Harga HomeDecor / Custom Gifts</div>
                <div>Photo, Poster, Quotes</div>
                <div className="text-xl flex-col flex font-lemon text-neutral-100 py-2">
                    <span>Size C1 ( 70cm x 47cm )</span>
                    <span>Rp 370.000</span>
                </div>
                <div className="text-xl flex-col flex font-lemon text-neutral-100 py-2">
                    <span>Size C2 ( 91cm x 42cm )</span>
                    <span>Rp 440.000</span>
                </div>
                {/*<div className="py-4">*/}
                {/*  <div className="text-xl font-lemon text-amber-400">*/}
                {/*    ! order 1pcs size C1 / C2, Gratis 2pcs size B1*/}
                {/*  </div>*/}
                {/*</div>*/}
                <div className="flex flex-col text-xs">
                    <em>- Waktu pekerjaan size C, memakan 🍜 waktu ⏰ 2 - 3 hari</em>
                    <em>- Waktu pekerjaan terhitung setelah design terkonfirmasi</em>
                </div>
            </div>
        ),
        lanyard: (
            <div>
                <div className="py-4">
          <span className="font-lemon  text-neutral-50">
            Lanyard Sablon 2 Sisi (2cm x 85cm)
          </span>

                    <ul>
                        <li>Rp 27.000 1 - 20pcs</li>
                        <li>Rp 25.000 21 - 60pcs</li>
                        <li>Rp 22.000 61 - 150pcs</li>
                        <li>&gt; 150pcs (Nego) 😁</li>
                    </ul>
                </div>
                <div className="py-4">
          <span className="font-lemon text-neutral-50">
            Tali Masker Sablon 2 sisi (2cm x 66cm)
          </span>
                    <ul>
                        <li>Rp 21.000 1 - 20pcs</li>
                        <li>Rp 19.000 21 - 60pcs</li>
                        <li>Rp 16.000 61 - 150pcs</li>
                        <li>&gt; 150pcs (Nego) 😁</li>
                    </ul>
                </div>
                <div className="py-4">
          <span className="font-lemon text-neutral-50">
            ID Card PVC (2 sisi) (5.4cm x 8.5cm)
          </span>
                    <ul>
                        <li>Rp 18.000 1 - 20pcs</li>
                        <li>Rp 17.000 21 - 60pcs</li>
                        <li>Rp 15.000 61 - 150pcs</li>
                        <li>&gt; 150pcs (Nego) 😁</li>
                    </ul>
                </div>
                <div className="py-4">
          <span className="font-lemon text-neutral-50">
            ID Card PVC (1 sisi) (5.4cm x 8.5cm)
          </span>
                    <ul>
                        <li>Rp 15.000 1 - 20pcs</li>
                        <li>Rp 14.000 21 - 600pcs</li>
                        <li>Rp 12.500 61 - 150pcs</li>
                        <li>&gt; 150pcs (Nego) 😁</li>
                    </ul>
                </div>
                <span className="text-xl font-bold text-neutral-50">
          GRATIS DESIGN 🖥️ 🖱️ 😍 😍
        </span>
            </div>
        ),
        pin: (
            <div>
                <div className="py-4">
          <span className="font-lemon  text-neutral-50">
            PIN GANTUNGAN KECIL diameter 44
          </span>
                    <ul>
                        <li>Rp 6.500 1 - 20pcs</li>
                        <li>Rp 6.000 1 - 100pcs</li>
                        <li>Rp 5.000 100pcs - 200pcs</li>
                        <li>&gt; 200pcs (Nego) 😁</li>
                    </ul>
                </div>
                <div className="py-4">
          <span className="font-lemon text-neutral-50">
            PIN PENETI KECIL diameter 44
          </span>
                    <ul>
                        <li>Rp 6.000 1 - 20pcs</li>
                        <li>Rp 5.000 1 - 100pcs</li>
                        <li>Rp 4.000 100pcs - 200pcs</li>
                        <li>&gt; 200pcs (Nego) 😁</li>
                    </ul>
                </div>
                <div className="py-4">
          <span className="font-lemon text-neutral-50">
            PIN PENETI BESAR diameter 58
          </span>
                    <ul>
                        <li>Rp 7.500 1 - 20pcs</li>
                        <li>Rp 6.500 1 - 100pcs</li>
                        <li>Rp 5.500 100pcs - 200pcs</li>
                        <li>&gt; 500pcs (Nego) 😁</li>
                    </ul>
                </div>
                <span className="text-xl font-bold text-neutral-50">
          GRATIS DESIGN 🖥️ 🖱️ 😍 😍
        </span>
            </div>
        ),
    };

    const BboldFooterItem = ({
                                 text,
                                 icon,
                                 onClick,
                                 isHighlight = false,
                                 href,
                             }) => {
        let buttonClassName = isHighlight
            ? "border-2 bg-neutral-900 text-neutral-50 border-neutral-200"
            : "bg-neutral-900 text-neutral-50 ";
        return (
            <a
                href={href}
                target={"_blank"}
                rel="noreferrer"
                className={" my-1  rounded-xl font-lemon p-3 " + buttonClassName}
                onClick={onClick}
            >
                <div className="px-2 flex items-center gap-4">
                    {icon}
                    {text}
                </div>
            </a>
        );
    };

    if (
        typeof links[`${id}`] === "undefined" ||
        typeof pictures[`${id}`] === "undefined"
    ) {
        return (
            <div className="text-neutral-100 text-4xl font-bold bg-blue-50">
                LOADING...
            </div>
        );
    }

    return (
        <div className="h-full w-full bg-stone-700 text-neutral-100 ">
            <_BuildMeta/>

            <div className="w-80 mx-auto py-12 ">
                <img src="/bbold.png" alt="bbold logo"/>
            </div>
            <div className="max-w-2xl mx-auto ">
                <Fade cascade triggerOnce>
                    <div className=" h-[22rem]">
                        <SwiperWrapper>
                            {shuffle(pictures[`${id}`].images).map((e) => {
                                return (
                                    <SwiperSlide
                                        key={e}
                                        style={{
                                            background: `url(${e})`,
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "center",
                                            borderRadius: "2rem",
                                            overflow: "clip",
                                        }}
                                    ></SwiperSlide>
                                );
                            })}
                        </SwiperWrapper>
                    </div>

                    <div
                        className="font-lemon round text-center text-5xl pt-6 pb-3 flex justify-center items-center gap-3">
                        {id.length < 3 && <div className="text-lg font-lemon">size</div>} {id}
                    </div>

                    <div className="px-6 font-poppins text-neutral-300">
                        {description[`${id}`]}
                    </div>

                    <div className="px-6 my-3 flex flex-col">
                        <BboldFooterItem
                            isHighlight
                            icon={
                                <img
                                    src="/logos/logo-wa.svg"
                                    alt="whatsapp icon"
                                    className="w-8"
                                />
                            }
                            href={links[`${id}`].whatsApp}
                            text="pesan"
                        />
                        <BboldFooterItem
                            icon={
                                <img
                                    src="/logos/logo-google-map.svg"
                                    alt="google maps icon"
                                    className="w-8"
                                />
                            }
                            href={links[`${id}`].map}
                            text="Kunjungi"
                        />
                        {typeof links[`${id}`].tokopedia === "undefined" ? null : (
                            <BboldFooterItem
                                icon={
                                    <img
                                        src="/logos/logo-tokopedia.svg"
                                        alt="shopee icon"
                                        className="w-8"
                                    />
                                }
                                href={links[`${id}`].tokopedia}
                                text="pesan"
                            />
                        )}

                        {typeof links[`${id}`].shopee === "undefined" ? null : (
                            <BboldFooterItem
                                icon={
                                    <img
                                        src="/logos/logo-shopee.svg"
                                        alt="shopee icon"
                                        className="w-8"
                                    />
                                }
                                href={links[`${id}`].shopee}
                                text="pesan"
                            />
                        )}
                    </div>

                    <div className="mt-7 w-16 mx-auto">
                        <FooterDefault/>
                    </div>
                    <div className="h-9"></div>
                </Fade>
            </div>

        </div>
    );
}
