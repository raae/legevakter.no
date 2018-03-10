import { parseOpeningHours, isOpen } from "./health-service";

describe("Helpers for Health Service Data", () => {
  describe("#parseOpeningHours", () => {
    test("DISTR LEGEN I ROLLAG", () => {
      expect(
        parseOpeningHours(
          "540-900,1980-2340,3420-3780,4860-5220,6300-6660",
          new Date(2018, 2, 1)
        )
      ).toEqual([
        {
          opening: new Date(2018, 1, 26, 9),
          closing: new Date(2018, 1, 26, 15)
        },
        {
          opening: new Date(2018, 1, 27, 9),
          closing: new Date(2018, 1, 27, 15)
        },
        {
          opening: new Date(2018, 1, 28, 9),
          closing: new Date(2018, 1, 28, 15)
        },
        {
          opening: new Date(2018, 2, 1, 9),
          closing: new Date(2018, 2, 1, 15)
        },
        {
          opening: new Date(2018, 2, 2, 9),
          closing: new Date(2018, 2, 2, 15)
        }
      ]);
    });

    test("LEGETJENESTEN I TYNSET", () => {
      expect(
        parseOpeningHours(
          "930-1920,2370-3360,3810-4800,5250-6240,6690-10560",
          new Date(2018, 2, 1)
        )
      ).toEqual([
        {
          opening: new Date(2018, 1, 26, 15, 30),
          closing: new Date(2018, 1, 27, 8)
        },
        {
          opening: new Date(2018, 1, 27, 15, 30),
          closing: new Date(2018, 1, 28, 8)
        },
        {
          opening: new Date(2018, 1, 28, 15, 30),
          closing: new Date(2018, 2, 1, 8)
        },
        {
          opening: new Date(2018, 2, 1, 15, 30),
          closing: new Date(2018, 2, 2, 8)
        },
        {
          opening: new Date(2018, 2, 2, 15, 30),
          closing: new Date(2018, 2, 5, 8)
        }
      ]);
    });
  });

  describe("#isOpen", () => {
    test("DISTR LEGEN I ROLLAG", () => {
      const openingHours = [
        {
          opening: new Date(2018, 1, 26, 9),
          closing: new Date(2018, 1, 26, 15)
        },
        {
          opening: new Date(2018, 1, 27, 9),
          closing: new Date(2018, 1, 27, 15)
        },
        {
          opening: new Date(2018, 1, 28, 9),
          closing: new Date(2018, 1, 28, 15)
        },
        {
          opening: new Date(2018, 2, 1, 9),
          closing: new Date(2018, 2, 1, 15)
        },
        {
          opening: new Date(2018, 2, 2, 9),
          closing: new Date(2018, 2, 2, 15)
        }
      ];
      expect(isOpen(openingHours, new Date(2018, 1, 27, 5))).toEqual(false);
      expect(isOpen(openingHours, new Date(2018, 1, 27, 10))).toEqual(true);
      expect(isOpen(openingHours, new Date(2018, 2, 1, 8))).toEqual(false);
      expect(isOpen(openingHours, new Date(2018, 2, 1, 10))).toEqual(true);
    });

    test("LEGETJENESTEN I TYNSET", () => {
      const openingHours = [
        {
          opening: new Date(2018, 1, 26, 15, 30),
          closing: new Date(2018, 1, 27, 8)
        },
        {
          opening: new Date(2018, 1, 27, 15, 30),
          closing: new Date(2018, 1, 28, 8)
        },
        {
          opening: new Date(2018, 1, 28, 15, 30),
          closing: new Date(2018, 2, 1, 8)
        },
        {
          opening: new Date(2018, 2, 1, 15, 30),
          closing: new Date(2018, 2, 2, 8)
        },
        {
          opening: new Date(2018, 2, 2, 15, 30),
          closing: new Date(2018, 2, 5, 8)
        }
      ];

      expect(isOpen(openingHours, new Date(2018, 1, 27, 11))).toEqual(false);
      expect(isOpen(openingHours, new Date(2018, 1, 27, 17))).toEqual(true);
      expect(isOpen(openingHours, new Date(2018, 2, 1, 9))).toEqual(false);
      expect(isOpen(openingHours, new Date(2018, 2, 2, 6))).toEqual(true);
    });
  });
});
