/* eslint-disable @next/next/no-img-element */
import FooterDefault from "../../comps/FooterDefault";
import {Fade} from "react-awesome-reveal";
import Meta from "../../comps/Meta";

export default function Page() {
    // noinspection HtmlUnknownTarget

    const images = [
        "https://www.dropbox.com/scl/fi/c4jqv2rtkmzxrl5qyyv25/1.jpg?rlkey=lez95rrp2n41ixa6jfyn9fzdq&dl=1",
        "https://www.dropbox.com/scl/fi/ty12l1ly6bvwayzdfl6vy/2.jpg?rlkey=sxczp91o9d2rpgi3cno3ssnay&dl=1",
        "https://www.dropbox.com/scl/fi/7fyy1m314tdtstv6q535s/3.jpg?rlkey=j5wqnef3kcl0bpz95oens8rhv&dl=1",
        "https://www.dropbox.com/scl/fi/e25chxjk5unlmjl71ws5b/4.jpg?rlkey=blwu9o7uu291qwxpcu5m60y56&dl=1",
        "https://www.dropbox.com/scl/fi/dkwgog7kn9ctmzz5c15ul/5.jpg?rlkey=g5fc41ye9zsudlhxc31knwon4&dl=1",
        "https://www.dropbox.com/scl/fi/7os0dmcosotoy6j29e4q9/6.jpg?rlkey=fa9tvki27kui6yyww5lcdzafy&dl=1",
        "https://www.dropbox.com/scl/fi/1ar48b9bpwh7f5kr69x4e/7.jpg?rlkey=r0m3ez32u5ak8vlq5imguxdhz&dl=1",
        "https://www.dropbox.com/scl/fi/ykb7fo29vrtgyg2lvu7nz/8.jpg?rlkey=eargjdkflyfwlwdmd03l1j5e5&dl=1",
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
                    {images.map((e, i) =>
                        <div key={e} className="mb-10">

                            <img alt={"image " + i} src={images[i]}/>
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
