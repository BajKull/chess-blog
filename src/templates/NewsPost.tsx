import React from "react";
import Layout from "../layout/Layout";
import { graphql } from "gatsby";
import Tags from "../components/Tags";

export const post = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        author
        date
        tags
        title
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
`;

export default function NewsPost({ data }) {
  return (
    <Layout>
      <div className="postContainer">
        <div className="post">
          <h2 className="mediumTitle">
            {data.markdownRemark.frontmatter.title}
          </h2>
          <div className="flex">
            <p className="newsAuthor">
              By {data.markdownRemark.frontmatter.author}
            </p>
            <Tags tags={data.markdownRemark.frontmatter.tags} />
          </div>
          <p className="newsDate">{data.markdownRemark.frontmatter.date}</p>
        </div>
        <div
          className="postContent"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></div>
      </div>
    </Layout>
  );
}
