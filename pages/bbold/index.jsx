/* eslint-disable @next/next/no-img-element */
import FooterDefault from "../../comps/FooterDefault";
import { Fade } from "react-awesome-reveal";
import Meta from "../../comps/Meta";
import Link from "next/link";

export const _BuildMeta = () => {
  return (
    <Meta
      title="BBOLD MMXX Tondano"
      description="Esspecto Coffee menu list"
      color="#1c1917"
      image="/bbold.png"
    />
  );
};

export default function Page() {
  const RowHolder = ({ className, isWholeWidth = false, children }) => {
    const width = isWholeWidth ? " h-20 xs:h-[25rem]" : " h-20 xs:h-52";
    return (
      <div className={"flex flex-col xs:flex-row   " + width + className}>
        {children}
      </div>
    );
  };

  const CellHolder = ({ className, href = "" }) => {
    return (
      <Link passhref href={href}>
        <a className={"xs:flex-1 flex-none " + className}>This is image 1</a>
      </Link>
    );
  };

  return (
    <div className="h-screen w-full bg-stone-700">
      <_BuildMeta />

      <div className="h-full flex flex-col justify-center items-center text-stone-100 max-w-lg mx-auto ">
        <main className="flex-grow ">
          <div className="flex justify-center items-center">
            <div className="flex-col ">
              <div className="pt-12 px-12 pb-8">
                <img src="/bbold.png" alt="Itaewon x Kland logo" />
              </div>
              <Fade cascade triggerOnce>
                <div className="font-blockLetter text-4xl text-center">
                  THINGS UNDER CONSTRUCTIOn
                </div>
                {/* <div className="font-poppins text-lg text-center">
                  <em>
                    <q>
                      Kekecewaan menjadi kekuatan, pengkhianatan menjadi
                      pertemanan, hutang menjadi kehormatan, percintaan masih
                      tetap keniscayaan
                    </q>
                  </em>
                </div>
                <div className="flex flex-col">
                  <RowHolder className="">
                    <CellHolder className="bg-blue-700 " href="/bbold/5" />
                    <CellHolder className="bg-red-700  " href="/bbold/4" />
                  </RowHolder>
                  <RowHolder className="" isWholeWidth>
                    <CellHolder className="bg-yellow-700  " href="/bbold/3" />
                  </RowHolder>
                  <RowHolder className="">
                    <CellHolder className="bg-purple-700 " href="/bbold/2" />
                    <CellHolder className="bg-green-700 " href="/bbold/1" />
                  </RowHolder>
                </div> */}
                <div className="h-40"></div>
              </Fade>
            </div>
          </div>
        </main>

        {/* <div className="pt-20 mt-4 pb-96">
            <FooterDefault />
          </div> */}
      </div>
    </div>
  );
}
