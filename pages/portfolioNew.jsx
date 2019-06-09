import React, { Component } from 'react';
import PageLayout from '../components/layouts/PageLayout';
import withAuth from '../components/hoc/withAuth';
import PortfolioCreateForm from '../components/portfolios/portfolioCreateForm';
import { createPortfolio } from '../axios';
import { Router } from '../routes';

const INITIAL_VALUES = {
  title: '',
  company: '',
  location: '',
  position: '',
  description: '',
  startDate: '',
  endDate: ''
};

export class PortfolioNew extends Component {
  state = {
    error: undefined
  };

  savePortfolio = (PortfolioData, { setSubmitting }) => {
    setSubmitting(true); // prevent form from sending request
    createPortfolio(PortfolioData)
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
    return (
      <PageLayout title="NewPortfolio">
        <h1>Create new portfolio</h1>
        <PortfolioCreateForm
          initialValues={INITIAL_VALUES}
          error={error}
          onSubmit={this.savePortfolio}
        />
      </PageLayout>
    );
  }
}

export default withAuth('siteOwner')(PortfolioNew);
