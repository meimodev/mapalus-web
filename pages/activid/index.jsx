/* eslint-disable @next/next/no-img-element */
import FooterDefault from "../../comps/FooterDefault";
import {Fade} from "react-awesome-reveal";
import Meta from "../../comps/Meta";

export default function Page() {
    // noinspection HtmlUnknownTarget

    const images = [
        "https://i.ibb.co/bmHfFQF/2.jpg",
        "https://i.ibb.co/mqdnp2R/3.jpg",
        "https://i.ibb.co/jJ72Vgv/4.jpg",
        "https://i.ibb.co/hLV72D3/5.jpg",
        "https://i.ibb.co/fSz6JFf/6.jpg",
        "https://i.ibb.co/z6tWVyL/7.jpg",
        "https://i.ibb.co/RDxF9hJ/8.jpg",
    ];

    return (
        <div className="bg-[#ede4d7] text-red-600 px-6 py-6">
            <Meta
                title="Activid - BPPD Minahasa"
                description="Activid partership agreement with Badan Promosi Pariwisata Daerah kabupaten Minahasa"
                color="#ede4d7"
                image="/mapalus.svg"
            />

            <div className="max-w-lg mx-auto px-6 py-6">
                <div className="text-center text-xl text-stone-400 pb-3 font-thin">
                    Activid
                </div>
                <Fade cascade triggerOnce>
                    {images.map((e,i)=>
                        <div key={e} className="mb-10">

                        <img  alt="image" src={images[i]} />
                        </div>
                    )}
                </Fade>
                <div className="mx-auto w-[3rem] mt-10 mb-14">

                <FooterDefault/>

                </div>
            </div>
        </div>
    );
}
