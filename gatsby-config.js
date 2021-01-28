module.exports = {
  siteMetadata: {
    title: "chess-blog",
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/data.json`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
  ],
};
