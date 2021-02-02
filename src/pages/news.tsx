import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import ContentfulNews from "../components/ContentfulNews";
import MarkdownNews from "../components/MarkdownNews";
import Tags from "../components/Tags";
import Layout from "../layout/Layout";
import "../scss/news.scss";

export default function news() {
  const posts = useStaticQuery(graphql`
    query newsQuery {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            excerpt(pruneLength: 250)
            frontmatter {
              date
              title
              author
              tags
              featuredImage {
                publicURL
              }
            }
          }
        }
      }
      allContentfulChessBlog {
        edges {
          node {
            author
            slug
            tags
            title
            date
            excerpt
            featuredImage {
              file {
                url
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <div className="posts">
        <h1 className="title">News</h1>
        <MarkdownNews />
        <ContentfulNews />
      </div>
    </Layout>
  );
}
