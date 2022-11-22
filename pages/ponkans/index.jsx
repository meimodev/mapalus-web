/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */
import ListItemButton from "../../comps/ListItemButton";
import FooterDefault from "../../comps/FooterDefault";
import { Fade } from "react-awesome-reveal";
import Meta from "../../comps/Meta";
import CollapsibleDiv from "../../comps/CollapsibleDiv";
import PromoBubble from "../../comps/PromoBubble";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
// import "swiper/css";

export default function Page() {
  // noinspection HtmlUnknownTarget

  const _buildListItem = ({ item, price }) => {
    if (price) {
      return (
        <div
          className="flex justify-between text-xl gap-6 uppercase"
          style={fontFamilySecondary}
        >
          <div>{item}</div>
          <div className="text-gray-500 font-bold">{price}K</div>
        </div>
      );
    }
    return (
      <div
        className="text-md text-white bg-green-700 rounded-xl text-center mt-2 "
        style={fontFamilySecondary}
      >
        <div className="px-2 py-1">{item}</div>
      </div>
    );
  };

  const fontFamilyPrimary = { fontFamily: "Great Vibes, cursive" };
  const fontFamilySecondary = { fontFamily: "Barlow Condensed, sans-serif" };

  const itemsList = [
    {
      title: "Paket Tuna",
      children: [
        { title: "Dada Tuna", price: "35" },
        { title: "Dada Tuna Kuah Asam", price: "35" },
        { title: "Tuna Woku", price: "35" },
        { title: "Tuna Bumbu RW", price: "35" },
        { title: "Rahang Tuna M", price: "40" },
        { title: "Rahang Tuna L", price: "50" },
        { title: "Rahang Tuna XL", price: "60" },
        { title: "Paket sudah termasuk nasi + sayur", price: "" },
      ],
    },
    {
      title: "Paket Danau",
      children: [
        { title: "Mujair Goreng (M)", price: "35" },
        { title: "Mujair Goreng (L)", price: "40" },
        { title: "Payangka Goreng", price: "30" },
        { title: "Mujair Kuah Asam", price: "35" },
        { title: "Paket sudah termasuk nasi + sayur", price: "" },
      ],
    },
    {
      title: "Nasi",
      children: [
        { title: "Nasi Ayam Lalapan", price: "30" },
        { title: "Nasi goreng Roa", price: "25" },
        { title: "Nasi goreng Cakalang", price: "25" },
        { title: "Nasi goreng Kampung", price: "25" },
        { title: "Nasi Cap Cay Ayam", price: "30" },
        { title: "Nasi Ikan Garam Santan", price: "25" },
      ],
    },
    {
      title: "Mie",
      children: [
        { title: "Mie Gedi Ponkans", price: "25" },
        { title: "Mie Brenebon Cakalang", price: "20" },
        { title: "Mie Kuah Cakalang", price: "20" },
        { title: "Mie Goreng Cakalang", price: "23" },
        { title: "Tamie", price: "32" },
        { title: "Indomie Soto", price: "12" },
        { title: "Indomie Goreng", price: "12" },
      ],
    },
    {
      title: "Juice & Smoothies",
      children: [
        { title: "Jus Nanas", price: "18" },
        { title: "Jus Sirsak", price: "18" },
        { title: "Jus Alpukat", price: "20" },
        { title: "Smoothies Buah Naga", price: "20" },
        { title: "Smoothies Sirsak", price: "20" },
        { title: "Smoothies Peanut Banana", price: "21" },
        { title: "Mango Smoothie", price: "20" },
      ],
    },
    {
      title: "Paket Cakalang",
      children: [
        { title: "Cakalang Kuah Gedi", price: "30" },
        { title: "Cakalang Suwir", price: "30" },
        { title: "Cakalang Brenebon", price: "30" },
        { title: "Paket sudah termasuk nasi + sayur", price: "" },
      ],
    },
    {
      title: "Add On",
      children: [
        { title: "Telur Rebus", price: "8" },
        { title: "Telur Dadar", price: "10" },
        { title: "Nike GOreng", price: "35" },
        { title: "Tahu GOreng", price: "3" },
        { title: "Ubi Rebus", price: "12" },
        { title: "Rica bakar ijo", price: "10" },
        { title: "Rica sous", price: "10" },
        { title: "Kacang Goreng", price: "10" },
        { title: "Kuah Gedi", price: "15" },
        { title: "Kuah brenebon Cakalang", price: "15" },
      ],
    },
    {
      title: "Snacks",
      children: [
        { title: "Pisang Goroho Crispy", price: "17" },
        { title: "Pisang Stik", price: "17" },
        { title: "Pisang Raja Goreng", price: "17" },
        { title: "Pisang Goroho Gula Merah", price: "22" },
        { title: "Pisang Kipas Goreng", price: "20" },
        { title: "Pisang Kipas Putus-putus", price: "20" },
        { title: "Pisang Ijo", price: "15" },
        { title: "Paket Ubi Goreng", price: "17" },
        { title: "Ubi Goreng Gula Merah", price: "22" },
        { title: "Ubi Manis Stik", price: "20" },
        { title: "Paket binolos", price: "20" },
        { title: "Getuk Ponkan's", price: "18" },
        { title: "Paket Onde-onde ubi ungu", price: "15" },
        { title: "Paket Onde-onde", price: "15" },
        { title: "Paket Ongol-ongol", price: "20" },
        { title: "Sagu Bakar Gula Merah", price: "17" },
        { title: "Sagu Bakar Keju", price: "21" },
        { title: "Sagu Bakar Keju Coklat", price: "23" },
        { title: "Roti Bakar Keju Coklat", price: "20" },
        { title: "Roti Bakar Keju", price: "17" },
        { title: "Roti Bakar Coklat", price: "15" },
        { title: "Roti Bakar Selai Nanas", price: "17" },
        { title: "Gohu", price: "13" },
        { title: "Tinutuan", price: "15" },
        { title: "Miedal", price: "15" },
        { title: "Paket Tahu Crispy", price: "17" },
      ],
    },
    {
      title: "Hot Drinks",
      children: [
        { title: "Kopi Hitam", price: "10" },
        { title: "Kopi Hitam Gula Merah", price: "15" },
        { title: "Kopi Susu", price: "12" },
        { title: "Kopi Susu Gula Merah", price: "18" },
        { title: "Caffee de ole", price: "21" },
        { title: "Cappucino", price: "15" },
        { title: "Teh Panas", price: "8" },
        { title: "Teh Susu", price: "10" },
        { title: "Teh Tarik", price: "15" },
        { title: "Teh Hijau", price: "15" },
        { title: "Teh Rosella", price: "15" },
        { title: "Matcha Latte", price: "17" },
        { title: "Milo Panas", price: "17" },
        { title: "Nutrisari Panas", price: "7" },
        { title: "Jeruk Nipis Panas", price: "15" },
        { title: "Jeruk Peras Panas", price: "20" },
        { title: "Lemon Ikan Panas", price: "15" },
        { title: "Saraba Panas", price: "15" },
        { title: "Lemon Grass Tea Panas", price: "15" },
        { title: "Air Mineral", price: "6" },
      ],
    },
    {
      title: "Cold Drinks",
      children: [
        { title: "Es Brenebon Ponkan's", price: "23" },
        { title: "Es Brenebon Alpukat", price: "25" },
        { title: "Es Brenebon Alpukat Durian", price: "35" },
        { title: "Es Kacang Ponkan's", price: "23" },
        { title: "Es Kacang Alpukat", price: "25" },
        { title: "Es Kacang Alpukat Durian", price: "35" },
        { title: "Es Buah Ponkan's", price: "23" },
        { title: "Es Pisang Ijo", price: "20" },
        { title: "Es Tea Leci", price: "15" },
        { title: "Es Lemon Tea", price: "15" },
        { title: "Es Batu", price: "1" },
      ],
    },
  ];

  return (
    <div className="bg-green-50">
      <Meta
        title="Ponkans Cafe | Tondano"
        description="Daftar Menu Ponkans Cafe Tondano"
        color="##f8fafc"
        image="/logos/logo-ponkans.png"
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </Meta>

      <Fade triggerOnce>
        <div className="flex flex-col justify-center items-center text-green-700 max-w-lg mx-auto">
          <main className="flex-grow ">
            <div className="flex justify-center items-center">
              <div className="flex-col px-12 ">
                <div className="pb-8 pt-4 text-center font-poppins">
                  <img
                    src="/logos/logo-ponkans.png"
                    alt="ponkans logo"
                    className="drop-shadow-2xl pb-4"
                  />

                  <p className="text-sm pb-2 italic">
                    &quot; Life is beautiful, do only good things &quot;
                  </p>
                  <h4 className=" text-xl">09:00 AM - 09:00 PM</h4>
                </div>

                {itemsList.map((e, i) => (
                  <CollapsibleDiv
                    key={e.title + i}
                    isActive={true}
                    cascade={false}
                    title={
                      <div className="text-4xl" style={fontFamilyPrimary}>
                        {e.title}
                      </div>
                    }
                  >
                    {e.children.map((e, i) => (
                      <_buildListItem
                        key={e.title + i}
                        item={e.title}
                        price={e.price}
                      />
                    ))}
                  </CollapsibleDiv>
                ))}
              </div>
            </div>
          </main>

          <div className="pt-20 mt-4 pb-24">
            <FooterDefault />
          </div>
        </div>
      </Fade>

      {/* <div className="fixed right-4 bottom-4">
        <div className="flex gap-4">
          <PromoBubble
            onClick={() => {
              console.log("clicked");
            }}
            text="Promo"
          />
          <PromoBubble />
        </div>
      </div> */}

      {/* <div className="fixed top-0 bottom-0 left-0 right-0 z-20">
        <div className="bg-blue-200 ">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="bg-red-400"
          >
            <SwiperSlide className="w-36 h-36 bg-slate-400">
              Slide 1
            </SwiperSlide>
            <SwiperSlide className="w-36 h-36 bg-blue-400">Slide 2</SwiperSlide>
            <SwiperSlide className="w-36 h-36 bg-red-400">Slide 3</SwiperSlide>
            <SwiperSlide className="w-36 h-36 bg-yellow-400">
              Slide 4
            </SwiperSlide>
          </Swiper>
        </div>
      </div> */}
    </div>
  );
}
