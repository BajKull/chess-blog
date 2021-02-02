import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import ContentfulNews from "../components/ContentfulNews";
import FirebaseNews from "../components/FirebaseNews";
import MarkdownNews from "../components/MarkdownNews";
import Tags from "../components/Tags";
import Layout from "../layout/Layout";
import "../scss/news.scss";

export default function news() {
  return (
    <Layout>
      <div className="posts">
        <h1 className="title">News</h1>
        <MarkdownNews />
        <ContentfulNews />
        <FirebaseNews />
      </div>
    </Layout>
  );
}
