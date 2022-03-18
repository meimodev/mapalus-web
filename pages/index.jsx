import Meta from "../comps/Meta";

export default function Home() {
  // noinspection HtmlUnknownTarget
  return (
    <div>
      <Meta
        title="Mapalus | Pasar Online Minahasa"
        description="Mapalus merupakan pasar online di minahasa yang terbesar, pasar online Tondano, Manado, Tomohon, Bitung, Amurang  dan sekitarnya"
      />

      <div className="h-screen flex flex-col justify-center items-center  ">
        <main className="flex-grow">
          <div className="h-full flex justify-center items-center">
            <div className="flex-col mx-6 ">
              <div className="">
                <img src="/mapalus.svg" alt="Mapalus logo" />
              </div>

              <div className="my-6">
                <h1 className="text-gray-100 text-5xl text-center">
                  Stay Tuned, Things are under construction
                </h1>
              </div>
              <div>
                <h1 className="text-gray-100 text-sm text-center">
                  Feel free to drop us a message
                </h1>
              </div>
              <div className="mt-4">
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B6289525699078&text&app_absent=0"
                  target="_blank"
                  className="text-gray-100 text-sm text-center"
                  rel="noreferrer"
                >
                  <div className="flex items-center justify-center gap-2 border">
                    <i className="lab la-whatsapp text-2xl" />
                    <span>+62 895 2569 9078</span>
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
