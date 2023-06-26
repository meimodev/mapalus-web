/* eslint-disable @next/next/no-img-element */
import Meta from "../../comps/Meta";
import ListItemButton from "../../comps/ListItemButton";
import FooterDefault from "../../comps/FooterDefault";
import {Fade} from "react-awesome-reveal";
import Link from "next/link";

export function _BuildMeta() {
    return (
        <Meta
            title="Trinity Clean & Care"
            description="Trinity clean and care, shoe cleaning and caring"
            color="#000000"
        />
    );
}


export default function TrinityCleanAndCare() {

    // noinspection JSValidateTypes
    const _BuildListItem = ({title, href}) => <div>
        <Link href={href} passHref>
            <button className=" w-full my-3 bg-black text-white ">
                <div className="my-3 xs:py-2 text-center font-bengasi text-lg xs:text-sm ">
                    <p className="text-2xl italic" style={{
                        "letterSpacing": "2px",
                        "WebkitTextFillColor": "transparent",
                        "WebkitTextStroke": "1px",
                    }}>{title.toUpperCase()}</p>
                    {/*<p className="font-light">Fit some description</p>*/}
                </div>
            </button>
        </Link>
    </div>

    const _BuildButton = ({title, icon}) =>
        <div className="border-[0.5px] border-white py-1 px-2 text-xs rounded-sm">
            <div className="flex gap-1 items-center">
                {icon}
                <div>
                    {title}
                </div>
            </div>
        </div>

    // noinspection HtmlUnknownTarget
    return (
        <div className="">


            <_BuildMeta/>

            <Fade cascade triggerOnce>
                <div className="flex flex-col justify-center items-center px-6 max-w-md mx-auto">
                    <main>
                        <div className="flex justify-center items-center">
                            <div className="flex-col text-white ">
                                <div className="mt-6 mb-2 p-2">
                                    <img
                                        src="/itaewon_logo.png"
                                        className="w-full bg-no-repeat bg-cover"
                                        alt="Itaewon x Kland logo"
                                    />
                                </div>

                                <div className="flex gap-3 justify-center">
                                    <_BuildButton title="@instagram" icon={
                                        <i className="lab la-instagram text-white text-xl"></i>
                                    }/>
                                    <_BuildButton title="0812-1234-1234" icon={
                                        <i className="lab la-whatsapp text-white text-xl"></i>
                                    }/>
                                </div>
                                <div className="mx-auto w-1/2 h-0.5 bg-neutral-400 mb-4 mt-2 "></div>

                                <div>
                                    <_BuildListItem title="Fast Clean" href="/trinity-clean-and-care/fast-clean"/>
                                    <_BuildListItem title="Deep Clean" href="/trinity-clean-and-care/deep-clean"/>
                                    <_BuildListItem title="Repaint/Recolor"
                                                    href="/trinity-clean-and-care/repaint-recolor"/>
                                    <_BuildListItem title="Unyellowing" href="/trinity-clean-and-care/unyellowing"/>
                                    <_BuildListItem title="Cap & Wallet" href="/trinity-clean-and-care/cap-wallet"/>
                                    <_BuildListItem title="Bag Care" href="/trinity-clean-and-care/bag-care"/>
                                    <_BuildListItem title="Leather Care" href="/trinity-clean-and-care/leather-care"/>
                                </div>
                            </div>
                        </div>
                    </main>

                    <div className="mt-16">
                        <FooterDefault/>
                    </div>
                </div>
            </Fade>

        </div>
    );
}
