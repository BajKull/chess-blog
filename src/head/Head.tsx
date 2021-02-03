import React from "react";
import { Helmet } from "react-helmet";
import logo from "../data/images/logo.png";

export default function Head({ title, description }) {
  return (
    <Helmet>
      <title>{`Chess-blog ${title}`}</title>
      <meta name="description" content={description} />
      <meta name="title" content={`Chess-blog ${title}`}></meta>
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://chess-blog.netlify.app/" />
      <meta property="og:title" content="Chess-blog" />
      <meta property="og:image" content={logo} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://chess-blog.netlify.app/" />
      <meta property="twitter:title" content="Chess-blog." />
      <meta property="twitter:image" content={logo} />
    </Helmet>
  );
}
