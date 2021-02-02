import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Tags from "./Tags";

export default function MarkdownNews() {
  const posts = useStaticQuery(graphql`
    query mdNewsQuery {
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
    }
  `);

  return (
    <>
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
              <img src={post.node.frontmatter.featuredImage.publicURL} alt="" />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
