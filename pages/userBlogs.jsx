import React from 'react';
// import PropTypes from 'prop-types';
import matter from 'gray-matter';
import Grid from '@material-ui/core/Grid';
import PageLayout from '../components/layouts/PageLayout';
import withAuth from '../components/hoc/withAuth';
import { Link } from '../routes';

class UserBlogs extends React.Component {
  static async getInitialProps() {
    // Get posts from folder
    const getPosts = ctx => {
      const keys = ctx.keys();
      const values = keys.map(ctx);
      const data = keys.map((key, index) => {
        // Create slug from filename
        const slug = key
          .replace(/^.*[\\/]/, '')
          .split('.')
          .slice(0, -1)
          .join('.');
        const value = values[index];
        const valueStr = Object.values(value).values();
        let document = {};
        // eslint-disable-next-line no-restricted-syntax
        for (const elements of valueStr) {
          document = { ...matter(elements) };
        }
        // Parse document
        return {
          document,
          slug,
        };
      });
      return data;
    };
    return {
      posts: getPosts(require.context('../posts', true, /\.md$/)),
    };
  }

  render() {
    const { auth, posts } = this.props;
    return (
      <PageLayout {...auth} title='Blogs'>
        <h1>Fresh Blogs</h1>
        {posts.map(({ document: { data }, slug }) => (
          <Link
            href={{ pathname: '/userBlog', query: { id: slug } }}
            key={slug}
          >
            <a href='/'>{data.title}</a>
          </Link>
        ))}
      </PageLayout>
    );
  }
}

export default withAuth('siteOwner')(UserBlogs);
// export default UserBlogs;
