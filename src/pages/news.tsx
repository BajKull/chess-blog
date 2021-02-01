import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import ContentfulNews from "../components/ContentfulNews";
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
        {posts.allMarkdownRemark.edges.map((post) => (
          <div className="post" key={post.node.fields.slug}>
            <div className="info">
              <Link to={`/news/${post.node.fields.slug}`}>
                <h2 className="mediumTitle">{post.node.frontmatter.title}</h2>
              </Link>
              <div className="flex">
                <p className="newsAuthor">By {post.node.frontmatter.author}</p>

                <Tags tags={post.node.frontmatter.tags} />
              </div>
              <p className="newsDesc">{post.node.excerpt}</p>
              <p className="newsDate">{post.node.frontmatter.date}</p>
            </div>
            <div className="newsImg">
              <Link to={`/news/${post.node.fields.slug}`}>
                <img
                  src={post.node.frontmatter.featuredImage.publicURL}
                  alt=""
                />
              </Link>
            </div>
          </div>
        ))}
        <ContentfulNews data={posts.allContentfulChessBlog} />
      </div>
    </Layout>
  );
}
