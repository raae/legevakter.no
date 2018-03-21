module.exports = {
  siteMetadata: {
    title: "Legevakter i Norge",
    description: "Finn nærmeste legevakt.",
    keywords: "legevakt, skade, akutt"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-source-data.helsenorge.no",
    {
      resolve: "gatsby-plugin-material-ui",
      options: {
        pathToTheme: "src/themes/default"
      }
    }
  ]
};
