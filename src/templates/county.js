import React from "react";
import Link from "gatsby-link";
import { parseOpeningHours, isOpen } from "../helpers/health-service";
import HealthService from "../components/HealthService";
import { Typography, withStyles } from "material-ui";

const styles = theme => ({
  back: {
    margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 4}px`,
    display: "flex",
    alignItems: "center"
  }
});

const CountyPage = ({ healthServices, classes }) => {
  const now = new Date();

  return (
    <div>
      <div className={classes.back}>
        <Typography component={Link} to="/">
          ← Tilbake til fylkesoversikt
        </Typography>
      </div>

      {healthServices.map(({ node }, index) => {
        if (!Array.isArray(node.openingHours.hours)) {
          const parsedHours = parseOpeningHours(node.openingHours.hours, now);
          node.openingHours.hours = parsedHours;
        }
        const open = isOpen(node.openingHours.hours, now);
        node.openingHours.open = open;

        return <HealthService key={index} {...node} />;
      })}
    </div>
  );
};

export default withStyles(styles)(CountyPage);
