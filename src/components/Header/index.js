import React from "react";
import Link from "gatsby-link";

const Header = () => (
  <div
    style={{
      background: "#CC0000",
      marginBottom: "1.45rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: "32em",
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Legevakter i Norge
        </Link>
      </h1>
    </div>
  </div>
);

export default Header;
