const fetch = require("node-fetch");
const crypto = require("crypto");

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;

  for (let countyId of COUNTIES) {
    const response = await fetch(
      `http://data.helsenorge.no/healthservices?$top=100&$filter=substringof('${countyId}',CountyCode)`
    );
    const data = await response.json();

    data.forEach(item => {
      createNode({
        id: item.OrganizationNumber,
        name: item.DisplayName,
        location: {
          street: item.VisitAddressStreet,
          town: item.VisitAddressPostName,
          municipality: item.MunicipalityName,
          county: item.CountyName
        },
        phone: item.Phone,
        openingHours: {
          hours: item.OpeningHours,
          comment: item.OpeningHoursComment
        },
        parent: null,
        children: [],
        internal: {
          type: `HealthService`,
          contentDigest: crypto
            .createHash(`md5`)
            .update(JSON.stringify(item))
            .digest(`hex`)
        }
      });
    });
  }
};

const COUNTIES = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  // "13" No longer in use
  "12",
  "14",
  "15",
  // "16" No longer in use
  // "17" No longer in use
  "18",
  "19",
  "20",
  "50" // The new Trøndelag
];
