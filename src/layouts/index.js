import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
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

const TemplateWrapper = ({ data, children, classes, ...props }) => (
  <div className={classes.root}>
    <Helmet>
      <meta name="title" content={data.site.siteMetadata.title} />
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="keywords" content={data.site.siteMetadata.keywords} />
    </Helmet>

    <main className={classes.main}>
      <Header />
      {children({ ...props, allHealthService: data.allHealthService })}
    </main>

    <div className={classes.map}>
      {<Map allHealthService={data.allHealthService} />}
    </div>
  </div>
);

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
            lng
            lat
          }
        }
      }
    }
  }
`;

export default withRoot(withStyles(styles)(TemplateWrapper));
