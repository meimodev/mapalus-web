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
    <div >
      <Meta
        title="Uncles BurgerBar | Manado"
        description="Uncles BurgerBar menu list"
        color="#1c1917"
        image="/mapalus.svg"
      />

      <Fade cascade triggerOnce>
        <div className="h-full  flex flex-col justify-center items-center  text-stone-100 max-w-lg mx-auto">
          <main className="my-32">
            <div>We currently working on it, tomorrow probably finished ☺ ☺ </div>
          </main>

          <div className="pt-4 mt-4 pb-20">
            <FooterDefault />
          </div>
        </div>
      </Fade>
    </div>
  );
}
