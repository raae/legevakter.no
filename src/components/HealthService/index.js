import React from "react";
import Link from "gatsby-link";
import { format, isSameDay } from "date-fns";
import nbLocale from "date-fns/locale/nb";
import { parseOpeningHours } from "../../helpers/health-service";

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
    <ul>
      {parseOpeningHours(openingHours.hours, new Date()).map(
        ({ opening, closing }, index) => (
          <li key={index}>
            {format(opening, "dddd: HH:mm", formatOptions)}
            {format(closing, " - HH:mm")}
            {!isSameDay(opening, closing) && (
              <span>{format(closing, " (dddd)", formatOptions)}</span>
            )}
          </li>
        )
      )}
    </ul>
  </article>
);

export default HealthService;
