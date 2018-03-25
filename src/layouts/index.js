import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { withStyles } from "material-ui";
import withRoot from "../withRoot";

import Header from "../components/Header";

const styles = theme => ({
  main: {
    maxWidth: "32rem"
  }
});

const TemplateWrapper = ({ data, children, classes }) => (
  <div>
    <Helmet>
      <meta name="title" content={data.site.siteMetadata.title} />
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="keywords" content={data.site.siteMetadata.keywords} />
    </Helmet>

    <main className={classes.main}>
      <Header />
      {children()}
    </main>
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
  }
`;

export default withRoot(withStyles(styles)(TemplateWrapper));
