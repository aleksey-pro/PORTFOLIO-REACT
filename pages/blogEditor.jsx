import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import PageLayout from '../components/layouts/PageLayout';
import withAuth from '../components/hoc/withAuth';
import MDEEditor from '../components/mde-editor/Editor';

// const styles = () => ({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
// });

const BlogEditor = ({ classes, auth }) => {
  return (
    <PageLayout {...auth}>
      <MDEEditor />
    </PageLayout>
  );
};

BlogEditor.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
  auth: PropTypes.objectOf(PropTypes.object).isRequired,
};

// export default withStyles(styles)(About);
export default withAuth('siteOwner')(BlogEditor);
