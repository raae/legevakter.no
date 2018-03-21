import React from "react";
import Link from "gatsby-link";
import { parseOpeningHours, isOpen } from "../helpers/health-service";
import HealthService from "../components/HealthService";

const AppPage = ({ data }) => {
  return (
    <div>
      {data.allHealthService.edges.map(({ node }, index) => {
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

export const query = graphql`
  query HealthServiceQuery {
    allHealthService {
      edges {
        node {
          name
          phone
          openingHours {
            hours
            comment
          }
          location {
            street
            town
            municipality
            county
          }
        }
      }
    }
  }
`;

export default AppPage;
