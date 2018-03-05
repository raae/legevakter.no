import React from "react";
import Link from "gatsby-link";
import HealthService from "../components/HealthService";

const AppPage = ({ data }) => {
  console.log(data);
  console.log(data.allHealthService);
  return (
    <div>
      {data.allHealthService.edges.map(({ node }, index) => (
        <HealthService key={index} {...node} />
      ))}
      {/* {data.allFile.edges.map(({ node }, index) => (
      <tr key={index}>
        <td>{node.relativePath}</td>
        <td>{node.prettySize}</td>
        <td>{node.extension}</td>
        <td>{node.birthTime}</td>
      </tr>
    ))}
    {data.allHealthService.each(healthServie => {
      <div>{healthServie.name}</div>;
    })} */}
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
          address {
            street
            postalCode
            postalTown
          }
        }
      }
    }
  }
`;

export default AppPage;
