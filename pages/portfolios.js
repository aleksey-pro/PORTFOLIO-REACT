import React, {Component} from "react"
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import { getPosts } from '../actions/posts'
import BaseLayout from '../components/layouts/PageLayout'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'

import { Router } from '../routes'

import { deletePortfolio, getPortfolios } from '../axios'

class Portfolios extends Component {

    static propTypes = {
        portfolios: PropTypes.array,
        hasErrored: PropTypes.bool,
        isLoading: PropTypes.bool
    }

    
    static async getInitialProps({store}) { 
        let portfolios = []
        try {
            portfolios = await store.dispatch(getPosts())
        } catch (err){
            console.log(err)
        }
        return { portfolios: portfolios }
    }

    isSiteOwner = true

    displayDeleteWarning = (portfolioId) => {
        const isConfirm = window.confirm('Вы точно хотите удалить portfolio?')
        if(isConfirm) {
            this.deletePortfolio(portfolioId)
        }
    }

    deletePortfolio = (portfolioId) => {
        deletePortfolio(portfolioId)
            .then(() => {
                Router.pushRoute('/portfolios')
            })
            .catch(err => console.error(err))
    }

    renderPortfolios(portfolios) {   
        const { isAuthenticated, isSiteOwner } = this.props.auth;    
        return portfolios.map((portfolio, idx) => {
            return(
                <Grid item lg={4} className="grid-padded" key={ idx }>
                    <Card className="portfolio-card">
                        <CardHeader className="portfolio-card-header" title ={ portfolio.position } />
                        <CardContent>
                            <p className="portfolio-card-city">{ portfolio.location }</p>
                            <p className="portfolio-card-title">{ portfolio.title }</p>
                            <p className="portfolio-card-text">{ portfolio.description }</p>
                        </CardContent>
                        { isAuthenticated && this.isSiteOwner && <React.Fragment>
                            <Button
                                variant="contained"
                                color="secondary" 
                                onClick = {() => Router.pushRoute(`/portfolios/${portfolio._id}/edit`)}>
                                Edit
                            </Button> 
                            <Button
                                variant="contained"
                                color="primary" 
                                onClick = {() => this.displayDeleteWarning(portfolio._id)}>
                                Delete
                            </Button>
                        </React.Fragment>}
                    </Card>
                </Grid>
            )
        })
    }

    render() {
        const { portfolios, hasErrored, isLoading, auth: { isAuthenticated } } = this.props
         // const classes = this.useStyles()
        // const { isAuthenticated, isSiteOwner } = this.props.auth + watch chabges in app.js
        if (hasErrored) return (<p>Error loading page</p>)
        return (
            <BaseLayout title="Portfolios" {...this.props.auth}>
            { isAuthenticated && this.isSiteOwner && <Button
                    variant="contained"
                    color="primary" 
                    onClick = {() => Router.pushRoute('/portfolioNew')}>
                Create Portfolio
            </Button>}  
                <Grid container>
                    { isLoading ? <p>Page is loading...</p> : this.renderPortfolios(portfolios) }
                </Grid>
            </BaseLayout>
        )
    }    
}

const mapStateToProps = (state) => {
    return {
        portfolios: state.posts,
        hasErrored: state.errored,
        isLoading: state.loading
    }
}

export default (connect(mapStateToProps)(Portfolios))