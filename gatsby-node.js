require("dotenv").config({
  path: ".env"
});

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-html") {
    config.loader("null", {
      test: /mapbox-gl/,
      loader: "null-loader"
    });
  }
};
