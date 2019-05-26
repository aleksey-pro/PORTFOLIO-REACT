import React from 'react'

import Header from "../shared/Header"
import Head from 'next/head'
import '../../styles/layout.scss'

import Grid from '@material-ui/core/Grid'
import SideBarLayout from './SideBarLayout'
import MenuBar from '../shared/MenuBar'

class PageLayout extends React.Component {

  state = {
    menu: false
  }

  toggleMenuBar = itemId => {
    console.log('toggleMenuBar');
    this.setState(state => ({ menu: !state.menu }))
    // itemId && this.expandItem(itemId)
  }
  
  render() {
    const {title} = this.props

    return (
      <div class={`page ${title}-page`}>
        <Head>
          <link href="/static/styles/main.css" rel="stylesheet" />
          <meta name="title" content="Aleksey Isaev portfolio" />
          <meta name="description" content='Aleksey Isaev portfolio'  />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          {title && (
            <title>{`${
              title ? `${title} | ` : ''
            }ALEXEY ISAEV BLOG SITE`}</title>
          )}
        </Head>
        <Header toggleMenuBar={this.toggleMenuBar}/>
        <MenuBar
          open={this.state.menu}
          toggleMenuBar={this.toggleMenuBar}
          // drawerItems={this.state.drawerItems}
          // expandItem={this.expandItem}
          // drawerSubItems={this.state.drawerSubItems}
          // expandSubItem={this.expandSubItem}
        />
        <Grid container>
          <Grid item xs={12} sm={4} lg={4} justify='flex-start'>
            <SideBarLayout /> 
          </Grid>
          <Grid item xs={12} sm={8} lg={8} justify='flex-start'>
            {this.props.children}
          </Grid>            
        </Grid>
      </div>
    )
  }
}

PageLayout.defaultProps = {
  "title": 'Custom'
}

export default PageLayout

