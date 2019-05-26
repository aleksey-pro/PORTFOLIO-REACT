import React, {Component} from "react"
import {connect} from "react-redux"
import {getPost} from '../actions/post'
import BaseLayout from '../components/layouts/PageLayout'


class Portfolio extends Component {
    static async getInitialProps({store, isServer, pathname, query}) { 
        const portfolioID = query.id
        let portfolio = {}
        try {
          portfolio = await store.dispatch(getPost(`http://jsonplaceholder.typicode.com/posts/${portfolioID}`))
        } catch (err){
          console.log(err)
        }
        return { portfolio }
    }

    render() {
        const { portfolio } = this.props
          return (
            <BaseLayout>
              <h1>{ portfolio.title }</h1>
              <p>{ portfolio.body }</p>
              <p>{ portfolio.id }</p>
            </BaseLayout>
          )
    }
}

const mapStateToProps = state => ({portfolio: state.portfolio})

export default connect(mapStateToProps)(Portfolio)



