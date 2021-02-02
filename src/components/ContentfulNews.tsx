import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Tags from "./Tags";

export default function ContentfulNews() {
  const posts = useStaticQuery(graphql`
    query contentfulNewsQuery {
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
    <>
      {posts.allContentfulChessBlog.edges.map((edge) => (
        <div className="post" key={edge.node.slug}>
          <div className="info">
            <Link to={`/news/${edge.node.slug}`}>
              <h2 className="mediumTitle">{edge.node.title}</h2>
            </Link>
            <div className="flex">
              <p className="newsAuthor">By {edge.node.author}</p>

              <Tags tags={edge.node.tags} />
            </div>
            <p className="newsDesc">{edge.node.excerpt}</p>
            <p className="newsDate">{edge.node.date}</p>
          </div>
          <div className="newsImg">
            <Link to={`/news/${edge.node.slug}`}>
              <img src={edge.node.featuredImage.file.url} alt="" />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
