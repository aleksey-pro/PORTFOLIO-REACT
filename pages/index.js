import React, { Component } from 'react'
import PageLayout from '../components/layouts/PageLayout'

import { withStyles, makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { unstable_Box as Box } from '@material-ui/core/Box'
import getPageContext from '../styles/getPageContext';

// const styles = theme => {
//   // console.log(theme);
//   return {
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       // padding: theme.spacing.unit * 2,
//       padding: '16px',
//       textAlign: 'center',
//     //   color: theme.palette.text.secondary,
//     },
//   }
// }

const useStyles = makeStyles(theme => {
  console.log(getPageContext.theme);
  return {
    root: {
      flexGrow: 1,
    },
    paper: {
      // padding: theme.spacing.unit * 2,
      padding: '16px',
      textAlign: 'center',
      // color: `${theme.palette.text.secondary}`,
    },
  }
});

export default function Index() {

  const classes = useStyles();
  
  // render() {
    // const {classes} = this.props
    return (
        <PageLayout title="Index">  
            <Paper className={classes.paper}>
              <Typography variant="h5" component="h1">
                Index Page
              </Typography>
              <Box component="span" m={1} color="text.primary">
                <Button variant="contained" color="primary">Button</Button>
              </Box>
            </Paper>
        </PageLayout>
    )
  // }
}

// export default withStyles(styles)(Index)
// export default Index