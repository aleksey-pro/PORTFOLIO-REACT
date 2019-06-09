import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import PortfolioCard from '../components/portfolios/portfolioCard';
import { getPosts } from '../actions/posts';
import BaseLayout from '../components/layouts/PageLayout';
import { Router } from '../routes';

import { deletePortfolio } from '../axios';

class Portfolios extends Component {
  static propTypes = {
    portfolios: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    auth: PropTypes.object.isRequired,
  };

  static async getInitialProps({ store }) {
    let portfolios = [];
    try {
      portfolios = await store.dispatch(getPosts());
    } catch (err) {
      throw new Error(err);
    }
    return { portfolios };
  }

  displayDeleteWarning = portfolioId => {
    // eslint-disable-next-line no-alert
    const isConfirm = window.confirm('Вы точно хотите удалить portfolio?');
    if (isConfirm) {
      this.deletePortfolio(portfolioId);
    }
  };

  deletePortfolio = portfolioId => {
    deletePortfolio(portfolioId)
      .then(() => {
        Router.pushRoute('/portfolios');
      })
      // eslint-disable-next-line no-console
      .catch(err => console.error(err));
  };

  renderPortfolios(portfolios) {
    const {
      auth: { isAuthenticated, isSiteOwner },
    } = this.props;
    return portfolios.map((portfolio, idx) => {
      return (
        <Grid item lg={4} className='grid-padded' key={idx}>
          <PortfolioCard portfolio={portfolio}>
            {isAuthenticated && isSiteOwner && (
              <React.Fragment>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={() =>
                    Router.pushRoute(`/portfolios/${portfolio._id}/edit`)
                  }
                >
                  Edit
                </Button>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={() => this.displayDeleteWarning(portfolio._id)}
                >
                  Delete
                </Button>
              </React.Fragment>
            )}
          </PortfolioCard>
        </Grid>
      );
    });
  }

  render() {
    const {
      portfolios,
      hasErrored,
      isLoading,
      auth: { isAuthenticated, isSiteOwner },
    } = this.props;
    // const classes = this.useStyles()
    if (hasErrored) return <p>Error loading page</p>;
    return (
      <BaseLayout title='Portfolios' {...this.props.auth}>
        {isAuthenticated && isSiteOwner && (
          <Button
            variant='contained'
            color='primary'
            onClick={() => Router.pushRoute('/portfolioNew')}
          >
            Create Portfolio
          </Button>
        )}
        <Grid container>
          {isLoading ? (
            <p>Page is loading...</p>
          ) : (
            this.renderPortfolios(portfolios)
          )}
        </Grid>
      </BaseLayout>
    );
  }
}

const mapStateToProps = state => {
  return {
    portfolios: state.posts,
    hasErrored: state.errored,
    isLoading: state.loading,
  };
};

export default connect(mapStateToProps)(Portfolios);
