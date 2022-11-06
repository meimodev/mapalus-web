/* eslint-disable @next/next/no-img-element */
import Meta from "../../comps/Meta";
import { Fade } from "react-awesome-reveal";

export function _BuildMeta({ title }) {
  return (
    <Meta
      title={title ? title : "Mapalus | Pasar online minahasa"}
      description="Aplikasi pasar online tersedia di AppStore & Playstore, Minahasa, Tondano, Manado, Tomohon, Bitung, Amurang dan sekitarnya"
      color="#FF9800"
      image={"/mapalus.svg"}
    />
  );
}

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
      <_BuildMeta />
      <div>
        <main>
          <div className=" flex justify-center items-center">
            <div className="text-gray-100 text-center text-sm flex flex-col font-poppins my-10">
              <div className="px-4 pb-2">
                <img src={"/mapalus.svg"} alt="Mapalus Logo" />
              </div>

              <span>Aplikasi pasar online</span>
              <span className="font-bengasi">
                HARGA DIPASAR - ANTAR DIRUMAH
              </span>
              <div className="border-b-2 border-mapalus mt-2 mb-4 rounded-lg " />

              <Fade cascade triggerOnce>
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

                <div className="flex flex-col mt-4">
                  <span>Pesan melalui media sosial</span>
                  <_BuildButton
                    href="https://api.whatsapp.com/send?phone=6287859896567&text=Halo,%20mo%20ba%20pesan%20bagimana%20kang?"
                    title="0878 5989 6567"
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

                <div className="flex flex-col mb-4">
                  <a
                    href="/mapalus/products"
                    rel="noreferrer"
                    target="_blank"
                    passHref
                  >
                    <div className="flex gap-3 items-center border border-mapalus p-2 px-5 my-2 rounded-lg cursor-pointer bg-mapalus text-neutral-900 font-bold">
                      <div>
                        <i className="las la-list-alt text-4xl" />
                      </div>
                      <div>
                        <div className="text-left text-lg">
                          150+ Bahan Pasar
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </Fade>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Mapalus;
