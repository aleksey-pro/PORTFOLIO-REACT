import React from 'react'
import Document, { Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/styles'
import flush from 'styled-jsx/server'

class MyDocument extends Document {
  render() {
    return (
      <html lang="en" dir="ltr">
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

/**
 * Реализуем SSR для стилей, так как _document рендерится на сервере
 */
MyDocument.getInitialProps = async ctx => {

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
  })

  const initialProps = await Document.getInitialProps(ctx)


  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <React.Fragment>
        {sheets.getStyleElement()}
        {flush() || null}
      </React.Fragment>
    ),
  };
};

export default MyDocument