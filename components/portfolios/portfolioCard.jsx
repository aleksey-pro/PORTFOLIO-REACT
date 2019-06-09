import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

export default class PortfolioCard extends React.Component {
  static propTypes = {
    portfolio: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super();
  }

  render() {
    const { portfolio, children } = this.props;
    return (
      <Card className='portfolio-card'>
        <CardHeader
          className='portfolio-card-header'
          title={portfolio.position}
        />
        <CardContent>
          <p className='portfolio-card-city'>{portfolio.location}</p>
          <p className='portfolio-card-title'>{portfolio.title}</p>
          <p className='portfolio-card-text'>{portfolio.description}</p>
        </CardContent>
        {children}
      </Card>
    );
  }
}
