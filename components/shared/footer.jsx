import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { GHIcon } from '../icons/github';
import { VKIcon } from '../icons/vk';

const styles = theme => ({
  root: {
    textAlign: 'center',
  },
  icon: {
    margin: theme.spacing(2),
  },
});

const Footer = props => {
  const { classes } = props;

  return (
    <Container>
      <div className={classes.root}>
        <a href='#'>
          <GHIcon className={classes.icon} />
        </a>
        <a href='#'>
          <VKIcon className={classes.icon} />
        </a>
        <p>
          Vector Graphics by{' '}
          <a href='https://www.vecteezy.com'>www.Vecteezy.com</a>
        </p>
      </div>
    </Container>
  );
};

Footer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(Footer);
