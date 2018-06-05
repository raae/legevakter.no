import React from "react";
import Link from "gatsby-link";
import { Card, CardContent, Typography, withStyles } from "material-ui";

const styles = theme => ({
  link: {
    textDecoration: "none"
  },
  card: {
    margin: theme.spacing.unit * 2
  },
  cardContent: {
    padding: theme.spacing.unit * 3
  }
});

const County = ({ county, classes }) => (
  <Link to={county.id} className={classes.link}>
    <Card component="article" className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography variant="headline">{county.name}</Typography>
      </CardContent>
    </Card>
  </Link>
);

export default withStyles(styles)(County);
