/* eslint-disable @next/next/no-img-element */
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
        title="Esspecto Coffee | Manado"
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
                    cascade={true}
                    title={
                      <div className="font-blockLetter uppercase text-6xl text-amber-400">
                        COFFEE
                      </div>
                    }
                  >
                    <div>
                      <CollapsibleDiv
                        isActive={true}
                        title={
                          <div className="font-american uppercase text-2xl font-bold text-amber-400 opacity-90">
                            black
                          </div>
                        }
                      >
                        <_buildListItem item="Espresso" price="17 / - - -" />
                        <_buildListItem item="Americano" price="23 / 26" />
                        <_buildListItem
                          item="Espresso On The Rock"
                          price=" - - - / 22"
                        />
                      </CollapsibleDiv>

                      <CollapsibleDiv
                        isActive={true}
                        title={
                          <div className="font-american uppercase text-2xl font-bold text-amber-400 opacity-90">
                            White
                          </div>
                        }
                      >
                        <_buildListItem item="Cafe Latte" price="24 / 27" />
                        <_buildListItem item="Cappuccino" price="24 / 25" />
                        <_buildListItem
                          item="Cappuccino Classic"
                          price="24 / 27"
                        />
                        {/* <_buildListItem item="Piccolo" price="18 / - - - " /> */}
                        <_buildListItem item="Cafe Mocha" price="27 / 30" />
                        <_buildListItem item="Magic Latte" price="30 / - - -" />
                      </CollapsibleDiv>

                      <CollapsibleDiv
                        isActive={true}
                        title={
                          <div className="font-american uppercase text-2xl font-bold text-amber-400 opacity-90">
                            sweet coffee
                          </div>
                        }
                      >
                        <_buildListItem
                          item="Biscoff Coffee"
                          price=" - - - / 32"
                        />
                        <_buildListItem item="Toudano" price="24 / 27" />
                        <_buildListItem item="Affogato" price=" - - - / 30" />
                        <_buildListItem item="Rose Latte" price=" - - - / 30" />
                        <_buildListItem
                          item="Green Tea Presso"
                          price="27 / 32"
                        />
                        <_buildListItem item="Red Velpresso" price="27 / 32" />
                        <_buildListItem item="Caramello" price="27 / 32" />
                        <_buildListItem item="Vanilla Latte" price="27 / 32" />
                        <_buildListItem item="Cafe Bonbon Single (Soft)" price="16 / 20" />
                        <_buildListItem item="Cafe Bonbon Double " price="20 / 24" />
                      </CollapsibleDiv>

                      <CollapsibleDiv
                        isActive={true}
                        title={
                          <div className="font-american uppercase text-2xl font-bold text-amber-400 opacity-90">
                            FILTER COFFEE
                          </div>
                        }
                      >
                        {/* <_buildListItem item="Aeropress" price="22" /> */}
                        <_buildListItem item="v60" price="27" />
                        <_buildListItem item="Kalita Wave" price="27" />
                        <_buildListItem item="Blue Bottle" price="29" />
                        <_buildListItem item="Japannesse Drip" price="29" />
                        <div className="text-center  mt-2 mb-2 rounded-xl font-american bg-amber-400 text-stone-900">
                          Ask barista for beans &amp; price
                        </div>
                      </CollapsibleDiv>

                      <CollapsibleDiv
                        isActive={true}
                        title={
                          <div className="font-american uppercase text-2xl font-bold text-amber-400 opacity-90 mr-4">
                            NON COFFEE - MILK BASED
                          </div>
                        }
                      >
                        <_buildListItem
                          item="Biscoff Milky"
                          price=" - - - / 29"
                        />
                        <_buildListItem
                          item="Green Tea Latte"
                          price="24 / 29"
                        />
                        <_buildListItem
                          item="Red Velvet Latte"
                          price="24 / 29"
                        />
                        <_buildListItem item="Taro Latte" price="24 / 29" />
                        <_buildListItem
                          item="Chocolate Original"
                          price="24 / 29"
                        />
                        <_buildListItem
                          item="Chocolate Caramel"
                          price="26 / 32"
                        />
                        <_buildListItem
                          item="Chocolate Vanilla"
                          price="26 / 32"
                        />
                        <_buildListItem
                          item="Chocolate Banana"
                          price="26 / 32"
                        />
                        <_buildListItem item="White Caramel" price="22 / 27" />
                        <_buildListItem item="White Vanilla" price="22 / 27" />
                        <_buildListItem
                          item="Taro Cheese"
                          price=" - - - / 32"
                        />
                        <_buildListItem
                          item="Banana Chocolate"
                          price=" - - - / 34"
                        />
                        <_buildListItem item="Sunrise" price=" - - - / 24" />
                      </CollapsibleDiv>

                      <CollapsibleDiv
                        isActive={true}
                        title={
                          <div className="font-american uppercase text-2xl font-bold text-amber-400 opacity-90 mr-4">
                            Extras
                          </div>
                        }
                      >
                        <_buildListItem item="Oat Milk" price="10" />
                        <_buildListItem item="Syrup" price="10" />
                        <_buildListItem item="Ice cream" price="10" />
                        <_buildListItem item="Seasonal" price="7" />
                        <_buildListItem item="Extra Shot" price="7" />
                        <_buildListItem item="Cheese Cream" price="7" />
                      </CollapsibleDiv>
                    </div>
                  </CollapsibleDiv>
                </div>
              </div>
            </div>
          </main>

          <div className="pt-4 mt-4 pb-20">
            <FooterDefault />
          </div>
        </div>
      </Fade>
    </div>
  );
}
