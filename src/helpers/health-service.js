import { startOfWeek, addMinutes } from "date-fns";

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
