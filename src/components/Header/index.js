import React from "react";
import Link from "gatsby-link";
import { AppBar, Toolbar, Typography, Button, withStyles } from "material-ui";
import InfoOutlineIcon from "material-ui-icons/InfoOutline";

const styles = theme => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {
    marginRight: theme.spacing.unit * 2,
    textDecoration: "inherit",
    transition: "all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)"
    }
  }
});

const Header = ({ classes }) => (
  <AppBar position="sticky">
    <Toolbar className={classes.toolbar}>
      <Typography
        className={classes.title}
        variant="title"
        color="inherit"
        component={Link}
        to="/"
      >
        Legevakter i Norge
      </Typography>
      <Button color="inherit" component={Link} to="/info">
        <InfoOutlineIcon />
      </Button>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Header);
