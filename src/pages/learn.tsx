import React from "react";
import Layout from "../layout/Layout";
import Analysis from "../data/svg/analysis.svg";
import Human from "../data/svg/human.svg";
import Ai from "../data/svg/ai.svg";
import Puzzle from "../data/svg/puzzle.svg";
import "../scss/learn.scss";
import Head from "../head/Head";

export default function learn() {
  return (
    <Layout>
      <Head
        title="Learn"
        description="Learn how to improve your chess skills. Solve puzzles. Play against computer. Play against humans. Analyse games."
      />
      <div className="learn">
        <h1 className="title">Learn</h1>
        <div className="content">
          <div className="section card">
            <h2 className="mediumTitle">Solve puzzles</h2>
            <p>Solve at least 8 puzzles a day to improve your skill.</p>
            <Puzzle className="learnImg" />
          </div>
          <div className="section card">
            <h2 className="mediumTitle">Play against computer</h2>
            <p>
              Try your strategies against computer and see what's working and
              what's not.
            </p>
            <Ai className="learnImg" />
          </div>
          <div className="section card">
            <h2 className="mediumTitle">Play against humans</h2>
            <p>Challenge people accross the globe to a game of chess online.</p>
            <Human className="learnImg" />
          </div>
          <div className="section card">
            <h2 className="mediumTitle">Analyse games</h2>
            <p>
              Analyse your moves, remember your mistakes and try to make best
              moves.
            </p>
            <Analysis className="learnImg" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
