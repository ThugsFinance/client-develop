import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
          <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
          <title>Crypto Monster</title>
          <meta
            name="description"
            content="Special events and competitions are held regularly in Vikings: War of Clans. This guide will detail the different types and the rewards you can win."
          />
        </Head>
        <body className="rs" style={{ overflow: "hidden" }}>
          <div
            id="page-loading"
            style={{
              position: "fixed",
              backgroundColor: "white",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999
            }}
          >
            <img src="/images/loading.gif" alt="loading" />
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
