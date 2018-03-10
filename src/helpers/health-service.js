import { startOfWeek, addMinutes, isWithinRange } from "date-fns";

export const parseOpeningHours = (openingHours, today) => {
  const baseline = startOfWeek(today, { weekStartsOn: 1 });
  return openingHours
    .split(",")
    .map(part => part.split("-"))
    .map(([opening, closing]) => ({
      opening: addMinutes(baseline, opening),
      closing: addMinutes(baseline, closing)
    }));
};

export const isOpen = (openingHours, datetime) => {
  return openingHours.reduce(
    (acc, { opening, closing }) =>
      acc || isWithinRange(datetime, opening, closing),
    false
  );
};
