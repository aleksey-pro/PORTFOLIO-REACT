/* eslint-disable jsx-a11y/anchor-is-valid  */

import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import Grid from '@material-ui/core/Grid';
import { Link } from '../routes';
import PageLayout from '../components/layouts/PageLayout';

export const Blogs = props => {
  const { auth } = props;
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
    </PageLayout>
  );
};

export default Blogs;
