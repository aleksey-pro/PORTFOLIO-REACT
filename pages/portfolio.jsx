import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPost } from '../actions/post';
import BaseLayout from '../components/layouts/PageLayout';

class Portfolio extends Component {
  static propTypes = {
    portfolio: PropTypes.objectOf(PropTypes.object).isRequired,
    auth: PropTypes.objectOf(PropTypes.object).isRequired
  };

  static async getInitialProps({ store, query }) {
    const portfolioID = query.id;
    let portfolio = {};
    try {
      portfolio = await store.dispatch(
        getPost(`http://jsonplaceholder.typicode.com/posts/${portfolioID}`)
      );
    } catch (err) {
      console.log(err);
    }
    return { portfolio };
  }

  render() {
    const { portfolio, auth } = this.props;
    return (
      <BaseLayout {...auth}>
        <h1>{portfolio.title}</h1>
        <p>{portfolio.body}</p>
        <p>{portfolio.id}</p>
      </BaseLayout>
    );
  }
}

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(mapStateToProps)(Portfolio);
