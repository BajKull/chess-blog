import React from "react";
import Layout from "../layout/Layout";
import { graphql, Link } from "gatsby";
import Tags from "../components/Tags";

export const post = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 250)
      frontmatter {
        author
        date
        tags
        title
        featuredImage {
          publicURL
        }
      }
    }
  }
`;

export default function NewsPost({ data }) {
  return (
    <Layout>
      <div className="postContainer">
        <div className="post">
          <div className="info">
            <h2 className="mediumTitle">
              {data.markdownRemark.frontmatter.title}
            </h2>
            <div className="flex">
              <p className="newsAuthor">
                By {data.markdownRemark.frontmatter.author}
              </p>
              <Tags tags={data.markdownRemark.frontmatter.tags} />
            </div>
            <p className="newsDesc">{data.markdownRemark.excerpt}</p>
            <p className="newsDate">{data.markdownRemark.frontmatter.date}</p>
          </div>
          <div className="newsImg">
            <img
              src={data.markdownRemark.frontmatter.featuredImage.publicURL}
              alt=""
            />
          </div>
        </div>
        <div
          className="postContent"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></div>
      </div>
    </Layout>
  );
}
