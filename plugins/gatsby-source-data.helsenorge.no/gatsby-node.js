const fetch = require("node-fetch");
const crypto = require("crypto");
const path = require("path");

createHealthServiceNode = data => {
  const nodeFields = {
    id: data.OrganizationNumber,
    name: data.DisplayName,
    location: {
      street: data.VisitAddressStreet,
      town: data.VisitAddressPostName,
      municipality: data.MunicipalityName,
      county: data.CountyName,
      countyCode: data.CountyCode,
      lat: data.Latitude,
      lng: data.Longitude
    },
    phone: data.Phone,
    openingHours: {
      hours: data.OpeningHours,
      comment: data.OpeningHoursComment
    }
  };
  return {
    ...nodeFields,
    parent: null,
    children: [],
    internal: {
      type: `HealthService`,
      contentDigest: crypto
        .createHash(`md5`)
        .update(JSON.stringify(nodeFields))
        .digest(`hex`)
    }
  };
};

createCountyNode = data => {
  const nodeFields = {
    id: data.CountyCode,
    name: data.CountyName,
    sortOrder: data.SortOrder
  };
  return {
    ...nodeFields,
    parent: null,
    children: [],
    internal: {
      type: `County`,
      contentDigest: crypto
        .createHash(`md5`)
        .update(JSON.stringify(nodeFields))
        .digest(`hex`)
    }
  };
};

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;

  for (let countyId of COUNTIES) {
    const response = await fetch(
      `http://data.helsenorge.no/healthservices?$top=100&$filter=substringof('${countyId}',CountyCode)`
    );
    const data = await response.json();
    const nodes = [];

    data.forEach(item => {
      item.CountyCode = item.CountyCode.trim();
      item.SortOrder = item.CountyCode.trim();
      if (item.CountyCode === "16" || item.CountyCode === "17") {
        item.CountyCode = "50";
        item.CountyName = "Trøndelag";
      }
      nodes.push(createHealthServiceNode(item));
      nodes.push(createCountyNode(item));
    });

    nodes.forEach(item => {
      createNode(item);
    });
  }
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const countyTemplate = path.resolve(`src/templates/county.js`);
    resolve(
      graphql(
        `
          {
            allCounty(sort: { fields: sortOrder, order: DESC }) {
              edges {
                node {
                  id
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        result.data.allCounty.edges.forEach(({ node }) => {
          const countyId = `${node.id}`;

          createPage({
            path: countyId,
            component: countyTemplate
          });
        });
      })
    );
  });
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
  "16", // Sør-Trøndelag, No longer in use
  "17", // Nord-Trøndelag, No longer in use
  "18",
  "19",
  "20",
  "50" // The new Trøndelag
];
