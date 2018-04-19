import React from "react";
import Link from "gatsby-link";
import { parseOpeningHours, isOpen } from "../helpers/health-service";
import HealthService from "../components/HealthService";

const CountyPage = ({ allHealthService, ...props }) => {
  const healthServices = allHealthService.edges.filter(
    ({ node }) => node.location.countyCode === props.pathContext.countyId
  );
  return (
    <div>
      {healthServices.map(({ node }, index) => {
        const now = new Date();
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

export default CountyPage;
