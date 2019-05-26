import React from "react"
// https://github.com/kirill-konshin/next-redux-wrapper
import withRedux from "next-redux-wrapper"
import App, {Container} from 'next/app'
import {Provider} from "react-redux"
import {makeStore} from '../store'
import { ThemeProvider } from '@material-ui/styles';
{/* Normailze like*/}
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../styles/fusTheme'

export default withRedux(makeStore)(class MyApp extends App {
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
          jssStyles.parentNode.removeChild(jssStyles);
        }
    }
    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <Provider store={store}>
                     <ThemeProvider theme={theme}>                            
                        <CssBaseline />
                        <Component {...pageProps} />
                    </ThemeProvider>
                </Provider>
            </Container>
        );
    }
})