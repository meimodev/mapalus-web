/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import Meta from "../comps/Meta";

export default function Home() {
  // noinspection HtmlUnknownTarget

  useEffect(() => {
    setTimeout(() => {
      window.location.assign("/mapalus");
    }, 4000);
  }, []);

  return (
    <div>
      <Meta
        title="Mapalus | Pasar Online Minahasa"
        description="Aplikasi pasar online tersedia di AppStore & Playstore, Minahasa, Tondano, Manado, Tomohon, Bitung, Amurang dan sekitarnya"
        color="#FF9800"
        image={"/mapalus.svg"}
      />

      <div className="h-screen flex flex-col justify-center items-center font-blockLetter ">
        <main className="flex-grow">
          <div className="h-full flex justify-center items-center">
            <div className="flex-col mx-6 ">
              <div className="">
                <img src="/mapalus.svg" alt="Mapalus logo" />
              </div>

              <div className="my-6">
                <h1 className="text-gray-100 text-5xl text-center">
                  Stay Tuned ! <br />
                  Things are under construction
                </h1>
              </div>
              <div>
                <h1 className=" text-2xl text-center text-mapalus pt-4">
                  Feel free to drop us a message
                </h1>
              </div>
              <div className="mt-4">
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B62895355578090&text&app_absent=0"
                  target="_blank"
                  className="text-gray-100 text-sm text-center"
                  rel="noreferrer"
                >
                  <div className="flex items-center justify-center gap-2 border bg-mapalus border-mapalus text-neutral-900 text-2xl p-4 rounded-xl">
                    <i className="lab la-whatsapp text-4xl " />
                    <span>0895 3555 78090</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
