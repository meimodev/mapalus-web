/* eslint-disable @next/next/no-img-element */
import FooterDefault from "../../comps/FooterDefault";
import {Fade} from "react-awesome-reveal";
import Meta from "../../comps/Meta";

export default function Fourever() {

    const _BuildHead = () => <Meta
        title="Fourever Gift | Tondano"
        description="Fourever Gift | Tondano"
        color="#1c1917"
        // image={imageUrlList[0]}
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

    const _ClosingListItem = ({title, icon, link}) => <button
        onClick={e => {
            e.preventDefault();
            window.open(link, "_blank");
        }}
        className="my-1 flex gap-1 items-center border-[0.5px] rounded-md border-slate-600 px-4 py-2">
        {icon}
        <div className="text-xs">
            {title}
        </div>
    </button>

    const primaryFontFamily = {fontFamily: "'Dancing Script', cursive"};
    const secondaryFontFamily = {fontFamily: "'Caveat', cursive"};
    const thirdFontFamily = {fontFamily: "'Mukta', sans-serif"};

    const images = [
        "https://ik.imagekit.io/geb6bfhmhx/fourever/page/1.jpg?updatedAt=1754481074134",
        "https://ik.imagekit.io/geb6bfhmhx/fourever/page/2.jpg?updatedAt=1754481074008",
        "https://ik.imagekit.io/geb6bfhmhx/fourever/page/3.jpg?updatedAt=1754481074036",
        "https://ik.imagekit.io/geb6bfhmhx/fourever/page/4.jpg?updatedAt=1754481073919",
        "https://ik.imagekit.io/geb6bfhmhx/fourever/page/5.jpg?updatedAt=1754481073954",
    ]

    // "https://ik.imagekit.io/geb6bfhmhx/fourever/page/order%20now.png?updatedAt=1754481073179",


    return (
        <div className="text-slate-600 pt-12 h-full w-full bg-slate-100 overflow-hidden">

            <_BuildHead/>

            <div className="flex flex-col items-center max-w-xl mx-auto">

                <section className="text-6xl pb-6" style={primaryFontFamily}>
                    <h1 className="z-10">Fourever Gift</h1>

                </section>

                <section>
                    {images.map((e, index) =>
                        <div key={index} className="relative">
                            <img src={e} alt={"Images " + index}/>
                            {index !== 0  &&
                                <div className={"absolute left-0 bottom-[26%] top-[50%] right-0 w-full "}>
                                    <div className=" h-full flex flex-col  justify-center items-end gap-[60%] pr-[16%]">
                                        <a className="w-[15%]"
                                           target="_blank" rel="noopener noreferrer"
                                           href="https://api.whatsapp.com/send/?phone=%2B6287865938722&text&type=phone_number">
                                            <img src="https://ik.imagekit.io/geb6bfhmhx/fourever/page/order%20now.png?updatedAt=1754481073179" alt="buy"/>
                                        </a>
                                        <a className="w-[15%]"
                                           target="_blank" rel="noopener noreferrer"
                                           href="https://api.whatsapp.com/send/?phone=%2B6287865938722&text&type=phone_number">
                                            <img src="https://ik.imagekit.io/geb6bfhmhx/fourever/page/order%20now.png?updatedAt=1754481073179" alt="buy"/>
                                        </a>
                                    </div>
                                </div>}
                        </div>)}
                </section>

                <section className="w-full">
                    <div
                        className="py-4 flex flex-col justify-center items-center ">
                        <div style={secondaryFontFamily}
                             className="text-4xl pb-3">
                            Fourever Gift
                        </div>
                        <Fade
                            cascade
                            style={thirdFontFamily}
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
                                title="0878-6593-8722"
                                icon={<i className="lab la-whatsapp text-lg"/>}
                                link={"https://api.whatsapp.com/send/?phone=%2B6287865938722&text&type=phone_number"}
                            />

                        </Fade>
                    </div>
                </section>


                <section className="py-6 animate-pulse">
                    <FooterDefault/>
                </section>
            </div>
        </div>
    );
}
