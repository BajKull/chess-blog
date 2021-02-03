import React from "react";
import Layout from "../layout/Layout";
import { graphql, useStaticQuery } from "gatsby";
import "../scss/openings.scss";
import Head from "../head/Head";

export default function openings() {
  const openings = useStaticQuery(graphql`
    query openingsQuery {
      allFile(filter: { relativeDirectory: { eq: "images/openings" } }) {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Head
        title="Openings"
        description={`Chess openings.${openings.allFile.edges.reduce(
          (text: string, edge: { node: { name: string } }) =>
            text + " " + edge.node.name,
          ""
        )}`}
      />
      <div className="openings">
        <h1 className="title">Chess openings</h1>
        <div className="openingsContainer">
          {openings.allFile.edges.map((opening) => (
            <div className="card" key={opening.node.name}>
              <h2 className="mediumTitle">{opening.node.name}</h2>
              <div className="openingImgContainer">
                <img src={opening.node.publicURL} className="openingImg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
