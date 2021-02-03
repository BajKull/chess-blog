import { graphql } from "gatsby";
import React from "react";
import Tags from "../components/Tags";
import Head from "../head/Head";
import Layout from "../layout/Layout";

export const post = graphql`
  query($slug: String!) {
    firebasePosts(slug: { eq: $slug }) {
      author
      date
      excerpt
      html
      featuredImage
      slug
      tags
      title
    }
  }
`;

export default function FirebasePost({ data }) {
  return (
    <Layout>
      <Head
        title={data.firebasePosts.title}
        description={data.firebasePosts.html.join(" ")}
      />
      <div className="postContainer">
        <div className="post">
          <div className="info">
            <h2 className="mediumTitle">{data.firebasePosts.title}</h2>
            <div className="flex">
              <p className="newsAuthor">By {data.firebasePosts.author}</p>
              <Tags tags={data.firebasePosts.tags} />
            </div>
            <p className="newsDesc">{data.firebasePosts.excerpt}</p>
            <p className="newsDate">{data.firebasePosts.date}</p>
          </div>
          <div className="newsImg">
            <img src={data.firebasePosts.featuredImage} alt="" />
          </div>
        </div>
        <div className="postContent">
          {data.firebasePosts.html.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
      </div>
    </Layout>
  );
}
