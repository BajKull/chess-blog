import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import puzzle from "../data/images/puzzle.png";
import "../scss/puzzle.scss";

export default function PuzzleOfDay() {
  const data = useStaticQuery(graphql`
    query PuzzleQuery {
      allDataJson {
        edges {
          node {
            puzzleOfDay
          }
        }
      }
    }
  `);

  const showMove = (e) => {
    e.target.classList.remove("hidden");
  };

  return (
    <div className="puzzle">
      <div className="content">
        <h1 className="puzzleTitle">Puzzle of the day</h1>
        <h2 className="puzzleSubtitle">
          Treat your brain with a little exercise!
        </h2>
        <div className="container">
          <img src={puzzle} alt="" className="puzzleImg" />
          <div className="moves">
            <p className="turn">White's move</p>
            {data.allDataJson.edges[0].node.puzzleOfDay.map(
              (moves: string[]) => (
                <div className="move" onClick={(e) => showMove(e)}>
                  <span className="hidden" />
                  {moves.map((move: React.ReactNode) => (
                    <p>{move}</p>
                  ))}
                </div>
              )
            )}
            <p className="tip">Click on the box to reveal the move</p>
          </div>
        </div>
      </div>
    </div>
  );
}
