import Head from "next/head";

const Meta = ({ title, description, color, children }) => {
  // noinspection HtmlUnknownTarget
    return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet="UTF-8" />
      <meta name="description" content={description} />
      <meta name="theme-color" content={color} />

      <link rel="icon" href="/favicon.ico" />
      {children}
    </Head>
  );
};

export default Meta;
