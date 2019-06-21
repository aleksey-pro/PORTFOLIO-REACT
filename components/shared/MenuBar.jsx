import React from 'react';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Link from 'next/link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ActiveLink from '../activeLink';

class MenuBar extends React.Component {
  render() {
    const { toggleMenuBar, open } = this.props;
    return (
      <SwipeableDrawer
        open={open}
        onOpen={toggleMenuBar}
        onClose={toggleMenuBar}
      >
        <style jsx>
          {`
            .nav-link {
              text-decoration: none;
              color: inherit;
            }
            .active {
              color: blue !important;
            }
          `}
        </style>
        <List>
          <ListItem>
            <ActiveLink href='/' activeClassName='active'>
              <a className='nav-link'>Index</a>
            </ActiveLink>
          </ListItem>
          <ListItem>
            <ActiveLink href='/portfolios' activeClassName='active'>
              <a className='nav-link'>Portfolios</a>
            </ActiveLink>
          </ListItem>
          <ListItem>
            <ActiveLink href='/about' activeClassName='active'>
              <a className='nav-link'>About</a>
            </ActiveLink>
          </ListItem>
          <ListItem>
            <ActiveLink href='/cv' activeClassName='active'>
              <a className='nav-link'>CV</a>
            </ActiveLink>
          </ListItem>
        </List>
      </SwipeableDrawer>
    );
  }
}

export default MenuBar;
