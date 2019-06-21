import React from 'react';
import PropTypes from 'prop-types';
// https://github.com/kirill-konshin/next-redux-wrapper
import withRedux from 'next-redux-wrapper';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStore } from '../store';
import theme from '../styles/fusTheme';

import auth0 from '../services/auth0';

export default withRedux(makeStore)(
  class MyApp extends App {
    static propTypes = {
      Component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
      pageProps: PropTypes.object,
      store: PropTypes.object,
    };

    // static async getInitialProps(ctx) {
    //     // Server-side authentication
    //     // Дело в том, что на сервере нет кукисов и мы не можем судить по ним  - пройдена ли аутентификация
    //     // поэтому мы боработаем заговлоки в объекте ctx.req
    //     const isAuthenticated = process.browser ? auth0.clientAuth() : auth0.serverAuth(ctx.ctx.req)
    //     const auth = { isAuthenticated }
    //     return { auth }
    // }

    static async getInitialProps({ Component, router, ctx }) {
      let pageProps = {};
      const user = process.browser
        ? await auth0.clientAuth()
        : await auth0.serverAuth(ctx.req);

      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }
      // Расшифровка того что выше. то есть передаем true а не прсваеваем значение в случае isAuthenticated: true
      // let isAuthenticated = false
      // if(user) {isAuthenticated = true}
      const isSiteOwner =
        user && user.payload[`${process.env.NAMESPACE}/role`] === 'siteOwner';
      const auth = { user, isAuthenticated: !!user, isSiteOwner };
      return { pageProps, auth };
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      const { Component, pageProps, store, auth } = this.props;

      return (
        <Container>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Component {...pageProps} auth={auth} />
            </ThemeProvider>
          </Provider>
        </Container>
      );
    }
  }
);
