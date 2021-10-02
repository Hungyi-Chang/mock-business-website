/* eslint-disable react/react-in-jsx-scope */
/**
 * Here we define the head of the html file
 *
 * @version 1.0.0
 */

import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="apple-touch-icon" sizes="180x180" href="/resources/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/resources/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/resources/favicons/favicon-16x16.png" />
          <link rel="mask-icon" href="/resources/favicons/favicon-16x16.png" />
          <link rel="shortcut icon" href="/resources/favicons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#303030" />
          <meta name="msapplication-config" content="/resources/favicons/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}