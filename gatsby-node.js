const path = require("path");

// create slug field for each markdown file
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md");

    createNodeField({ node, name: "slug", value: slug });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const markdownTemplate = path.resolve("./src/templates/MarkdownPost.tsx");
  const contentfulTemplate = path.resolve("./src/templates/ContentfulPost.tsx");
  const firebaseTemplate = path.resolve("./src/templates/FirebasePost.tsx");

  const res = await graphql(`
    query slugQuery {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      allContentfulChessBlog {
        edges {
          node {
            slug
          }
        }
      }
      allFirebasePosts {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  res.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      component: markdownTemplate,
      path: `/news/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    });
  });

  res.data.allContentfulChessBlog.edges.forEach((edge) => {
    createPage({
      component: contentfulTemplate,
      path: `/news/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });

  res.data.allFirebasePosts.edges.forEach((edge) => {
    createPage({
      component: firebaseTemplate,
      path: `/news/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
