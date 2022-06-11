import MetaDefault from '../../comps/mapalus/_meta';
import { Fade } from 'react-awesome-reveal';
import { useState, useEffect } from 'react';

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {}, []);

  const BuildItemList = ({ name, price }) => {
    return (
      <div className="max-w-xs flex justify-between items-center py-1">
        <div className="text-left">{name}</div>
        <div className="min-w-fit ">{price}</div>
      </div>
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
                <img src={'/mapalus.svg'} alt="Mapalus Logo" />
              </div>

              <span>Pasar online</span>
              <span className="font-bengasi mt-2">
                HARGA PASAR - ANTAR DIRUMAH
              </span>
              <div className="border-b-2 border-mapalus my-4 rounded-lg " />

              <div className="flex flex-col">
                <span className=" font-bold text-md text-lg">
                  150+ Produk Pasar
                </span>
                <span className="pb-4 font-light text-md text-xs text-zinc-400">
                  25 November 2022
                </span>

                <BuildItemList name={'Item Name'} price="Rp. 5.000" />
                <BuildItemList name={'Item Name'} price="Rp. 5.000" />
              </div>
            </div>
          </div>
        </main>
      </Fade>
    </div>
  );
};

export default Products;
