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
      </Head>
      <body className="bg-neutral-900 scroll-smooth ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
