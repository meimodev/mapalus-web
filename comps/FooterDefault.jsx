/* eslint-disable @next/next/no-img-element */

const FooterDefault = () => {
  // noinspection HtmlUnknownTarget
  return (
    <footer>
      <div className="">
        <a
          href="https://www.mapalusindonesia.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="h-12">
            <img src="/mapalus.svg" height={20} width={60} alt="Mapalus logo" />
          </div>
        </a>
      </div>
    </footer>
  );
};

export default FooterDefault;
