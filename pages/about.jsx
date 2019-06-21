import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import PageLayout from '../components/layouts/PageLayout';

const styles = () => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

const About = props => {
  const { classes, auth } = props;

  return (
    <PageLayout {...auth}>
      <h1>About Page</h1>
      <Button className={classes.root}>Hook</Button>
    </PageLayout>
  );
};

About.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
  auth: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(About);
