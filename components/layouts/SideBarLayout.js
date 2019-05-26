import React from 'react'

import '../../styles/layout.scss'
import { withStyles, createStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = theme => {
  return {
    paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}}


const SideBarLayout = ({classes}) => {
  return (
    <React.Fragment>
        <Paper className={classes.paper}>
            <Typography variant="h2" component="h3">
            Side Bar
            </Typography>
        </Paper>         
    </React.Fragment>
  )
}

export default withStyles(styles)(SideBarLayout)