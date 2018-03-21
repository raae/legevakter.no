import React from "react";
import Link from "gatsby-link";
import HealthService from "../components/HealthService";

const AppPage = ({ data }) => {
  return (
    <div>
      {data.allHealthService.edges.map(({ node }, index) => (
        <HealthService key={index} {...node} />
      ))}
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
