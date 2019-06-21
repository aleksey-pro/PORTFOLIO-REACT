import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';

import auth0 from '../../services/auth0';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Header extends Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogin = () => {
    auth0.login();
  };

  handleLogout = () => {
    auth0.logout();
  };

  render() {
    const { classes, toggleMenuBar, isAuthenticated, user } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div className={classes.root}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              onClick={toggleMenuBar}
              className={classes.menuButton}
              color='inherit'
              aria-label='Menu'
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' className={classes.grow}>
              WEB-PROFI.SITE
            </Typography>
            <IconButton
              aria-owns={open ? 'menu-appbar' : undefined}
              aria-haspopup='true'
              onClick={this.handleMenu}
              color='inherit'
            >
              {isAuthenticated && user && (
                <React.Fragment>
                  <span>{user.payload.name}</span>
                  <Avatar alt={user.payload.name} src={user.payload.picture} />
                </React.Fragment>
              )}
              {!isAuthenticated && <AccountCircle />}
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={this.handleClose}
            >
              {!isAuthenticated && (
                <MenuItem onClick={() => this.handleLogin()}>Login</MenuItem>
              )}
              {isAuthenticated && (
                <MenuItem onClick={() => this.handleLogout()}>Logout</MenuItem>
              )}
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
