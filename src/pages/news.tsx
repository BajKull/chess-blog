import React from "react";
import ContentfulNews from "../components/ContentfulNews";
import FirebaseNews from "../components/FirebaseNews";
import MarkdownNews from "../components/MarkdownNews";
import Head from "../head/Head";
import Layout from "../layout/Layout";
import "../scss/news.scss";

export default function news() {
  return (
    <Layout>
      <Head title="News" description="Chess news from around the world." />
      <div className="posts">
        <h1 className="title">News</h1>
        <MarkdownNews />
        <ContentfulNews />
        <FirebaseNews />
      </div>
    </Layout>
  );
}
