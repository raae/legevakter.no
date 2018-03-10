import React, { Fragment } from "react";
import Link from "gatsby-link";
import { format, isSameDay } from "date-fns";
import nbLocale from "date-fns/locale/nb";
import { parseOpeningHours, isOpen } from "../../helpers/health-service";

const formatOptions = {
  locale: nbLocale
};

const OpeningHours = ({ hours, comment }) => {
  const now = new Date();
  const parsedHours = parseOpeningHours(hours, now);
  const open = isOpen(parsedHours, now);
  return (
    <div>
      <p>
        <strong>{open ? "ÅPENT" : "STENGT"}</strong>
        &nbsp;(i dag {format(now, "dddd HH:mm", formatOptions)}).
      </p>
      <ul>
        {parsedHours.map(({ opening, closing }, index) => (
          <li key={index}>
            {format(opening, "dddd: HH:mm", formatOptions)}
            {format(closing, " - HH:mm")}
            {!isSameDay(opening, closing) && (
              <span>{format(closing, " (dddd)", formatOptions)}</span>
            )}
          </li>
        ))}
      </ul>
      {comment && <p>{comment}</p>}
    </div>
  );
};

export default OpeningHours;
