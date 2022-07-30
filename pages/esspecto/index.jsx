/* eslint-disable @next/next/no-img-element */
import ListItemButton from "../../comps/ListItemButton";
import FooterDefault from "../../comps/FooterDefault";
import { Fade } from "react-awesome-reveal";
import Meta from "../../comps/Meta";
import CollapsibleDiv from "../../comps/CollapsibleDiv";

export default function Page() {
  // noinspection HtmlUnknownTarget

  const _buildListItem = ({ item, price }) => {
    return (
      <div className="flex justify-between text-xl font-american gap-6">
        <div>{item}</div>
        <div className="text-amber-400 font-american ">{price}</div>
      </div>
    );
  };
  return (
    <div className="bg-[#372f2d]">
      <Meta
        title="Esspecto Coffee"
        description="Esspecto Coffee menu list"
        color="#1c1917"
        image="/esspecto-hori.png"
      />

      <Fade cascade triggerOnce>
        <div className="h-full  flex flex-col justify-center items-center  text-stone-100 max-w-lg mx-auto">
          <main className="flex-grow ">
            <div className="flex justify-center items-center">
              <div className="flex-col ">
                <div className="pt-12 px-12 pb-8 bg-neutral-100 ">
                  <img
                    src="/esspecto-hori.png"
                    alt="Esspecto coffee logo"
                    className="drop-shadow-2xl"
                  />
                </div>

                <div className="flex flex-col px-6 pt-6">
                  <CollapsibleDiv
                    isActive={true}
                    paddingBottom
                    title={
                      <div className="font-blockLetter uppercase text-6xl text-amber-400">
                        COFFEE
                      </div>
                    }
                  >
                    <div>
                      <CollapsibleDiv
                        isActive={false}
                        title={
                          <div className="font-american uppercase text-2xl font-bold text-amber-400 opacity-90">
                            black
                          </div>
                        }
                      >
                        <_buildListItem item="Espresso" price="15 / - - -" />
                        <_buildListItem item="Americano" price="18 / 18" />
                        <_buildListItem
                          item="Espresso On The Rock"
                          price=" - - - / 18"
                        />
                      </CollapsibleDiv>

                      <CollapsibleDiv
                        isActive={false}
                        title={
                          <div className="font-american uppercase text-2xl font-bold text-amber-400 opacity-90">
                            White
                          </div>
                        }
                      >
                        <_buildListItem item="Cafe Latte" price="22 / 25" />
                        <_buildListItem item="Cappuccino" price="22 / 25" />
                        <_buildListItem
                          item="Cappuccino Classic"
                          price="22 / 25"
                        />
                        <_buildListItem item="Piccolo" price="18 / - - - " />
                        <_buildListItem item="Cafe Mocha" price="25 / 26" />
                      </CollapsibleDiv>

                      <CollapsibleDiv
                        isActive={false}
                        title={
                          <div className="font-american uppercase text-2xl font-bold text-amber-400 opacity-90">
                            sweet
                          </div>
                        }
                      >
                        <_buildListItem
                          item="Biscoff Coffee"
                          price=" - - - / 28"
                        />
                        <_buildListItem item="Affogato" price=" - - - / 20" />
                        <_buildListItem item="Rose Latte" price=" - - - / 26" />
                        <_buildListItem
                          item="Green Tea Presso"
                          price="24 / 26"
                        />
                        <_buildListItem item="Caramello" price="24 / 26" />
                        <_buildListItem item="Vanilla Latte" price="24 / 26" />
                        <_buildListItem item="Red Velpresso" price="24 / 26" />
                        <_buildListItem item="Toudano" price="20 / 22" />
                      </CollapsibleDiv>

                      <CollapsibleDiv
                        isActive={false}
                        title={
                          <div className="font-american uppercase text-2xl font-bold text-amber-400 opacity-90">
                            FILTER COFFEE
                          </div>
                        }
                      >
                        <_buildListItem item="Aeropress" price="22" />
                        <_buildListItem item="v60" price="22" />
                        <_buildListItem item="Kalita Wave" price="22" />
                        <_buildListItem item="Blue Bottle" price="25" />
                        <_buildListItem item="Japannesse Drip" price="25" />
                        <div className="text-center  mt-2 mb-2 rounded-xl font-american bg-amber-400 text-stone-900">
                          Ask barista for beans &amp; price
                        </div>
                      </CollapsibleDiv>

                      <CollapsibleDiv
                        isActive={false}
                        title={
                          <div className="font-american uppercase text-2xl font-bold text-amber-400 opacity-90 mr-4">
                            NON COFFEE - MILK BASED
                          </div>
                        }
                      >
                        <_buildListItem
                          item="Biscoff Milky"
                          price=" - - - / 26"
                        />
                        <_buildListItem
                          item="Green Tea Latte"
                          price="22 / 26"
                        />
                        <_buildListItem
                          item="Red Velvet Latte"
                          price="22 / 26"
                        />
                        <_buildListItem item="Taro Latte" price="22 / 26" />
                        <_buildListItem
                          item="Chocolate Original"
                          price="22 / 26"
                        />
                        <_buildListItem
                          item="Chocolate Caramel"
                          price="24 / 27"
                        />
                        <_buildListItem
                          item="Chocolate Vanilla"
                          price="24 / 27"
                        />
                        <_buildListItem item="White Caramel" price="20 / 22" />
                        <_buildListItem item="White Vanilla" price="20 / 22" />
                      </CollapsibleDiv>
                    </div>
                  </CollapsibleDiv>

                  <CollapsibleDiv
                    isActive={true}
                    paddingBottom
                    title={
                      <div className="font-blockLetter uppercase text-6xl text-amber-400">
                        EAT
                      </div>
                    }
                  >
                    <_buildListItem item="Nasi Gila" price="22" />
                    <_buildListItem item="Nasgor Gila" price="22" />
                    <_buildListItem item="Nasgor Roa" price="22" />
                    <_buildListItem item="Ayam Geprek" price="25" />
                    <_buildListItem item="Mie Instan" price="12" />
                    <_buildListItem item="Spagehetti Bolognese" price="26" />
                  </CollapsibleDiv>

                  <CollapsibleDiv
                    isActive={true}
                    title={
                      <div className="font-blockLetter uppercase text-6xl text-amber-400">
                        SNACK
                      </div>
                    }
                  >
                    <_buildListItem item="Tempe Katsu" price="20" />
                    <_buildListItem item="French Fries" price="15" />
                    <_buildListItem item="Pisang Goreng" price="15" />
                    <_buildListItem item="Cheese Fries" price="20" />
                    <_buildListItem item="Sausage Cheese Fries" price="26" />

                    <CollapsibleDiv
                      isActive={true}
                      title={
                        <div className="font-american uppercase text-2xl font-bold text-amber-400 opacity-90">
                          toast
                        </div>
                      }
                    >
                      <_buildListItem item="Choco Crunchy" price="20" />
                      <_buildListItem item="Cheese" price="20" />
                      <_buildListItem item="Lotus Biscoff" price="25" />
                    </CollapsibleDiv>

                    <CollapsibleDiv
                      isActive={true}
                      title={
                        <div className="font-american uppercase text-2xl font-bold text-amber-400 opacity-90">
                          Add On
                        </div>
                      }
                    >
                      <_buildListItem item="Chesse" price="6" />
                      <_buildListItem item="Regal" price="6" />
                      <_buildListItem item="Ice Cream" price="6" />
                      <_buildListItem item="Biscoff" price="6" />
                    </CollapsibleDiv>
                  </CollapsibleDiv>
                </div>
              </div>
            </div>
          </main>

          <div className="pt-20 mt-4 pb-96">
            <FooterDefault />
          </div>
        </div>
      </Fade>
    </div>
  );
}
