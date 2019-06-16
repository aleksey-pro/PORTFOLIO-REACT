/* eslint-disable jsx-a11y/anchor-is-valid  */

import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from '../routes';
import PageLayout from '../components/layouts/PageLayout';

// const styles = () => ({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px'
//   }
// });

export const Blogs = props => {
  const { classes, auth } = props;
  const dateString = 'dddd, MMMM DD, YYYY hh:mm A';
  return (
    <PageLayout className='blog-body' {...auth}>
      <h1>Fresh Blogs</h1>
      <Grid>
        <Grid item sm={12} className='mx-auto'>
          {
            <React.Fragment>
              <div className='post-preview'>
                <Link route='/blogs/blogId'>
                  <a>
                    <h2 className='post-title'>Very Nice Blog Post</h2>
                    <h3 className='post-subtitle'>
                      How I Start Porgramming...
                    </h3>
                  </a>
                </Link>
                <p className='post-meta'>
                  Posted by
                  <a href='#'> Filip Jerga </a>
                  {format(new Date(), dateString)}
                </p>
              </div>
              <hr></hr>
              <div className='post-preview'>
                <Link route='/blogs/blogId'>
                  <a>
                    <h2 className='post-title'>Very Nice Blog Post</h2>
                    <h3 className='post-subtitle'>
                      How I Start Porgramming...
                    </h3>
                  </a>
                </Link>
                <p className='post-meta'>
                  Posted by
                  <a href='#'> Filip Jerga </a>
                  {format(new Date(), dateString)}
                </p>
              </div>
              <hr></hr>
              <div className='post-preview'>
                <Link route='/blogs/blogId'>
                  <a>
                    <h2 className='post-title'>Very Nice Blog Post</h2>
                    <h3 className='post-subtitle'>
                      How I Start Porgramming...
                    </h3>
                  </a>
                </Link>
                <p className='post-meta'>
                  Posted by
                  <a href='#'> Filip Jerga </a>
                  {format(new Date(), dateString)}
                </p>
              </div>
              <hr></hr>
            </React.Fragment>
          }
          <div className='clearfix'>
            <a className='btn btn-primary float-right' href='#'>
              Older Posts &rarr;
            </a>
          </div>
        </Grid>
      </Grid>

      {/* <footer>
          <Container>
            <Row>
              <div className="col-lg-8 col-md-10 mx-auto">
                <ul className="list-inline text-center">
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="fa-stack fa-lg">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="fa-stack fa-lg">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="fa-stack fa-lg">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>
                </ul>
                <p className="copyright text-muted">Copyright &copy; Filip Jerga 2018</p>
              </div>
            </Row>
          </Container>
        </footer> */}
    </PageLayout>
  );
};

// About.propTypes = {
//   classes: PropTypes.objectOf(PropTypes.object).isRequired,
//   auth: PropTypes.objectOf(PropTypes.object).isRequired,
// };

// export default withStyles(styles)(Blogs);
export default Blogs;
