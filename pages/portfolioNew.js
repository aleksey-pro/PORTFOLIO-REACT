import React, { Component } from 'react'
import PageLayout from '../components/layouts/PageLayout'
// import withAuth from '../components/hoc/withAuth'
import PortfolioCreateForm from '../components/portfolios/portfolioCreateForm'

export class PortfolioNew extends Component { 

  render() {
    return (
        <PageLayout title="NewPortfolio">
            <h1>Create new portfolio</h1>
            <PortfolioCreateForm />
        </PageLayout>
    )
  }
}

export default PortfolioNew
// export default withAuth('siteOwner')(PortfolioNew)
