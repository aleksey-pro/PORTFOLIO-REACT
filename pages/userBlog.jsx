import React from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import withAuth from '../components/hoc/withAuth';
import PageLayout from '../components/layouts/PageLayout';

class userBlog extends React.Component {
  static async getInitialProps({ query }) {
    let document = {};
    try {
      const post = await import(`${process.env.BASE_URL}/posts/${query.id}.md`);
      document = matter(post.default);
    } catch (err) {
      throw new Error(err);
    }
    return {
      ...document,
    };
  }

  render() {
    const {
      data: { title, writtenBy, date },
      content,
      auth,
    } = this.props;
    return (
      <PageLayout {...auth} title='Blog'>
        <h1>{title}</h1>
        <i>{`Written by ${writtenBy} | ${date}`}</i>
        <ReactMarkdown source={content} />
      </PageLayout>
    );
  }
}

export default withAuth('siteOwner')(userBlog);
