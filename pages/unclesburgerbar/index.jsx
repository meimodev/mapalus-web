/* eslint-disable @next/next/no-img-element */
import FooterDefault from "../../comps/FooterDefault";
import {Fade} from "react-awesome-reveal";
import Meta from "../../comps/Meta";

export default function Page() {
    // noinspection HtmlUnknownTarget

    const _buildListItem = ({title, desc, price, ltr = false}) => {
        const priceElement = <div className="bg-red-700 text-white w-8 text-center p-1 rounded-full">
            <div className="flex justify-center">
                <span className="font-bold"> {price} </span>
                <span className=" text-[9px]">K</span>
            </div>
        </div>;

        return (
            <div className="flex items-start gap-4 uppercase py-3">
                {ltr ? priceElement : null}
                <div className="flex-1 text-center flex flex-col">
                    <div className="text-xl font-black">
                        {title}
                    </div>
                    <div className="text-xs font-bold font-mono ">
                        {desc}
                    </div>
                </div>
                {ltr ? null : priceElement}

            </div>
        );
    };

    const _buildTitleSection = ({title}) => <div
        className="uppercase text-center border-2 border-red-700 font-bold text-2xl p-2 rounded-xl w-36 mx-auto my-8 font-mono">
        {title}
    </div>;

    return (
        <div className="bg-stone-200 text-red-600 px-6 py-6">
            <Meta
                title="Uncles BurgerBar | Manado"
                description="Uncles BurgerBar menu list"
                color="#1c1917"
                image="/mapalus.svg"
            />

            <div className="max-w-lg mx-auto border-4 border-red-700 px-6 py-6">
                <Fade cascade triggerOnce>
                    <section>
                        <div className="text-center pt-6 pb-6 text-4xl font-bold tracking-widest">

                            UNCLE&apos;S BURGERBAR
                        </div>
                    </section>

                    <section>
                        <_buildTitleSection title="Burger's & Fries"/>
                    </section>

                    <section>

                        <_buildListItem
                            title={"CHI-Z"}
                            price={"40"}
                            desc={
                                <div>
                                    <div>(Cheese Burger)</div>
                                    <div>Beef Patty, Smoked Cheddar</div>
                                    <div>Aioli Mayo</div>
                                </div>
                            }
                        />
                        <_buildListItem
                            title={"CAN I CHICK IT"}
                            price={"35"}
                            desc={
                                <div>
                                    <div>spicy miso mayo</div>
                                    <div>soy marinated chicked</div>
                                    <div>mozzarella</div>
                                </div>
                            }
                        />

                        <_buildListItem
                            title={"FISHY D"}
                            price={"35"}
                            desc={
                                <div>
                                    <div>Tartar sauce</div>
                                    <div>deep fried local fish</div>
                                    <div>cheddar chesse</div>
                                </div>
                            }
                        />

                        <_buildListItem
                            title={"FRIES"}
                            price={"20"}
                        />

                        <_buildListItem
                            title={"UNCLES FRIES"}
                            price={"25"}
                        />

                    </section>
                    <_buildTitleSection title="Premium"/>
                    <section>

                        <_buildListItem
                            title={"LAMB OF GOD"}
                            price={"65"}
                            ltr={true}
                            desc={
                                <div>
                                    <div>
                                        Lamb patty
                                    </div>
                                    <div>
                                        Roasted Eggplant Pickle
                                    </div>
                                    <div>
                                        CUMIN Aioli
                                    </div>


                                </div>
                            }
                        />
                        <_buildListItem
                            title={"NAUGHTY BY TRUFFLE"}
                            price={"75"}
                            ltr={true}
                            desc={
                                <div>
                                    <div>Truffle aioli</div>
                                    <div>beef patty, beef belly bacon</div>
                                    {/*<div>sautee mushroom</div>*/}
                                </div>
                            }
                        />

                        <_buildListItem
                            title={"TWO PAC 85k"}
                            price={"85"}
                            ltr={true}
                            desc={
                                <div>
                                    <div>Two Stack, Beef Patty</div>
                                    <div>BBQ mayo, Jalapeno</div>
                                    <div>Pickled shallot</div>
                                </div>
                            }
                        />

                        <_buildListItem
                            title={"Mineral Water"}
                            price={"5"}
                            ltr={true}
                        />

                        <_buildListItem
                            title={"Soft Drink"}
                            price={"10"}
                            ltr={true}
                        />


                        <_buildListItem
                            title={"Beer"}
                            price={"30"}
                            ltr={true}
                        />


                    </section>
                    <section className="">
                        <div className="pt-14 mt-4 pb-10 w-10 mx-auto ">
                            <FooterDefault/>
                        </div>
                    </section>

                </Fade>
            </div>
        </div>
    );
}
