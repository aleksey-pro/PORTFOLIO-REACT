import React from "react"
import withRedux from "next-redux-wrapper"
import App, {Container} from 'next/app'
import {Provider} from "react-redux"
import {makeStore} from '../store'


export default withRedux(makeStore)(class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
        return {
            pageProps: {
                ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
            }
        };
    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
});