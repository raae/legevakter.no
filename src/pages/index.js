import React from "react";
import Link from "gatsby-link";
import { parseOpeningHours, isOpen } from "../helpers/health-service";
import HealthService from "../components/HealthService";

const AppPage = ({ healthServices }) => {
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

export default AppPage;
