import React, { Fragment } from "react";
import Link from "gatsby-link";
import { format, isSameDay } from "date-fns";
import {
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Typography,
  withStyles
} from "material-ui";

import nbLocale from "date-fns/locale/nb";

const formatOptions = {
  locale: nbLocale
};

const OpeningHours = ({ hours, comment }) => {
  return (
    <div>
      <Typography color="textSecondary">Åpningstider</Typography>
      <List dense disablePadding>
        {hours.map(({ opening, closing }, index) => (
          <ListItem dense disableGutters key={index}>
            <ListItemText>
              <strong>{format(opening, "dddd: ", formatOptions)}</strong>
              {format(opening, "HH:mm", formatOptions)}
              {format(closing, " - HH:mm")}
              {!isSameDay(opening, closing) && (
                <span>{format(closing, " (dddd)", formatOptions)}</span>
              )}
            </ListItemText>
          </ListItem>
        ))}
        {comment && (
          <ListItem disableGutters>
            <ListItemText>{comment}</ListItemText>
          </ListItem>
        )}
      </List>
    </div>
  );
};

export default OpeningHours;
