import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../shared/Header';
// import '../../styles/index.scss'

import SideBarLayout from './SideBarLayout';
import MenuBar from '../shared/MenuBar';

class PageLayout extends React.Component {
  state = {
    menu: false,
    // appBar: 'row'
  };

  toggleMenuBar = itemId => {
    // console.log('toggleMenuBar');
    this.setState(state => ({ menu: !state.menu }));
    // itemId && this.expandItem(itemId)
  };

  // toggleAppBar = () => {
  //   this.setState(state => ({ appBar: 'row-reverse' }));
  // };

  render() {
    const { title, isAuthenticated, user } = this.props;
    return (
      <div className={`page ${title}-page`}>
        <Head>
          <link href='/static/styles/main.css' rel='stylesheet' />
          <link href='/static/styles/mde.css' rel='stylesheet' />
          <meta name='title' content='Aleksey Isaev portfolio' />
          <meta name='description' content='Aleksey Isaev portfolio' />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500'
          />
          {title && (
            <title>{`${
              title ? `${title} | ` : ''
            }ALEXEY ISAEV BLOG SITE`}</title>
          )}
        </Head>
        <Header
          toggleMenuBar={this.toggleMenuBar}
          isAuthenticated={isAuthenticated}
          user={user}
        />
        <MenuBar
          open={this.state.menu}
          toggleMenuBar={this.toggleMenuBar}
          // drawerItems={this.state.drawerItems}
          // expandItem={this.expandItem}
          // drawerSubItems={this.state.drawerSubItems}
          // expandSubItem={this.expandSubItem}
        />
        <Container maxWidth='lg' className='container'>
          <Grid container direction='row'>
            <Grid item xs={12}>
              <button type='button' onClick={() => this.toggleAppBar}>
                toggleAppBar
              </button>
            </Grid>
            <Grid item xs={12} sm={4} lg={4}>
              <SideBarLayout />
            </Grid>
            <Grid item xs={12} sm={8} lg={8}>
              {this.props.children}
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

PageLayout.defaultProps = {
  title: 'Title',
};

PageLayout.propTypes = {
  title: PropTypes.any,
};

export default PageLayout;
