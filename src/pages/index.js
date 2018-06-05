import React from "react";
import Link from "gatsby-link";
import { parseOpeningHours, isOpen } from "../helpers/health-service";
import County from "../components/County";

const AppPage = ({ healthServices, counties }) => {
  return (
    <div>
      {counties.map(({ node }, index) => {
        return <County key={index} county={node} />;
      })}
    </div>
  );
};

export default AppPage;
