import React from "react"
// https://github.com/kirill-konshin/next-redux-wrapper
import withRedux from "next-redux-wrapper"
import App, {Container} from 'next/app'
import {Provider} from "react-redux"
import {makeStore} from '../store'

{/* MuiThemeProvider makes the theme available for pages only, not components */}
import { MuiThemeProvider } from '@material-ui/core/styles'
{/* Normailze like*/}
import CssBaseline from '@material-ui/core/CssBaseline'
{/* Jss enables to write css in js */}
{/* https://github.com/mui-org/material-ui/tree/master/examples/nextjs */}
import JssProvider from 'react-jss/lib/JssProvider'
// Provides proper CSS injection order
import getPageContext from '../styles/getPageContext'

export default withRedux(makeStore)(class MyApp extends App {
    constructor() {
        super();
        this.pageContext = getPageContext();
    }
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
          jssStyles.parentNode.removeChild(jssStyles);
        }
    }

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
                {/* Wrap every page in Jss and Theme providers */}
                    <JssProvider
                        registry={this.pageContext.sheetsRegistry}
                        generateClassName={this.pageContext.generateClassName}
                    >                        
                        <MuiThemeProvider
                            theme={this.pageContext.theme}
                            sheetsManager={this.pageContext.sheetsManager}
                        >                            
                            <CssBaseline />
                            <Component pageContext={this.pageContext} {...pageProps} />
                        </MuiThemeProvider>                        
                    </JssProvider>                    
                </Provider>
            </Container>
        );
    }
})