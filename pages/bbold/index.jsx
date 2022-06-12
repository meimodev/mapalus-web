/* eslint-disable @next/next/no-img-element */
import FooterDefault from "../../comps/FooterDefault";
import { Fade } from "react-awesome-reveal";
import Meta from "../../comps/Meta";
import { useRouter } from "next/router";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";

export const _BuildMeta = () => {
  return (
    <Meta
      title="BBOLD MMXX Tondano"
      description="Esspecto Coffee menu list"
      color="#1c1917"
      image="/bbold.png"
    />
  );
};

export default function Page() {
  const router = useRouter();

  const SwiperWrapper = ({ children, label, href }) => {
    return (
      <Swiper
        onClick={() => {
          router.push(href);
        }}
        speed={1500}
        pagination={{
          dynamicBullets: false,
          renderBullet: function (index, className) {
            if (index == 0) {
              return `<span class="font-blockLetter text-3xl drop-shadow-lg">${label}</span>`;
            } else return "";
          },
        }}
        autoplay={{
          delay: Math.floor(Math.random() * 20) * 450,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className={"mySwiper h-full w-full"}
      >
        {children}
      </Swiper>
    );
  };

  const data = [
    {
      //part 1
      label: "Size B2",
      href: "/bbold/size-b2",
      images: [
        "https://i.ibb.co/cDDSFxp/b2-part-1-8.jpg",
        "https://i.ibb.co/thHyxg9/b2-part-1-7.jpg",
        "https://i.ibb.co/HzVrFzG/b2-part-1-9.jpg",
        "https://i.ibb.co/gyr64BF/b2-part-1-10.jpg",
        "https://i.ibb.co/gjYy2pR/b2-part-1-11.jpg",
        "https://i.ibb.co/GR4vZJy/b2-part-1-1.jpg",
        "https://i.ibb.co/QHf6q5L/b2-part-1-2.jpg",
        "https://i.ibb.co/9yLzNWf/b2-part-1-3.jpg",
        "https://i.ibb.co/4FwMz4f/b2-part-1-4.jpg",
        "https://i.ibb.co/kctLhc3/b2-part-1-5.jpg",
        "https://i.ibb.co/LJv2btk/b2-part-1-6.jpg",
      ],
    },
    {
      //part 2
      label: "Size B2",
      href: "/bbold/size-b2",
      images: [
        "https://i.ibb.co/JcYy1PF/b2-part-2-17.jpg",
        "https://i.ibb.co/881P48k/b2-part-2-16.jpg",
        "https://i.ibb.co/qNDSJtY/b2-part-2-18.jpg",
        "https://i.ibb.co/7nDhSD2/b2-part-2-19.jpg",
        "https://i.ibb.co/18jv646/b2-part-2-20.jpg",
        "https://i.ibb.co/9td5mKj/b2-part-2-21.jpg",
        "https://i.ibb.co/VScXq11/b2-part-2-12.jpg",
        "https://i.ibb.co/bRZMYkh/b2-part-2-13.jpg",
        "https://i.ibb.co/YjNMbk0/b2-part-2-14.jpg",
        "https://i.ibb.co/b521Bj2/b2-part-2-15.jpg",
      ],
    },
    {
      //part 3
      label: "Size B2",
      href: "/bbold/size-b2",
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
      label: "Size B2",
      href: "/bbold/size-b2",
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
      //last
      label: "Size B2",
      href: "/bbold/size-b2",
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
  ];

  return (
    <div className="h-full w-full bg-stone-700">
      <_BuildMeta />

      <div className="h-full text-stone-100 max-w-lg mx-auto ">
        <main className="">
          <div className="">
            <div className="flex-col ">
              <div className="py-10 px-12 fixed z-50 bg-stone-700 drop-shadow-2xl">
                <img src="/bbold.png" alt="Itaewon x Kland logo" />
              </div>
              <Fade cascade triggerOnce>
                <div className="h-[9.5rem]"></div>
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
              </Fade>
            </div>
          </div>
        </main>

        <Fade cascade triggerOnce>
          <div className="mt-7 w-16 mx-auto">
            <FooterDefault />
          </div>
        </Fade>
      </div>
    </div>
  );
}
