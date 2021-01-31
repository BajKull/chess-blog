import React from "react";
import bishop1 from "../../data/images/bishop1.jpg";
import bishop2 from "../../data/images/bishop2.jpg";
import Layout from "../../layout/Layout";

export default function bishop() {
  return (
    <Layout>
      <div className="piece">
        <h1 className="title">Bishop</h1>
        <div className="section">
          <p>
            The bishop moves any number of vacant squares diagonally in a
            straight line. Consequently, a bishop stays on squares of the same
            color throughout a game.
          </p>
          <img src={bishop1} alt="" className="sectionImg" />
        </div>
        <div className="section">
          <p>
            The two bishops each player starts with move on squares of opposite
            colors.
          </p>
          <img src={bishop2} alt="" className="sectionImg" />
        </div>
      </div>
    </Layout>
  );
}
