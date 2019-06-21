import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import PageLayout from '../components/layouts/PageLayout';

const styles = () => ({
  root: {
    width: '100%',
    height: '800px'
  },
});

export const CV = props => {
  const { classes } = props;

  return (
    <PageLayout title='CV'>
      <h1>CV Page</h1>
      <div className='cv-title'>
        <a download='cv.pdf' href='/static/cv.pdf'>
          Download
        </a>
        <iframe
          className={classes.root}
          src='/static/cv.pdf'
        ></iframe>
      </div>
    </PageLayout>
  );
};

CV.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(CV);
