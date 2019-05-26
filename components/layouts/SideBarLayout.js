import React from 'react'

import '../../styles/layout.scss'
import { withStyles, createStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = theme => {
  console.log(theme);
  return {
    paper: {
    // padding: theme.spacing.unit * 2,
    padding: '16px',
    textAlign: 'center',
      // color: `${theme.palette.text.secondary}`
  }
}}


const SideBarLayout = ({classes}) => {

  return (
    <React.Fragment>
        {/* <Grid container spacing={4}> */}
        <Paper className={classes.paper}>
            <Typography variant="h2" component="h21">
            Side Bar
            </Typography>
        </Paper>         
        {/* </Grid> */}
    </React.Fragment>
  )
}

export default withStyles(styles)(SideBarLayout)