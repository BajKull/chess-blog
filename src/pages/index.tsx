import React from "react";
import Layout from "../layout/Layout";
import chessboard from "../data/images/chessboard.png";
import "../scss/landing.scss";
import Pawn from "../data/svg/pawn.svg";
import Queen from "../data/svg/queen.svg";

export default function index() {
  return (
    <Layout>
      <div className="landing">
        <div className="content">
          <div className="mainLanding">
            <header className="landingHeader card">
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
          <div className="adventure">
            <h1 className="adventureTitle">Start you chess adventure now!</h1>
            <div className="cards">
              <div className="card">
                <h2>I'm a complete begginer</h2>
                <Pawn className="adventureImg" />
                <button className="mainButton">See more</button>
              </div>
              <div className="card">
                <h2>I already know the basics</h2>
                <Queen className="adventureImg" />
                <button className="mainButton">See more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
