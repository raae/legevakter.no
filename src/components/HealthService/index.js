import React from "react";
import Link from "gatsby-link";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Collapse,
  IconButton,
  withStyles
} from "material-ui";
import classnames from "classnames";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import PhoneIcon from "material-ui-icons/Phone";

import { format, isSameDay } from "date-fns";
import nbLocale from "date-fns/locale/nb";

import OpeningHours from "../OpeningHours";
import NoSSR from "../commons/NoSSR";

const formatOptions = {
  locale: nbLocale
};

const styles = theme => ({
  card: {
    margin: theme.spacing.unit * 2
  },
  header: {
    display: "flex",
    justifyContent: "space-between"
  },
  location: {
    marginBottom: theme.spacing.unit * 2
  },
  town: {
    textTransform: "capitalize"
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing.unit * -2
  },
  avatar: {
    width: theme.spacing.unit * 3,
    height: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit * -1
  },
  phone: {
    width: theme.spacing.unit * 2.5
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    width: theme.spacing.unit * 2.5,
    marginRight: theme.spacing.unit * -1
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
});

class HealthService extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { name, phone, location, openingHours, classes } = this.props;
    return (
      <Card component="article" className={classes.card}>
        <CardContent>
          <div className={classes.header}>
            <Typography className={classes.location} color="textSecondary">
              {location.county} / {location.municipality}{" "}
              {location.town && (
                <span className={classes.town}>
                  / {location.town.toLowerCase()}
                </span>
              )}
            </Typography>
            <NoSSR>
              <Typography>
                <strong>{openingHours.open ? "ÅPENT" : "STENGT"}</strong>
              </Typography>
            </NoSSR>
          </div>

          <Typography variant="headline" gutterBottom>
            {name}
          </Typography>
          {location.street && (
            <Typography variant="subheading" gutterBottom>
              {location.street}
            </Typography>
          )}
        </CardContent>
        <CardActions className={classes.actions}>
          <Button component="a" href="tel:{phone}">
            <Avatar className={classes.avatar}>
              <PhoneIcon className={classes.phone} />
            </Avatar>
            &nbsp;{phone}
          </Button>
          <Button
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            Se åpningstider&nbsp;
            <ExpandMoreIcon
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
            />
          </Button>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <OpeningHours {...openingHours} />
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default withStyles(styles)(HealthService);
