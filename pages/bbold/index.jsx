/* eslint-disable @next/next/no-img-element */
import FooterDefault from "../../comps/FooterDefault";
import {Fade} from "react-awesome-reveal";
import Meta from "../../comps/Meta";
import {useRouter} from "next/router";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination, Navigation} from "swiper";

export const _BuildMeta = () => {
    return (
        <Meta
            title="BBOLD MMXX Tondano | @bbold.mmxx"
            description="ALL PICTURE HAVE GOOD MOMENT TO REMEMBER"
            color="#372f2d"
            image="/bbold.png"
        />
    );
};

export default function Page() {
    const router = useRouter();

    const SwiperWrapper = ({
                               children,
                               label,
                               href,
                               className,
                               speed,
                               delay,
                               labelClassName = " w-12 h-12 ",
                           }) => {
        return (
            <Swiper
                onClick={() => {
                    if (href) {
                        router.push(href);
                    }
                }}
                speed={speed ? speed : 2000}
                pagination={{
                    dynamicBullets: false,
                    renderBullet: function (index, className) {
                        if (index == 0) {
                            return `<div class="bg-[#372f2d] opacity-80 cursor-default rounded-full mr-auto ml-4 text-center flex justify-center items-center ${labelClassName}">
              <span class="font-lemon text-xl drop-shadow-lg">${label}</span></div>`;
                        }
                        return "";
                    },
                }}
                autoplay={{
                    delay: delay ? delay : Math.floor(Math.random() * 10) * 600,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className={"mySwiper h-full w-full cursor-pointer " + className}
            >
                {children}
            </Swiper>
        );
    };

    const data = [
        {
            //part 1
            label: "B2",
            href: "/bbold/b2",
            images: [
                "https://www.dropbox.com/scl/fi/vegj4izvc34lnl5ck49qx/b2_part_1_1.jpg?rlkey=pe7eo6h73b9dvrp9do7ptkwjy&dl=1",
                "https://www.dropbox.com/scl/fi/65g4ywn6crom782us3t1e/b2_part_1_2.jpg?rlkey=3en11ercklau2pid9y7hw2nfw&dl=1",
                "https://www.dropbox.com/scl/fi/syye4v9xri0owl1irle98/b2_part_1_3.jpg?rlkey=nggqtslfzpabd3l0cxsbckugi&dl=1",
                "https://www.dropbox.com/scl/fi/b0v2lk7so128qmxc3auqb/b2_part_1_4.jpg?rlkey=ohb15rd8fnimzwzs49m5qqo6f&dl=1",
                "https://www.dropbox.com/scl/fi/zivdrrm4nznq6qcyztdex/b2_part_1_5.jpg?rlkey=80kcl32j0xkj5wmi1fvsd58rp&dl=1",
                "https://www.dropbox.com/scl/fi/5d13fzf7i13n1spy9do82/b2_part_1_6.jpg?rlkey=dk8edp3r2hp1ka38zmiuqikdb&dl=1",
                "https://www.dropbox.com/scl/fi/wclfzznbt4r4pn3wngvz1/b2_part_1_7.jpg?rlkey=l8l7x2e3abf3s16vyudxwdkju&dl=1",
                "https://www.dropbox.com/scl/fi/ojj1xf9tdi63r5cvwlnwh/b2_part_1_8.jpg?rlkey=lzi60i48wmbdlq9s6q3g5htm5&dl=1",
                "https://www.dropbox.com/scl/fi/svbnzcpb2eurzmr3sgvls/b2_part_1_9.jpg?rlkey=6bnfw0zd8uwq6v8jjbhshg7ux&dl=1",
                "https://www.dropbox.com/scl/fi/syzg1a4ixra28x39mah9r/b2_part_1_10.jpg?rlkey=nhfbx3d9igf6u2b95fmmcgwdu&dl=1",
                "https://www.dropbox.com/scl/fi/keay0d64asg1pfc4sxz51/b2_part_1_11.jpg?rlkey=ffgmkdhwtljo3takd5pwhtw8r&dl=1",
            ],
        },
        {
            //part 2
            label: "B2",
            href: "/bbold/b2",
            images: [
                "https://www.dropbox.com/scl/fi/fumrwmpsbnq3kb6k8swvi/b2_part_2_1.jpg?rlkey=xn65gs28umdg34e6sothaq30t&dl=1",
                "https://www.dropbox.com/scl/fi/wo8slk2w1l1o31bkm4o4o/b2_part_2_2.jpg?rlkey=k4mq8390rrsfcw2g0d2p2a79l&dl=1",
                "https://www.dropbox.com/scl/fi/ifdwhbw6xhv2y0qbmtum5/b2_part_2_3.jpg?rlkey=5kevakoa1nqsbkjhor59dq99a&dl=1",
                "https://www.dropbox.com/scl/fi/ew5v3bftc76glyl2jwmk6/b2_part_2_4.jpg?rlkey=129ode3c96eur668yc9ty651k&dl=1",
                "https://www.dropbox.com/scl/fi/nvwgcufsocmajxzjy9x6o/b2_part_2_5.jpg?rlkey=gid62qvos5bzu76rmpr3gxn7p&dl=1",
                "https://www.dropbox.com/scl/fi/sbsl6nv0zaw6t6f6m7axl/b2_part_2_6.jpg?rlkey=tykpsd98ncrc2fqhxlyifsl9v&dl=1",
                "https://www.dropbox.com/scl/fi/s5rcau3nl408r87mb5o43/b2_part_2_7.jpg?rlkey=n1wrppl7ri7qj8s5mikhzz8om&dl=1",
                "https://www.dropbox.com/scl/fi/yo5p5q5743qo0l2gmgbf1/b2_part_2_8.jpg?rlkey=u4jvdcmoujkvjtizj5nm51y8u&dl=1",
                "https://www.dropbox.com/scl/fi/v925pg903gtluqbiqgxhl/b2_part_2_9.jpg?rlkey=ecjs0kqvbft1w5oufs8mycjp9&dl=1",
                "https://www.dropbox.com/scl/fi/bux17pyho48wla20vpbn8/b2_part_2_10.jpg?rlkey=5gzrv19cgg44qp4jd7612ytnm&dl=1",
            ],
        },
        {
            //part 3
            label: "B2",
            href: "/bbold/b2",
            images: [
                "https://i.ibb.co/GsgzH82/b2-part-3-1.jpg",
                "https://i.ibb.co/kxBsBvX/b2-part-3-3.jpg",
                "https://i.ibb.co/bJ9hkfm/b2-part-3-2.jpg",
                "https://i.ibb.co/qjq2pC3/b2-part-3-4.jpg",
                "https://i.ibb.co/VBD6Gt6/b2-part-3-5.jpg",
                "https://i.ibb.co/hchKPfN/b2-part-3-6.jpg",
                "https://i.ibb.co/82W49sr/b2-part-3-7.jpg",
                "https://i.ibb.co/L1zLmsK/b2-part-3-8.jpg",
                "https://i.ibb.co/PQ0fPyL/b2-part-3-9.jpg",
                "https://i.ibb.co/3dVBxQL/b2-part-3-10.jpg",
            ],
        },

        {
            //part 4
            label: "B2",
            href: "/bbold/b2",
            images: [
                "https://i.ibb.co/FBQHZ6k/b2-part-3-11.jpg",
                "https://i.ibb.co/wJ9q3d8/b2-part-3-12.jpg",
                "https://i.ibb.co/tzqQ0JX/b2-part-3-13.jpg",
                "https://i.ibb.co/kSnh62B/b2-part-3-14.jpg",
                "https://i.ibb.co/54G00PD/b2-part-3-15.jpg",
                "https://i.ibb.co/5M3gpHp/b2-part-3-16.jpg",
                "https://i.ibb.co/8KRKF6B/b2-part-3-17.jpg",
                "https://i.ibb.co/VtCkPwH/b2-part-3-18.jpg",
                "https://i.ibb.co/yQz2tYF/b2-part-3-19.jpg",
                "https://i.ibb.co/YhRGwbk/b2-part-3-20.jpg",
            ],
        },
        {
            //last B2
            label: "B2",
            href: "/bbold/b2",
            images: [
                "https://i.ibb.co/2Z4h17w/25.jpg",
                "https://i.ibb.co/Nn3Q5M4/26.jpg",
                "https://i.ibb.co/NWcsb4r/27.jpg",
                "https://i.ibb.co/Kbqs4Hn/28.jpg",
                "https://i.ibb.co/SxZgySD/29.jpg",
                "https://i.ibb.co/1b4zgdZ/30.jpg",
                "https://i.ibb.co/rp035Xx/22.jpg",
                "https://i.ibb.co/d613rTm/23.jpg",
                "https://i.ibb.co/C5JH7z3/24.jpg",
            ],
        },
        {
            //B4 Part 1
            label: "B4",
            href: "/bbold/b4",
            images: [
                "https://i.ibb.co/VtsSCvF/b4-part-1-4.jpg",
                "https://i.ibb.co/MhwT7w1/b4-part-1-5.jpg",
                "https://i.ibb.co/0rThKvt/b4-part-1-6.jpg",
                "https://i.ibb.co/K0XjTcJ/b4-part-1-7.jpg",
                "https://i.ibb.co/bKFstfZ/b4-part-1-8.jpg",
                "https://i.ibb.co/x8C5sYn/b4-part-1-9.jpg",
                "https://i.ibb.co/bvMBmCH/b4-part-1-10.jpg",
                "https://i.ibb.co/RhMxJ3T/b4-part-1-1.jpg",
                "https://i.ibb.co/47B7CK9/b4-part-1-2.jpg",
                "https://i.ibb.co/3dkHb2N/b4-part-1-3.jpg",
            ],
        },
        {
            //B4 Part 2
            label: "B4",
            href: "/bbold/b4",
            images: [
                "https://i.ibb.co/v1sZMvc/b4-part-2-12.jpg",
                "https://i.ibb.co/0fmKDFw/b4-part-2-13.jpg",
                "https://i.ibb.co/Q96gYsq/b4-part-2-14.jpg",
                "https://i.ibb.co/kcV983C/b4-part-2-15.jpg",
                "https://i.ibb.co/T16HfNH/b4-part-2-1.jpg",
                "https://i.ibb.co/kytfL9V/b4-part-2-2.jpg",
                "https://i.ibb.co/vQRCLKd/b4-part-2-3.jpg",
                "https://i.ibb.co/jV0Q8ST/b4-part-2-4.jpg",
                "https://i.ibb.co/Wvchw0S/b4-part-2-5.jpg",
                "https://i.ibb.co/M925xxv/b4-part-2-6.jpg",
                "https://i.ibb.co/SXB5Lk4/b4-part-2-7.jpg",
                "https://i.ibb.co/ThqTrh5/b4-part-2-8.jpg",
                "https://i.ibb.co/nnJwHN8/b4-part-2-9.jpg",
                "https://i.ibb.co/Xb50rrg/b4-part-2-10.jpg",
                "https://i.ibb.co/zZnkBBV/b4-part-2-11.jpg",
            ],
        },
        {
            //C
            label: "C",
            href: "/bbold/c",
            images: [
                "https://i.ibb.co/Jjps7Kh/C-part-1-11.jpg",
                "https://i.ibb.co/wz0Qjd8/C-part-1-12.jpg",
                "https://i.ibb.co/DgWp0WD/C-part-1-13.jpg",
                "https://i.ibb.co/mCTHNjR/C-part-1-14.jpg",
                "https://i.ibb.co/YBT1CyC/C-part-1-15.jpg",
                "https://i.ibb.co/pjqKxN8/C-part-1-16.jpg",
                "https://i.ibb.co/xSYJpVf/C-part-1-17.jpg",
                "https://i.ibb.co/7pxZXbR/C-part-1-1.jpg",
                "https://i.ibb.co/TLMQkJC/C-part-1-2.jpg",
                "https://i.ibb.co/MhPHbHT/C-part-1-3.jpg",
                "https://i.ibb.co/VLvv3Yc/C-part-1-4.jpg",
                "https://i.ibb.co/5Mkqm7w/C-part-1-5.jpg",
                "https://i.ibb.co/PwVgpd4/C-part-1-6.jpg",
                "https://i.ibb.co/ZKVwCDW/C-part-1-7.jpg",
                "https://i.ibb.co/q7DrtMz/C-part-1-8.jpg",
                "https://i.ibb.co/wKxvCf0/C-part-1-9.jpg",
                "https://i.ibb.co/2cc5g08/C-part-1-10.jpg",
            ],
        },
        {
            //lanyard index 8
            label: "Lanyard",
            href: "/bbold/lanyard",
            images: [
                "https://i.ibb.co/2NH8t3T/Landyard-1-1.jpg",
                "https://i.ibb.co/PYY02qg/Landyard-1-2.jpg",
                "https://i.ibb.co/XS22Wnv/Landyard-1-3.jpg",
                "https://i.ibb.co/VvWHqRF/Landyard-1-4.jpg",
                "https://i.ibb.co/NyRXF0N/Landyard-1-5.jpg",
                "https://i.ibb.co/D856yLw/Landyard-1-6.jpg",
                "https://i.ibb.co/M2bQHSW/Landyard-1-7.jpg",
                "https://i.ibb.co/pwc54QJ/Landyard-1-8.jpg",
            ],
        },
        {
            //Pin index 9
            label: "Pin",
            href: "/bbold/pin",
            images: [
                "https://i.ibb.co/tYHWHDb/Pin-1-16.jpg",
                "https://i.ibb.co/vBk0jny/Pin-1-17.jpg",
                "https://i.ibb.co/FnpN5HX/Pin-1-18.jpg",
                "https://i.ibb.co/gVJSBKY/Pin-1-19.jpg",
                "https://i.ibb.co/hYCWwVS/Pin-1-1.jpg",
                "https://i.ibb.co/Bzz0Bh8/Pin-1-2.jpg",
                "https://i.ibb.co/dKHdmgv/Pin-1-3.jpg",
                "https://i.ibb.co/QfV77W3/Pin-1-4.jpg",
                "https://i.ibb.co/DRDBzDZ/Pin-1-5.jpg",
                "https://i.ibb.co/J5LkSVQ/Pin-1-6.jpg",
                "https://i.ibb.co/Lx3QQnT/Pin-1-7.jpg",
                "https://i.ibb.co/Swsq81z/Pin-1-8.jpg",
                "https://i.ibb.co/1bNFVmv/Pin-1-9.jpg",
            ],
        },
        {
            //Pin index 10
            label: "Pin",
            href: "/bbold/pin",
            images: [
                "https://i.ibb.co/6Dr84Yx/Pin-1-10.jpg",
                "https://i.ibb.co/JR563Z7/Pin-1-11.jpg",
                "https://i.ibb.co/3kGhdrF/Pin-1-12.jpg",
                "https://i.ibb.co/9Y8k7XL/Pin-1-13.jpg",
                "https://i.ibb.co/1RXH84P/Pin-1-14.jpg",
                "https://i.ibb.co/fFfLpX3/Pin-1-15.jpg",
                "https://i.ibb.co/qdSbFn8/Pin-1-20.jpg",
                "https://i.ibb.co/WKDy8Pc/Pin-1-21.jpg",
                "https://i.ibb.co/6FZKfgr/Pin-1-22.jpg",
                "https://i.ibb.co/LYxVp6r/Pin-1-23.jpg",
                "https://i.ibb.co/9ts4RLk/Pin-1-24.jpg",
                "https://i.ibb.co/ph8KS0f/Pin-1-25.jpg",
                "https://i.ibb.co/pLcHcsK/Pin-1-26.jpg",
                "https://i.ibb.co/C2qkpfG/Pin-1-27.jpg",
            ],
        },
    ];

    const availablePictures = {
        label: "BBOLD",
        href: "",
        images: [
            "https://i.ibb.co/C1Kp1Kf/order-1-1.jpg",
            "https://i.ibb.co/S6cZHms/order-1-2.jpg",
            "https://i.ibb.co/W3Xgy30/order-1-3.jpg",
            "https://i.ibb.co/ZdkvMVS/order-1-4.jpg",
            // "https://i.ibb.co/ydJcw4g/order-1-5.jpg",
            // "https://i.ibb.co/8cLn2TV/order-1-6.jpg",
        ],
    };

    return (
        <div className="h-full w-full bg-stone-700">
            <_BuildMeta/>

            <div className="h-full text-stone-100 max-w-lg mx-auto ">
                <main className="">
                    <div className="">
                        <div className="flex-col ">
                            <div className="pt-10 px-6">
                                <img src="/bbold.png" alt="bbold logo"/>
                            </div>

                            <Fade cascade triggerOnce>
                                <div className="h-[2rem]"></div>

                                {/* Pin */}
                                <div className="flex h-[13rem]">
                                    <SwiperWrapper href={data[9].href} label={data[9].label}>
                                        {data[9].images.map((e) => {
                                            return (
                                                <SwiperSlide
                                                    key={e}
                                                    style={{
                                                        background: `url(${e})`,
                                                        backgroundSize: "cover",
                                                    }}
                                                ></SwiperSlide>
                                            );
                                        })}
                                    </SwiperWrapper>

                                    <SwiperWrapper href={data[10].href} label={data[10].label}>
                                        {data[10].images.map((e) => {
                                            return (
                                                <SwiperSlide
                                                    key={e}
                                                    style={{
                                                        background: `url(${e})`,
                                                        backgroundSize: "cover",
                                                    }}
                                                ></SwiperSlide>
                                            );
                                        })}
                                    </SwiperWrapper>
                                </div>

                                {/* Lanyard */}
                                <div className="flex h-[22rem]">
                                    <SwiperWrapper
                                        href={data[8].href}
                                        label={data[8].label}
                                        labelClassName="w-[10rem] h-12"
                                    >
                                        {data[8].images.map((e) => {
                                            return (
                                                <SwiperSlide
                                                    key={e}
                                                    style={{
                                                        background: `url(${e})`,
                                                        backgroundSize: "contain",
                                                        backgroundRepeat: "no-repeat",
                                                        backgroundPosition: "center",
                                                    }}
                                                ></SwiperSlide>
                                            );
                                        })}
                                    </SwiperWrapper>
                                </div>

                                <div className="flex h-[13rem]">
                                    <SwiperWrapper href={data[0].href} label={data[0].label}>
                                        {data[0].images.map((e) => {
                                            return (
                                                <SwiperSlide
                                                    key={e}
                                                    style={{
                                                        background: `url(${e})`,
                                                        backgroundSize: "cover",
                                                    }}
                                                ></SwiperSlide>
                                            );
                                        })}
                                    </SwiperWrapper>

                                    <SwiperWrapper href={data[6].href} label={data[6].label}>
                                        {data[6].images.map((e) => {
                                            return (
                                                <SwiperSlide
                                                    key={e}
                                                    style={{
                                                        background: `url(${e})`,
                                                        backgroundSize: "cover",
                                                    }}
                                                ></SwiperSlide>
                                            );
                                        })}
                                    </SwiperWrapper>
                                </div>
                                <div className="flex h-[22rem]">
                                    <SwiperWrapper href={data[7].href} label={data[7].label}>
                                        {data[7].images.map((e) => {
                                            return (
                                                <SwiperSlide
                                                    key={e}
                                                    style={{
                                                        background: `url(${e})`,
                                                        backgroundSize: "contain",
                                                        backgroundRepeat: "no-repeat",
                                                        backgroundPosition: "center",
                                                    }}
                                                ></SwiperSlide>
                                            );
                                        })}
                                    </SwiperWrapper>
                                </div>

                                <div className="flex h-[13rem]">
                                    <SwiperWrapper href={data[2].href} label={data[2].label}>
                                        {data[2].images.map((e) => {
                                            return (
                                                <SwiperSlide
                                                    key={e}
                                                    style={{
                                                        background: `url(${e})`,
                                                        backgroundSize: "cover",
                                                    }}
                                                ></SwiperSlide>
                                            );
                                        })}
                                    </SwiperWrapper>

                                    <SwiperWrapper href={data[3].href} label={data[3].label}>
                                        {data[3].images.map((e) => {
                                            return (
                                                <SwiperSlide
                                                    key={e}
                                                    style={{
                                                        background: `url(${e})`,
                                                        backgroundSize: "cover",
                                                    }}
                                                ></SwiperSlide>
                                            );
                                        })}
                                    </SwiperWrapper>
                                </div>

                                <div className="flex h-[22rem]">
                                    <SwiperWrapper href={data[4].href} label={data[4].label}>
                                        {data[4].images.map((e) => {
                                            return (
                                                <SwiperSlide
                                                    key={e}
                                                    style={{
                                                        background: `url(${e})`,
                                                        backgroundSize: "cover",
                                                    }}
                                                ></SwiperSlide>
                                            );
                                        })}
                                    </SwiperWrapper>
                                </div>

                                <div className="flex h-[13rem]">
                                    <SwiperWrapper href={data[5].href} label={data[5].label}>
                                        {data[5].images.map((e) => {
                                            return (
                                                <SwiperSlide
                                                    key={e}
                                                    style={{
                                                        background: `url(${e})`,
                                                        backgroundSize: "cover",
                                                    }}
                                                ></SwiperSlide>
                                            );
                                        })}
                                    </SwiperWrapper>

                                    <SwiperWrapper href={data[1].href} label={data[1].label}>
                                        {data[1].images.map((e) => {
                                            return (
                                                <SwiperSlide
                                                    key={e}
                                                    style={{
                                                        background: `url(${e})`,
                                                        backgroundSize: "cover",
                                                    }}
                                                ></SwiperSlide>
                                            );
                                        })}
                                    </SwiperWrapper>
                                </div>

                                {/* Availability  */}
                                <div className="flex h-screen px-2">
                                    <SwiperWrapper
                                        href={availablePictures.href}
                                        label={availablePictures.label}
                                        speed={2000}
                                        delay={1000}
                                        labelClassName="w-[7rem] h-12"
                                    >
                                        {availablePictures.images.map((e) => {
                                            return (
                                                <SwiperSlide
                                                    key={e}
                                                    style={{
                                                        background: `url(${e})`,
                                                        backgroundSize: "contain",
                                                        backgroundRepeat: "no-repeat",
                                                        backgroundPosition: "center",
                                                    }}
                                                ></SwiperSlide>
                                            );
                                        })}
                                    </SwiperWrapper>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </main>

                <Fade cascade triggerOnce>
                    <div className="mt-7 w-16 mx-auto">
                        <FooterDefault/>
                    </div>
                </Fade>
            </div>
        </div>
    );
}
