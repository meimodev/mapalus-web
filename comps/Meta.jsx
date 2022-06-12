import Head from "next/head";

const Meta = ({ title, description, color, image, children }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet="UTF-8" />
      <meta name="description" content={description} />
      <meta name="theme-color" content={color} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.mapalusindonesia.com/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.mapalusindonesia.com/"
      />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      <link rel="icon" href="/favicon.ico" />

      {children}
    </Head>
  );
};

export default Meta;
