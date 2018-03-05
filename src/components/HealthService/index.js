import React from "react";
import Link from "gatsby-link";

const HealthService = ({ name, phone, address }) => (
  <article>
    <h2>{name}</h2>
    <p>
      <strong>
        <a href="tel:{phone}">{phone}</a>
      </strong>
    </p>
    {address.street && (
      <address>
        {address.street}
        <br />
        {address.postalCode}&nbsp;{address.postalTown}
      </address>
    )}
  </article>
);

export default HealthService;
