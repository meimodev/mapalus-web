import MetaDefault from "../../comps/mapalus/_meta";
import { Fade } from "react-awesome-reveal";
import { collection, getDocs, getFirestore } from "firebase/firestore";

import { app } from "../../firebase";
import dayjs from "dayjs";
import "dayjs/locale/id";

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=25200" // chache is served for 7 hours since the first request
  );

  const db = getFirestore(app);

  const products = collection(db, "products");
  const querySnapshot = await getDocs(products);

  let data = { data: [], time: "" };

  querySnapshot.forEach((doc) => {
    data.data.push(doc.data());
  });

  data.time = Date.now();

  return {
    props: data,
  };
}

dayjs.locale("id");

const Products = ({ data, time }) => {
  const sortedData = data.sort((a, b) => {
    let aa = a.name.toLowerCase(),
      bb = b.name.toLowerCase();

    if (aa < bb) {
      return -1;
    }
    if (aa > bb) {
      return 1;
    }
    return 0;
  });
  const relativeTime = require("dayjs/plugin/relativeTime");
  dayjs.extend(relativeTime);
  let t = dayjs(time);
  let passingTime = t.fromNow(true);

  const BuildItemList = ({ product }) => {
    return (
      <Fade cascade triggerOnce>
        <div className="max-w-xs flex justify-between items-center py-1 ">
          {product.status === "available" ? (
            <div></div>
          ) : (
            <div className="text-red-600 mr-3 font-bold font-bengasi self-center">
              X
            </div>
          )}
          <div className="text-left flex-1">{product.name}</div>
          <div className="min-w-fit flex flex-col ml-5 ">
            <div className="flex  gap-1">
              <div className="text-xs self-center text-zinc-400">Rp.</div>
              <div className="text-right">
                {product.price.toLocaleString("en").replace(",", ".")}
              </div>
            </div>
            <div className="text-xs text-right text-zinc-400 ">
              {product.unit.toLowerCase()}
            </div>
          </div>
        </div>
      </Fade>
    );
  };
  return (
    <div className="">
      <MetaDefault />
      <Fade cascade triggerOnce>
        <main>
          <div className=" flex justify-center items-center">
            <div className="text-gray-100 text-center text-sm flex flex-col font-poppins">
              <div className="px-4 pb-2 mt-8">
                <img src={"/mapalus.svg"} alt="Mapalus Logo" />
              </div>

              <span>Pasar online</span>
              <span className="font-bengasi mt-2">
                HARGA PASAR - ANTAR RUMAH
              </span>
              <div className="border-b-2 border-mapalus my-4 rounded-lg " />

              <div className="flex flex-col">
                <div className=" flex flex-col">
                  <span className=" font-bold text-md text-lg">
                    150+ Bahan Pasar
                  </span>
                  <span className="pb-4 font-light text-md text-xs text-zinc-400">
                    update dari {passingTime} laiu
                  </span>
                </div>
                <div className="">
                  {sortedData.map((e) => (
                    <BuildItemList key={e.id} product={e} />
                  ))}
                </div>
                <div className="pb-20"></div>
              </div>
            </div>
          </div>
        </main>
      </Fade>
    </div>
  );
};

export default Products;
