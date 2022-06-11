import MetaDefault from "../../comps/mapalus/_meta";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const Mapalus = () => {
  const _BuildButton = ({ title, icon, href, available }) => (
    <a href={available ? href : null} target="_blank" rel="noreferrer">
      <div className="flex gap-3 items-center border p-2 px-5 my-2 rounded-lg">
        <div> {icon}</div>
        <div>
          <div className="text-left text-lg">{title}</div>
          {!available ? (
            <p className="text-xs text-gray-400 text-left">coming soon</p>
          ) : null}
        </div>
      </div>
    </a>
  );
  return (
    <div>
      <MetaDefault />
      
      <Fade cascade triggerOnce>
        <div>
          <main>
            <div className=" flex justify-center items-center">
              <div className="text-gray-100 text-center text-sm flex flex-col font-poppins">
                <div className="px-4 pb-2">
                  <img src={"/mapalus.svg"} alt="Mapalus Logo" />
                </div>

                <span>Pasar online</span>
                <span className="font-bengasi">
                  HARGA PASAR - ANTAR DIRUMAH
                </span>
                <div className="border-4 border-mapalus my-4 rounded-lg " />

                <div className="flex flex-col">
                  <span>Pesan melalui aplikasi</span>
                  <_BuildButton
                    href="https://apps.apple.com/us/app/mapalus/id1626796752"
                    title="App Store"
                    icon={<i className="lab la-apple text-4xl" />}
                    available={true}
                  />
                  <_BuildButton
                    href="https://play.google.com/store/apps/details?id=com.meimodev.mapalus"
                    title="Play Store"
                    icon={<i className="lab la-google-play text-4xl" />}
                    available={true}
                  />
                </div>

                <div className="flex flex-col my-4">
                  <span>Pesan melalui media sosial</span>
                  <_BuildButton
                    href="https://api.whatsapp.com/send?phone=6289525699078&text=Halo,%20mo%20ba%20pesan%20bagimana%20kang?"
                    title="0895 2569 9078"
                    icon={<i className="lab la-whatsapp text-4xl" />}
                    available={true}
                  />
                  <_BuildButton
                    href="https://www.facebook.com/minahasamapalus"
                    title="Mapalus Minahasa"
                    icon={<i className="lab la-facebook text-4xl" />}
                    available={true}
                  />
                  <_BuildButton
                    href="https://www.instagram.com/mapalusminahasa"
                    title="@mapalus.minahasa"
                    icon={<i className="lab la-instagram text-4xl" />}
                    available={true}
                  />
                </div>
                <div className="flex flex-col my-4">
                  <span>Lihat Daftar Produk</span>
                  
                  <Link href="/mapalus/products" rel="noreferrer">
                  <div className="flex gap-3 items-center border p-2 px-5 my-2 rounded-lg cursor-pointer">
                    <div> <i className="las la-list-alt text-4xl" /></div>
                    <div>
                      <div className="text-left text-lg">Produk-produk</div>
                      
                    </div>
                  </div>
                  </Link>
                 
                </div>
              </div>
            </div>
          </main>
        </div>
      </Fade>
    </div>
  );
};

export default Mapalus;
