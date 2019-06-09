import React, { Component } from 'react';
import PageLayout from '../components/layouts/PageLayout';
import withAuth from '../components/hoc/withAuth';
import PortfolioCreateForm from '../components/portfolios/portfolioCreateForm';
import { updatePortfolio, getPortfolioById } from '../axios';
import { Router } from '../routes';

export class PortfolioEdit extends Component {
  static async getInitialProps({ query }) {
    let portfolio = {};
    try {
      portfolio = await getPortfolioById(query.id);
    } catch (err) {
      console.error(err);
    }
    return portfolio;
  }

  state = {
    error: undefined
  };

  updatePortfolio = (portfolioData, { setSubmitting }) => {
    setSubmitting(true); // prevent form from sending request
    updatePortfolio(portfolioData)
      .then(() => {
        setSubmitting(false);
        this.setState({ error: undefined });
        Router.pushRoute('/portfolios');
      })
      .catch(err => {
        // passing error from server to client!!!!
        setSubmitting(false);
        const error = err.message || 'Server Error!';
        this.setState({ error });
      });
  };

  render() {
    const { error } = this.state;
    const portfolio = this.props;
    return (
      <PageLayout title="EditPortfolio">
        <h1>Edit portfolio</h1>
        <PortfolioCreateForm
          initialValues={portfolio} // got initial data before edit
          error={error}
          onSubmit={this.updatePortfolio}
        />
      </PageLayout>
    );
  }
}

export default withAuth('siteOwner')(PortfolioEdit);
