/* eslint-disable @next/next/no-img-element */
import { _BuildMeta } from ".";
import { useRouter } from "next/router";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Pages() {
  const router = useRouter();
  const { id } = router.query;

  const SwiperWrapper = ({ children, className }) => {
    return (
      <Swiper
        speed={3000}
        pagination={{
          dynamicBullets: true,
        }}
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

  const pictures = [
    {
      //part 1
      label: "B2",
      href: "/bbold/b2",
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
  ];

  const links = {
    b2: {
      whatsApp:
        "https://api.whatsapp.com/send?phone=85756681077&text=ORDER-BBOLD-B2",
      map: "https://www.google.com/maps/place/BBOLD.MMXX+TONDANO/@1.3033844,124.9084929,17z/data=!3m1!4b1!4m5!3m4!1s0x328715e2e5de6b81:0x4965ac475ae18d7c!8m2!3d1.3033865!4d124.9106838",
      tokopedia:
        "https://www.tokopedia.com/bbold/bbold-dekorasi-dinding-size-b2-22-5cm-x-30cm-x-2cm",
      shopee:
        "https://shopee.co.id/BBOLD-Dekorasi-Dinding-Size-B2-(30cm-x-22.5cm-x-2cm)-i.14752641.3385608954?sp_atk=2726d202-be04-42dd-b01b-3767a6f015cf&xptdk=2726d202-be04-42dd-b01b-3767a6f015cf",
    },
    b4: {
      whatsApp:
        "https://api.whatsapp.com/send?phone=85756681077&text=ORDER-BBOLD-B4",
      map: "https://www.google.com/maps/place/BBOLD.MMXX+TONDANO/@1.3033844,124.9084929,17z/data=!3m1!4b1!4m5!3m4!1s0x328715e2e5de6b81:0x4965ac475ae18d7c!8m2!3d1.3033865!4d124.9106838",
      tokopedia:
        "https://www.tokopedia.com/bbold/bbold-dekorasi-dinding-size-b4-30cm-x-45cm-x-2cm-photo-tulisan",
      shopee:
        "https://shopee.co.id/BBOLD-I-Dekorasi-Dinding-Size-B4-(45cm-x-30cm-x-2cm)-PHOTO-ONLY-i.14752641.8667438025?sp_atk=3429f840-16e3-46c3-ad22-1914f6b99ae8&xptdk=3429f840-16e3-46c3-ad22-1914f6b99ae8",
    },
    c1: {
      whatsApp:
        "https://api.whatsapp.com/send?phone=85756681077&text=ORDER-BBOLD-B2",
      map: "https://www.google.com/maps/place/BBOLD.MMXX+TONDANO/@1.3033844,124.9084929,17z/data=!3m1!4b1!4m5!3m4!1s0x328715e2e5de6b81:0x4965ac475ae18d7c!8m2!3d1.3033865!4d124.9106838",
    },
    lanyard: {
      whatsApp:
        "https://api.whatsapp.com/send?phone=85756681077&text=ORDER-BBOLD-LANYARD",
      map: "https://www.google.com/maps/place/BBOLD.MMXX+TONDANO/@1.3033844,124.9084929,17z/data=!3m1!4b1!4m5!3m4!1s0x328715e2e5de6b81:0x4965ac475ae18d7c!8m2!3d1.3033865!4d124.9106838",
    },
    pin: {
      whatsApp:
        "https://api.whatsapp.com/send?phone=85756681077&text=ORDER-BBOLD-PIN",
      map: "https://www.google.com/maps/place/BBOLD.MMXX+TONDANO/@1.3033844,124.9084929,17z/data=!3m1!4b1!4m5!3m4!1s0x328715e2e5de6b81:0x4965ac475ae18d7c!8m2!3d1.3033865!4d124.9106838",
    },
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

  if (typeof links[`${id}`] === "undefined") {
    console.log(links[`${id}`]);
    return (
      <div className="text-neutral-100 text-4xl font-bold bg-blue-50">
        UNDEFINED
      </div>
    );
  }

  return (
    <div className="h-full w-full bg-stone-700 text-neutral-100 font ">
      <_BuildMeta />

      {console.log()}
      <div className="py-10 px-6">
        <img src="/bbold.png" alt="bbold logo" />
      </div>
      <div className=" h-[22rem]">
        <SwiperWrapper>
          {pictures[0].images.map((e) => {
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
      <div className="font-lemon round text-center text-5xl pt-6 pb-3">
        {id}
      </div>
      <div className="px-6 font-poppins text-neutral-300">
        <div>Harga Home Decor / Custom Gifts</div>
        <div>Photo, Poster, Quotes</div>

        <div className="font-lemon py-4 text-neutral-50">
          <div className="">Size B2 (22.5cm x 30cm) </div>
          <div className="text-xl">Rp. 80.000</div>
        </div>
        <div>
          Pekerjaan photo tambahan tulisan, memakan 🍜 waktu ⏰ 1-2 hari.
        </div>

        <div className="my-3 flex flex-col">
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
        <div className="h-9"></div>
      </div>
    </div>
  );
}
