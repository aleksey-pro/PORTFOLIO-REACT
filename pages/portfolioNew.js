import React, { Component } from 'react'
import PageLayout from '../components/layouts/PageLayout'
import { withStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
// import withAuth from '../components/hoc/withAuth'
import PortfolioCreateForm from '../components/portfolios/portfolioCreateForm'

const styles = theme => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
})

export class PortfolioNew extends Component { 

  render() {
    // const {classes} = this.props
    return (
        <PageLayout title="NewPortfolio">
            <h1>Create new portfolio</h1>
            <PortfolioCreateForm />
            {/* <Button className={classes.root}>Hook</Button> */}
        </PageLayout>
    )
  }
}

export default withStyles(styles)(PortfolioNew)
// export default withAuth('siteOwner')(PortfolioNew)
