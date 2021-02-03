require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "chess-blog",
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-transformer-remark",
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
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
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-source-firestore",
      options: {
        credential: require("./.env.privateKey.json"),
        types: [
          {
            type: "firebasePosts",
            collection: "posts",
            map: (doc) => ({
              title: doc.title,
              author: doc.author,
              slug: doc.slug,
              date: doc.date,
              featuredImage: doc.featuredImage,
              tags: doc.tags,
              html: doc.html,
              excerpt: doc.excerpt,
            }),
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chess-blog`,
        short_name: `Chess-blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#f67280`,
        display: `standalone`,
        icon: `src/data/images/logo.png`,
      },
    },
  ],
};
