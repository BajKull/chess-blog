import { graphql } from "gatsby";
import React from "react";
import Tags from "../components/Tags";
import Layout from "../layout/Layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const post = graphql`
  query($slug: String!) {
    contentfulChessBlog(slug: { eq: $slug }) {
      author
      date(formatString: "MM/DD/YYYY")
      excerpt
      featuredImage {
        file {
          url
        }
      }
      html {
        raw
      }
      slug
      tags
      title
    }
  }
`;

export default function ContentfulPost({ data }) {
  console.log(data);
  // console.log(documentToHtmlString(data.contentfulChessBlog.html));
  console.log(JSON.parse(data.contentfulChessBlog.html.raw));
  return (
    <Layout>
      <div className="postContainer">
        <div className="post">
          <div className="info">
            <h2 className="mediumTitle">{data.contentfulChessBlog.title}</h2>
            <div className="flex">
              <p className="newsAuthor">By {data.contentfulChessBlog.author}</p>
              <Tags tags={data.contentfulChessBlog.tags} />
            </div>
            <p className="newsDesc">{data.contentfulChessBlog.excerpt}</p>
            <p className="newsDate">{data.contentfulChessBlog.date}</p>
          </div>
          <div className="newsImg">
            <img src={data.contentfulChessBlog.featuredImage.file.url} alt="" />
          </div>
        </div>
        <div className="postContent">
          {documentToReactComponents(
            JSON.parse(data.contentfulChessBlog.html.raw)
          )}
        </div>
      </div>
    </Layout>
  );
}
