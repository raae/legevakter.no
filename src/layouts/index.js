import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { CssBaseline, withStyles } from "material-ui";

import Header from "../components/Header";

const styles = theme => ({
  main: {
    maxWidth: "32rem"
  }
});

const TemplateWrapper = ({ data, children, classes }) => (
  <div>
    <CssBaseline />

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

export default withStyles(styles)(TemplateWrapper);
