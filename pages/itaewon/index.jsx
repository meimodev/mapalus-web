/* eslint-disable @next/next/no-img-element */
import Meta from "../../comps/Meta";
import ListItemButton from "../../comps/ListItemButton";
import FooterDefault from "../../comps/FooterDefault";
import { Fade } from "react-awesome-reveal";

export function _BuildMeta() {
  return (
    <Meta
      title="Itaewon x Kland"
      description="Itaewon Korean Grill item list x Kland Coffee item list"
      color="#000000"
    />
  );
}

export default function Itaweon() {
  // noinspection HtmlUnknownTarget
  return (
    <div className="bg-gray-100 ">
      <_BuildMeta />

      <Fade cascade triggerOnce>
        <div className="h-screen flex flex-col justify-center items-center px-6 max-w-md mx-auto">
          <main>
            <div className="flex justify-center items-center">
              <div className="flex-col ">
                <div className="my-6 p-2">
                  <img
                    src="/itaewon_logo.png"
                    className="w-full bg-no-repeat bg-cover"
                    alt="Itaewon x Kland logo"
                  />
                </div>

                <div>
                  <ListItemButton title="FOOD" href="/itaewon/food" />
                  <ListItemButton title="BEVERAGE" href="/itaewon/beverage" />
                  <ListItemButton title="KOREAN BBQ" href="/itaewon/barbeque" />
                  <ListItemButton
                    title="SNACK &amp; KIMBAB"
                    href="/itaewon/snack"
                  />
                  <ListItemButton title="COCKTAIL" href="/itaewon/cocktail" />
                </div>
              </div>
            </div>
          </main>

          <div className="absolute bottom-0">
            <FooterDefault />
          </div>
        </div>
      </Fade>
    </div>
  );
}
