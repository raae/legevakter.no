require("dotenv").config({
  path: ".env"
});

exports.modifyWebpackConfig = ({ config, stage }) => {
  config.merge({
    module: {
      noParse: /node_modules\/mapbox-gl\/dist\/mapbox-gl.js/
    }
  });

  if (stage === "build-html") {
    config.loader("null", {
      test: /mapbox-gl/,
      loader: "null-loader"
    });
  }
};
