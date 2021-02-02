import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Tags from "./Tags";

export default function FirebaseNews() {
  const posts = useStaticQuery(graphql`
    query firebaseNewsQuery {
      allFirebasePosts {
        edges {
          node {
            author
            date
            featuredImage
            html
            slug
            tags
            title
            excerpt
          }
        }
      }
    }
  `);

  return (
    <>
      {posts.allFirebasePosts.edges.map((post) => (
        <div className="post" key={post.node.slug}>
          <div className="info">
            <Link to={`/news/${post.node.slug}`}>
              <h2 className="mediumTitle">{post.node.title}</h2>
            </Link>
            <div className="flex">
              <p className="newsAuthor">By {post.node.author}</p>

              <Tags tags={post.node.tags} />
            </div>
            <p className="newsDesc">{post.node.excerpt}</p>
            <p className="newsDate">{post.node.date}</p>
          </div>
          <div className="newsImg">
            <Link to={`/news/${post.node.slug}`}>
              <img src={post.node.featuredImage} alt="" />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
