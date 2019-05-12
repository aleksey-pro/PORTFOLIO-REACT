import React, {Component} from "react"
import { Link } from '../routes'
import {connect} from "react-redux"
import {getPosts} from '../actions/posts'
import BaseLayout from '../components/layouts/BaseLayout'


class Portfolios extends Component {
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
                <li key={ idx }>
                    <Link route={`/portfolio/${post.id}`} >
                        <a>{ post.title }</a>
                    </Link>
                </li>
            )
        })
    }

    render() {
        const { posts, hasErrored, isLoading } = this.props
        if (hasErrored) return (<p>Error loading page</p>)
        return (
            <BaseLayout>
                <ul>
                    { isLoading ? <p>Page is loading...</p> : this.renderPosts(posts) }
                </ul>
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

export default connect(mapStateToProps)(Portfolios)