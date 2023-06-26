import {_BuildMeta} from "../pages/itaewon";
import NavBar from "./NavBar";
import ListItem from "./ListItem";
import ListItemHead from "./ListItemHead";
import FooterDefault from "./FooterDefault";
import {Fade} from "react-awesome-reveal";

export default function Page2({
                                  items,
                                  navBarClassName,
                                  headClassName,
                                  itemClassName,
                                  pageClassName,
                                  navBarButtonClassName,
                              }) {
    return (
        <div className={pageClassName}>
            <div className={"h-full"}>
                <_BuildMeta/>

                <Fade duration={400} triggerOnce={true}>
                    <main>
                        <nav>
                            <NavBar navBarClassName={navBarClassName}
                                    backHref="/trinity-clean-and-care"
                                    buttonClassName={navBarButtonClassName}/>
                        </nav>
                        <section className="flex-col mx-6">
                            <div className="py-20">
                                {items.map((e, index) => {
                                    if (e.type === "desc") {
                                        return (
                                            <Fade cascade key={index} triggerOnce={true} delay={100}>
                                                <div className="text-center text-neutral-400 font-mono ">
                                                    {e.value}
                                                </div>
                                            </Fade>
                                        );
                                    }
                                    if (e.type === "item") {
                                        return (
                                            <Fade cascade key={index} triggerOnce={true} delay={100}>
                                                <ListItem
                                                    className={itemClassName}
                                                    name={e.name}
                                                    price={e.price}
                                                    desc={e.desc}
                                                />
                                            </Fade>
                                        );
                                    }
                                    if (e.type === "head") {
                                        return (
                                            <ListItemHead
                                                key={index}
                                                className={"font-bold text-2xl " + headClassName}
                                                title={e.name}
                                            />
                                        );
                                    }
                                    if (e.type === "title") {
                                        return (
                                            <div
                                                key={index}
                                                className="text-gray-100 text-center text-3xl font-bold italic"
                                                style={{
                                                    "letterSpacing":"2px",
                                                    "WebkitTextFillColor": "transparent",
                                                    "WebkitTextStroke": "1px",
                                                }}
                                            >
                                                {e.name}
                                            </div>
                                        );
                                    }
                                    return e.element;
                                })}
                            </div>
                        </section>
                    </main>
                </Fade>
                <div className="flex justify-center ">
                    <FooterDefault/>
                </div>
            </div>
        </div>
    );
};

