import { _BuildMeta } from ".";
import { useRouter } from "next/router";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Pages() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="h-full w-full bg-stone-700 text-neutral-100">
      <_BuildMeta />

      <div className="font-poppins text-5xl">
        THIS IS THE PRODUCT DETAIlL PAGE {id}
      </div>

      <>
        <Swiper
          speed={1000}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper h-[20rem]"
        >
          <SwiperSlide className="bg-blue-700">Slide 1</SwiperSlide>
          <SwiperSlide className="bg-red-700">Slide 2</SwiperSlide>
          <SwiperSlide className="bg-yellow-700">Slide 3</SwiperSlide>
          <SwiperSlide className="bg-green-700">Slide 4</SwiperSlide>
          <SwiperSlide className="bg-pink-700">Slide 5</SwiperSlide>
          <SwiperSlide className="bg-purple-700">Slide 6</SwiperSlide>
        </Swiper>
      </>
    </div>
  );
}
