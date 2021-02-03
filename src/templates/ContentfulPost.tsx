import { graphql } from "gatsby";
import React from "react";
import Tags from "../components/Tags";
import Layout from "../layout/Layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Head from "../head/Head";

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

const convertToPlain = (rtf: string) => {
  rtf = rtf.replace(/\\par[d]?/g, "");
  rtf = rtf.replace(/\{\*?\\[^{}]+}|[{}]|\\\n?[A-Za-z]+\n?(?:-?\d+)?[ ]?/g, "");
  rtf = rtf.replace(/\[\]/g, "");
  rtf = rtf.replace(/\[*"data":,*/g, "");
  rtf = rtf.replace(/\[*"content":,*/g, "");
  rtf = rtf.replace(/\[*"marks":,*/g, "");
  rtf = rtf.replace(/\[*"value":,*/g, "");
  rtf = rtf.replace(/"nodeType":"paragraph"\]*/g, "");
  rtf = rtf.replace(/"nodeType":"document"\]*/g, "");
  rtf = rtf.replace(/"nodeType":"text"\]*/g, "");
  rtf = rtf.replace(/"*,,,"*/g, "");
  rtf = rtf.replace(/\\"/g, "");
  return rtf.replace(/\\'[0-9a-zA-Z]{2}/g, "").trim();
};

export default function ContentfulPost({ data }) {
  return (
    <Layout>
      <Head
        title={data.contentfulChessBlog.title}
        description={convertToPlain(data.contentfulChessBlog.html.raw)}
      />
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
