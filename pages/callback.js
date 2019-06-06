import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PageLayout from '../components/layouts/PageLayout'
import auth0Client from '../services/auth0'
import { withRouter } from 'next/router'

class Callback extends Component {
    async componentDidMount() {
        await auth0Client.handleAuthentication()
        this.props.router.push('/')
    }
    render() {

        return (
            <PageLayout>
                <h1>Veryfying logging data...</h1>
                {/* вставить анимацию загрузки */}
            </PageLayout>
        )
    }
}

export default withRouter(Callback)
