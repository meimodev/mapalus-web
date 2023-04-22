/* eslint-disable @next/next/no-img-element */
import FooterDefault from "../../comps/FooterDefault";
import {Fade} from "react-awesome-reveal";
import Meta from "../../comps/Meta";

export default function Fourever() {

    const _BuildHead = () => <Meta
        title="Fourever Gift | Tondano"
        description="Fourever Gift | Tondano"
        color="#1c1917"
        image={imageUrlList[0]}
    >
        <link
            rel="stylesheet"
            href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Caveat&family=Dancing+Script&family=Mukta&display=swap"
            rel="stylesheet"
        />
    </Meta>
    const primaryFontFamily = {fontFamily: "'Dancing Script', cursive"};
    const secondaryFontFamily = {fontFamily: "'Caveat', cursive"};
    const thirtiaryFontFamily = {fontFamily: "'Mukta', sans-serif"};

    const imageUrlList = [
        "https://i.ibb.co/TgNRZHR/product-1-acrylic-color.png",
        "https://i.ibb.co/8K77NpN/product-2-acrylic-LED.png",
        "https://i.ibb.co/ZJybk8m/product-3-giftbox.png",
        "https://i.ibb.co/S62tff1/product-4-bouquet.png",
        "https://i.ibb.co/zmhKvZK/element-1.png",
        "https://i.ibb.co/G3qgTdh/element-2.png",
        "https://i.ibb.co/Q86MWD8/element-3.png",
        "https://i.ibb.co/BB6T0y2/circle.png",
    ]

    const SideBySideSectionItem = ({price, title, description, imageUrl, decoration}) => {
        return <div className="flex gap-4 relative">
            <img
                src={imageUrl}
                className="h-32 xs:h-52" alt="Image1"/>

            <div className="self-center mr-4 z-10">
                <h4 className="text-3xl font-bold pb-2" style={secondaryFontFamily}>
                    {title}
                </h4>
                <div style={thirtiaryFontFamily} className="text-xs text-slate-400">
                    {description.map(e => <div key={e}>{e}</div>)}
                </div>
                <div className="font-bold py-1">
                    {price}
                </div>
                <div className="py-2 ">
                    <button
                        onClick={(e)=>{
                            e.preventDefault();
                            const waUrl = `https://api.whatsapp.com/send?phone=6287865938722&text=Halo%2C%20Tolong%20info%20pemesanan%20produk%20-%20${title}`;
                            window.open(waUrl,"_blank")
                        }}
                        className="bg-sky-400 text-white text-sm rounded-tl-lg rounded-bl-lg rounded-tr-lg flex py-1 items-center">
                        <div className="px-2">
                            <i className="las la-plus text-lg"></i>
                        </div>
                        <div style={thirtiaryFontFamily} className="pr-3 text-sm ">
                            Pesan
                        </div>
                    </button>
                </div>

            </div>
            {decoration}
        </div>;
    }

    const _ClosingListItem = ({title, icon, link}) => <button
        onClick={e=>{
            e.preventDefault();
            window.open(link, "_blank");
        }}
        className="my-1 flex gap-1 items-center border-[0.5px] rounded-md border-slate-600 px-4 py-2">
        {icon}
        <div className="text-xs">
            {title}
        </div>
    </button>


    return (
        <div className="text-slate-600 pt-12 h-full w-full bg-slate-100 overflow-hidden">
            <_BuildHead/>

            <Fade cascade className="flex flex-col items-center max-w-xl mx-auto">

                <section className="text-6xl pb-6" style={primaryFontFamily}>
                    <h1 className="z-10">Fourever Gift</h1>
                    <img src={imageUrlList[6]} className="h-auto w-28 absolute left-0 top-0" alt="frame"/>
                </section>

                <Fade
                    cascade
                    damping={0.75}
                    triggerOnce
                    className="flex flex-col gap-10 py-6 0 relative">

                    <SideBySideSectionItem
                        imageUrl={imageUrlList[0]}
                        title={"Acrylic Color"}
                        description={[
                            "🌸 Ukuran 6R ( 15cm x 21cm )",
                            "🌸 Sketsa 100% Handmade",
                            "🌸 Bisa Request Sketsa dari foto / tulisan",
                            "🌸 Free Packaging Box Aesthetic + Stiker + Greeting Card",
                            "🌸 Khusus Paket dengan bunga, Gratis bunga hiasan random",
                            "🌸 Khusus Paket Full Flower, Gratis Snack / mini bouqet random",
                            "🌸 Pengerjaan 2-3 Hari",
                        ]}
                        price={"Rp. 120.000"}
                        decoration={
                            <img
                                src={imageUrlList[4]}
                                className="h-auto w-8 absolute -right-4 opacity-50 animate-bounce"
                                alt="frame"/>
                        }
                    />

                    <SideBySideSectionItem
                        imageUrl={imageUrlList[1]}
                        title={"Acrylic LED"}
                        description={[
                            "🌸 Ukuran 6R ( 15cm x 21cm )",
                            "🌸 Stand kayu LED",
                            "🌸 Sketsa 100% Handmade",
                            "🌸 Bisa Request Sketsa dari foto / tulisan",
                            "🌸 Free Packaging Box Aesthetic + Stiker + Greeting Card",
                            "🌸 Khusus Paket dengan bunga, Gratis bunga hiasan random",
                            "🌸 Khusus Paket Full Flower, Gratis Snack / mini bouqet random",
                            "🌸 Pengerjaan 1-3 Hari",
                        ]}
                        price={"Rp. 95.000"}
                        decoration={
                            <img
                                src={imageUrlList[5]}
                                className="h-auto w-20 absolute -right-9 bottom-10 opacity-50 animate-bounce delay-1000"
                                alt="frame"/>
                        }
                    />

                    <SideBySideSectionItem
                        imageUrl={imageUrlList[2]}
                        title={"Giftbox"}
                        description={[
                            "🌸 Bisa custom sesuai keinginan",
                            "🌸 Boleh kunjungi akun @fourevershopp untuk lihat rekomendasi barang yg mau diisi",
                            "🌸 Bisa custom snack",
                            "🌸 Untuk Snack bisa disesuaikan dengan budget",
                            "🌸 Untuk harga sesuai isi dalam box sudah termasuk box dan greeting card",
                        ]}
                        price={""}
                        decoration={
                            <img
                                src={imageUrlList[7]}
                                className="h-auto w-28 absolute right-10 -bottom-10 opacity-50 animate-bounce"
                                alt="frame"/>
                        }
                    />

                    <SideBySideSectionItem
                        imageUrl={imageUrlList[3]}
                        title={"Bunga Bouquet"}
                        description={[
                            "🌸 Ukuran S Rp. 65.000",
                            "🌸 Ukuran M Rp. 115.000",
                            "🌸 Ukuran L Rp. 165.000",
                        ]}
                        price={""}
                        decoration={
                            <img
                                src={imageUrlList[6]}
                                className="h-auto w-28 absolute -right-1 -bottom-10 "
                                alt="frame"/>
                        }
                    />

                </Fade>
                <section>
                    <div
                        className="py-4 from-sky-200/50 via-sky-50 to-transparent bg-gradient-to-b  w-screen flex flex-col justify-center items-center ">
                        <div style={secondaryFontFamily}
                             className="text-4xl pb-3">
                            Fourever Gift
                        </div>
                        <Fade
                            cascade
                            style={thirtiaryFontFamily}
                            className="w-3/4 flex flex-col max-w-xs">

                            <_ClosingListItem
                                title="Wawalitouan, Tondano"
                                icon={<i className="las la-map-marker text-lg"/>}
                                link={"https://goo.gl/maps/YfcPWgMdtHKg3Q8a9"}
                            />
                            <_ClosingListItem
                                title="@fourevershopp"
                                icon={<i className="lab la-instagram text-lg"/>}
                                link={"https://www.instagram.com/fourevershopp/"}
                            />

                            <_ClosingListItem
                                title="Fourever Gift"
                                icon={<i className="lab la-facebook text-lg"/>}
                                link={"https://www.facebook.com/fourever.serbaada"}
                            />

                            <_ClosingListItem
                                title="0878 6593 8722"
                                icon={<i className="lab la-whatsapp text-lg"/>}
                                link={"https://api.whatsapp.com/send/?phone=%2B6287865938722&text&type=phone_number"}
                            />

                        </Fade>
                    </div>
                </section>

                {/*<section className="py-6">*/}
                {/*    <div className="h-40 w-screen bg-blue-100 ">*/}

                {/*        Image divider goes here*/}
                {/*    </div>*/}
                {/*</section>*/}

                <section className="py-6 animate-pulse">
                    <FooterDefault/>
                </section>
            </Fade>
        </div>
    );
}
