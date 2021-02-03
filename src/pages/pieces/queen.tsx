import React from "react";
import queen1 from "../../data/images/queen1.jpg";
import Head from "../../head/Head";
import Layout from "../../layout/Layout";

export default function queen() {
  return (
    <Layout>
      <Head
        title="Queen"
        description="The queen moves any number of vacant squares in any direction:
        forwards, backwards, left, right, or diagonally, in a straight line."
      />
      <div className="piece">
        <h1 className="title">Queen</h1>
        <div className="section">
          <p>
            The queen moves any number of vacant squares in any direction:
            forwards, backwards, left, right, or diagonally, in a straight line.
          </p>
          <img src={queen1} alt="" className="sectionImg" />
        </div>
      </div>
    </Layout>
  );
}
