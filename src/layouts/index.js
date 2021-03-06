import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { matchPath } from "react-router";
import { withStyles } from "material-ui";
import withRoot from "../withRoot";

import Header from "../components/Header";
import Map from "../components/Map";

const styles = theme => ({
  root: {
    display: "flex",
    alignItems: "stretch",
    height: "100vh",
    width: "100vw"
  },
  main: {
    flex: "0 0 45%",
    maxWidth: "32rem",
    minWidth: "25rem",
    overflowY: "auto",
    borderRight: `1px solid ${theme.palette.divider}`,
    background: theme.palette.background.default
  },
  map: {
    height: "100%",
    flex: 1
  }
});

const TemplateWrapper = ({ data, children, classes, ...props }) => {
  const match = matchPath(props.location.pathname, {
    path: "/:countyId",
    exact: true,
    strict: false
  });

  const countyId = match && match.params ? match.params.countyId : undefined;

  const healthServices = data.healthServices.edges.filter(
    ({ node }) => node.location.countyCode === countyId
  );

  const counties = data.counties.edges;
  const selectedCounty = counties.find(({ node }) => node.id === countyId);

  const countyClicked = countyId => {
    if (countyId) {
      props.history.push(`${countyId}`);
    }
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <meta name="title" content={data.site.siteMetadata.title} />
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="keywords" content={data.site.siteMetadata.keywords} />
      </Helmet>

      <main className={classes.main}>
        <Header name={selectedCounty ? selectedCounty.node.name : "Norge"} />
        {children({ ...props, healthServices, counties })}
      </main>

      <div className={classes.map}>
        {<Map {...{ healthServices, counties, countyClicked }} />}
      </div>
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    counties: allCounty(sort: { fields: [sortOrder], order: DESC }) {
      edges {
        node {
          id
          name
        }
      }
    }
    healthServices: allHealthService(
      sort: { fields: [location___countyCode, name], order: DESC }
    ) {
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
            countyCode
            lng
            lat
          }
        }
      }
    }
  }
`;

export default withRoot(withStyles(styles)(TemplateWrapper));
