/* eslint-disable @next/next/no-img-element */
import { _BuildMeta } from ".";
import { useRouter } from "next/router";
import { Fade } from "react-awesome-reveal";
import FooterDefault from "../../comps/FooterDefault";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Pages() {
  const router = useRouter();
  const { id } = router.query;

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
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

  const SwiperWrapper = ({ children, className }) => {
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
    b4: {
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
    c: {
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
    lanyard: {
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
    pin: {
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
        <div>Harga HomeDecor / Custom Gifts </div>
        <div>Photo, Poster, Quotes</div>
        <div className="text-xl flex-col flex font-lemon text-neutral-100 py-2">
          <span>Size B2 ( 22.5cm x 30cm )</span>
          <span>Rp 80.000</span>
        </div>
        <div className="flex flex-col text-xs">
          <em>- Penambahan tulisan, memakan 🍜 waktu ⏰ 1 - 2 hari</em>
          <em>- Waktu pekerjaan terhitung setelah design di konfirmasi</em>
        </div>
      </div>
    ),
    b4: (
      <div className="pt-4">
        <div>Harga HomeDecor / Custom Gifts </div>
        <div>Photo, Poster, Quotes</div>
        <div className="text-xl flex-col flex font-lemon text-neutral-100 py-2">
          <span>Size B4 ( 30cm x 45cm )</span>
          <span>Rp 160.000</span>
        </div>
        <div className="flex flex-col text-xs">
          <em>- Penambahan tulisan, memakan 🍜 waktu ⏰ 1 - 2 hari</em>
          <em>- Waktu pekerjaan terhitung setelah design di konfirmasi</em>
        </div>
      </div>
    ),
    c: (
      <div className="pt-4">
        <div>Harga HomeDecor / Custom Gifts </div>
        <div>Photo, Poster, Quotes</div>
        <div className="text-xl flex-col flex font-lemon text-neutral-100 py-2">
          <span>Size C1 ( 70cm x 47cm )</span>
          <span>Rp 330.000</span>
        </div>
        <div className="text-xl flex-col flex font-lemon text-neutral-100 py-2">
          <span>Size C2 ( 91cm x 42cm )</span>
          <span>Rp 390.000</span>
        </div>
        <div className="py-4">
          <div className="text-xl font-lemon text-amber-400">
            ! order 1pcs size C1 / C2, Gratis 2pcs size B1
          </div>
        </div>
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
            <li>&gt; 150pcs (Nego) 😁 </li>
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
            <li>&gt; 150pcs (Nego) 😁 </li>
          </ul>
        </div>
        <div className="py-4">
          <span className="font-lemon text-neutral-50">
            ID Card PVC (2 sisi) (5.4cm x 8.5cm)
          </span>
          <ul>
            <li>Rp 20.000 1 - 20pcs</li>
            <li>Rp 19.000 21 - 600pcs</li>
            <li>Rp 18.000 61 - 150pcs</li>
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
            <li>&gt; 200pcs (Nego) 😁 </li>
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
            <li>&gt; 200pcs (Nego) 😁 </li>
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
    <div className="h-full w-full bg-stone-700 text-neutral-100 font ">
      <_BuildMeta />

      <div className="py-10 px-6">
        <img src="/bbold.png" alt="bbold logo" />
      </div>
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

        <div className="font-lemon round text-center text-5xl pt-6 pb-3">
          {id}
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
          <FooterDefault />
        </div>
        <div className="h-9"></div>
      </Fade>
    </div>
  );
}
