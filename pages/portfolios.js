import React, {Component} from "react"
import PropTypes from 'prop-types'
import { Link } from '../routes'
import {connect} from "react-redux"
import {getPosts} from '../actions/posts'
import BaseLayout from '../components/layouts/PageLayout'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'

import "../styles/portfolios.scss"

class Portfolios extends Component {

    static propTypes = {
        posts: PropTypes.array,
        hasErrored: PropTypes.bool,
        isLoading: PropTypes.bool
    }

    static async getInitialProps({store, isServer, pathname, query}) { 
        let posts = []
        try {
            posts = await store.dispatch(getPosts("https://jsonplaceholder.typicode.com/posts"))
        } catch (err){
            console.log(err)
        }
        return { posts: posts }
    }

    renderPosts(posts) {    
        return posts.map((post, idx) => {
            return(
                    <Grid item lg={4} className="grid-padded" key={ idx }>
                        <Card className="portfolio-card">
                            <CardHeader className="portfolio-card-header">Some Position { idx }</CardHeader>
                            <CardContent>
                                <p className="portfolio-card-city">Some Location { idx }</p>
                                <p className="portfolio-card-title">Some Company { idx }</p>
                                <p className="portfolio-card-text">Some Description { idx }</p>
                            </CardContent>
                        </Card>
                    </Grid>
                // </StyledGrid>
                // <li key={ idx }>
                //     <Link route={`/portfolio/${post.id}`} >
                //         <a>{ post.title }</a>
                //     </Link>
                // </li>
            )
        })
    }

    render() {
        const { posts, hasErrored, isLoading } = this.props
        // const classes = this.useStyles()
        if (hasErrored) return (<p>Error loading page</p>)
        return (
            <BaseLayout title="Portfolios">
                <Grid container>
                    { isLoading ? <p>Page is loading...</p> : this.renderPosts(posts) }
                </Grid>
            </BaseLayout>
        )
    }    
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        hasErrored: state.errored,
        isLoading: state.loading
    }
}

export default (connect(mapStateToProps)(Portfolios))