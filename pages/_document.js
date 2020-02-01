import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js" />
          <link href="https://fonts.googleapis.com/css?family=Voces&display=swap" rel="stylesheet" />
          <meta name="description" content="A site for my prgramming portfolio" />
          <meta charset="utf-8" />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="viewport" content="width=device-width" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
          body {
            font-family: 'Voces', sans-serif;
            font-size: 62.5%;
          }
        `}</style>
      </html>
    )
  }
};

export default MyDocument;