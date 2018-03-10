import React from "react";
import Link from "gatsby-link";
import { format, isSameDay } from "date-fns";
import nbLocale from "date-fns/locale/nb";

import { parseOpeningHours, isOpen } from "../../helpers/health-service";
import OpeningHours from "../OpeningHours";

const formatOptions = {
  locale: nbLocale
};

const HealthService = ({ name, phone, address, openingHours }) => (
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
    <OpeningHours {...openingHours} />
  </article>
);

export default HealthService;
