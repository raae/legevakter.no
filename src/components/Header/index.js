import React from "react";
import Link from "gatsby-link";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  withStyles
} from "material-ui";
import InfoOutlineIcon from "material-ui-icons/InfoOutline";
import LocalHospitalIcon from "material-ui-icons/LocalHospital";

const styles = theme => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  logo: {
    fontSize: "150%",
    marginLeft: theme.spacing.unit * -1.5
  },
  title: {
    marginRight: theme.spacing.unit * 2,
    textDecoration: "inherit"
  },
  menu: {
    marginLeft: "auto"
  }
});

const Header = ({ classes }) => (
  <AppBar position="sticky">
    <Toolbar className={classes.toolbar}>
      <IconButton size="large" color="inherit" component={Link} to="/">
        <LocalHospitalIcon className={classes.logo} />
      </IconButton>
      <Typography
        className={classes.title}
        variant="title"
        color="inherit"
        component={Link}
        to="/"
      >
        Legevakter i Norge
      </Typography>
      <IconButton
        className={classes.menu}
        color="inherit"
        component={Link}
        to="/info"
      >
        <InfoOutlineIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Header);
