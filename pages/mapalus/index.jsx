import MetaDefault from "../../comps/mapalus/_meta";
import { Fade } from "react-awesome-reveal";

const Mapalus = () => {
  const _BuildButton = ({ title, icon, href }) => (
    <a href={href} target="_blank" rel="noreferrer">
      <div className="flex gap-2 items-center border p-2 my-2 rounded-lg">
        <div> {icon}</div>
        <div>{title}</div>
      </div>
    </a>
  );
  return (
    <div>
      <MetaDefault />

      <div>This is a mapalus page</div>

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
                <div className="border-4 border-mapalus my-4 rounded-lg "/>

                <div className="flex flex-col ">
                  <span>Pesan melalui aplikasi</span>
                  <_BuildButton
                    href="https://www.google.com"
                    title="App Store"
                    icon={<i className="lab la-apple text-3xl" />}
                  />
                  <_BuildButton
                    href="https://www.google.com"
                    title="Google Play"
                    icon={<i className="lab la-google-play text-3xl" />}
                  />
                </div>

                <div className="flex flex-col my-4">
                  <span>Pesan melalui media sosial</span>
                  <_BuildButton
                    href="https://www.google.com"
                    title="0895 2569 9078"
                    icon={<i className="lab la-whatsapp text-3xl" />}
                  />
                  <_BuildButton
                    href="https://www.google.com"
                    title="Mapalus Minahasa"
                    icon={<i className="lab la-facebook text-3xl" />}
                  />
                  <_BuildButton
                    href="https://www.google.com"
                    title="@mapalus.minahasa"
                    icon={<i className="lab la-instagram text-3xl" />}
                  />
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
