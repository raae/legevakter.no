import React from "react";
import { Typography, Paper, withStyles } from "material-ui";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2
  }
});

const NotFoundPage = ({ classes }) => (
  <Typography component="div" className={classes.root}>
    <h1>Ojsann</h1>
    <p>Denne url'en eksisterer ikke.</p>
  </Typography>
);

export default withStyles(styles)(NotFoundPage);
