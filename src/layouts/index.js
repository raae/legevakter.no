import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Legevakter i Norge"
      meta={[
        { name: "description", content: "Finn nærmeste legevakt." },
        { name: "keywords", content: "legevakt, skade, akutt" }
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: "32em",
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
