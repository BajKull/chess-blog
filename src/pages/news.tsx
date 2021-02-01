import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Tags from "../components/Tags";
import Layout from "../layout/Layout";
import "../scss/news.scss";

export default function news() {
  const markdownPosts = useStaticQuery(graphql`
    query mdQuery {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            excerpt
            frontmatter {
              date
              title
              author
              tags
            }
          }
        }
      }
      allDataJson {
        edges {
          node {
            tags {
              color
              name
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
        {markdownPosts.allMarkdownRemark.edges.map((post) => (
          <Link
            to={`/news/${post.node.fields.slug}`}
            className="post"
            key={post.node.fields.slug}
          >
            <h2 className="mediumTitle">{post.node.frontmatter.title}</h2>
            <div className="flex">
              <p className="newsAuthor">By {post.node.frontmatter.author}</p>

              <Tags tags={post.node.frontmatter.tags} />
            </div>
            <p className="newsDesc">{post.node.excerpt}</p>
            <p className="newsDate">{post.node.frontmatter.date}</p>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
