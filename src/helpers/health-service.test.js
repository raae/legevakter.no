const { parseOpeningHours } = require("./health-service");

test("return input", () => {
  expect(parseOpeningHours("input")).toBe("input");
});
