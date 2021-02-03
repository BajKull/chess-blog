import React from "react";
import rook1 from "../../data/images/rook1.jpg";
import rook2 from "../../data/images/rook2.jpg";
import Head from "../../head/Head";
import Layout from "../../layout/Layout";

export default function rook() {
  return (
    <Layout>
      <Head
        title="Rook"
        description="The rook moves any number of vacant squares forwards, backwards,
        left, or right in a straight line."
      />
      <div className="piece">
        <h1 className="title">Rook</h1>
        <div className="section">
          <p>
            The rook moves any number of vacant squares forwards, backwards,
            left, or right in a straight line.
          </p>
          <img src={rook1} alt="" className="sectionImg" />
        </div>
        <div className="section">
          <p>
            It also takes part, along with the king, in a special move called
            castling.
          </p>
          <img src={rook2} alt="" className="sectionImg" />
        </div>
      </div>
    </Layout>
  );
}
