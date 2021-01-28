import React from "react";
import Layout from "../layout/Layout";
import chessboard from "../data/images/chessboard.png";
import "../scss/landing.scss";

export default function index() {
  return (
    <Layout>
      <div className="landing">
        <div className="content">
          <div className="mainLanding">
            <header className="landingHeader">
              <h1 className="landingTitle">
                Chess is the struggle against the error.
              </h1>
              <h2 className="landingSubtitle">
                When you see a good move, look for a better one.
              </h2>
              <button className="mainButton">Read more</button>
            </header>
            <img src={chessboard} alt="" className="mainIllustration" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
