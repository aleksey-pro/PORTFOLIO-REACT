import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import PageLayout from '../components/layouts/PageLayout';
import auth0Client from '../services/auth0';

class Callback extends Component {
  static propTypes = {
    router: PropTypes.objectOf(PropTypes.object).isRequired
  };

  async componentDidMount() {
    const { router } = this.props;
    await auth0Client.handleAuthentication();
    router.push('/');
  }

  render() {
    return (
      <PageLayout>
        <h1>Veryfying logging data...</h1>
        {/* вставить анимацию загрузки */}
      </PageLayout>
    );
  }
}

export default withRouter(Callback);
