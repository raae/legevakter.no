import React from "react";
import Link from "gatsby-link";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  withStyles
} from "material-ui";

import { format, isSameDay } from "date-fns";
import nbLocale from "date-fns/locale/nb";

import OpeningHours from "../OpeningHours";

const formatOptions = {
  locale: nbLocale
};

const styles = theme => ({
  card: {
    margin: theme.spacing.unit * 2
  },
  location: {
    marginBottom: theme.spacing.unit * 2
  },
  town: {
    textTransform: "capitalize"
  }
});

const HealthService = ({ name, phone, location, openingHours, classes }) => (
  <Card component="article" className={classes.card}>
    <CardContent>
      <Typography className={classes.location} color="textSecondary">
        {location.county} / {location.municipality}{" "}
        {location.town && (
          <span className={classes.town}>/ {location.town.toLowerCase()}</span>
        )}
      </Typography>
      <Typography variant="headline">{name}</Typography>
      <Typography variant="subheading">{location.street}</Typography>
      <OpeningHours {...openingHours} />
    </CardContent>
    <CardActions>
      <Button component="a" href="tel:{phone}" size="small">
        {phone}
      </Button>
    </CardActions>
  </Card>
);

export default withStyles(styles)(HealthService);
