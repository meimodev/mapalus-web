import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  // noinspection JSUnresolvedLibraryURL
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-neutral-900 scroll-smooth ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
