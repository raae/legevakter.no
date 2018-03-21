import React from "react";
import Link from "gatsby-link";
import { AppBar, Toolbar, Typography, Button, withStyles } from "material-ui";

const styles = theme => ({
  baseline: {
    display: "flex",
    alignItems: "baseline"
  },
  title: {
    marginRight: theme.spacing.unit * 2,
    textDecoration: "inherit",
    transition: "all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)"
    }
  },
  button: {
    margin: theme.spacing.unit,
    border: "1px solid transparent"
  },
  buttonActive: {
    border: "1px solid"
  }
});

const Header = ({ classes }) => (
  <AppBar>
    <Toolbar>
      <div className={classes.baseline}>
        <Typography
          className={classes.title}
          variant="title"
          color="inherit"
          component={Link}
          to="/"
        >
          Legevakter i Norge
        </Typography>
        <Button
          exact
          className={classes.button}
          activeClassName={classes.buttonActive}
          color="inherit"
          component={Link}
          to="/"
        >
          About
        </Button>
        <Button
          className={classes.button}
          activeClassName={classes.buttonActive}
          color="inherit"
          component={Link}
          to="/app"
        >
          The app
        </Button>
      </div>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Header);
