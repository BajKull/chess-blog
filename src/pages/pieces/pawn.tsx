import React from "react";
import pawn1 from "../../data/images/pawn1.jpg";
import pawn2 from "../../data/images/pawn2.jpg";
import pawn3 from "../../data/images/pawn3.jpg";
import pawn4 from "../../data/images/pawn4.jpg";
import pawn5 from "../../data/images/pawn5.jpg";
import Head from "../../head/Head";
import Layout from "../../layout/Layout";

export default function pawn() {
  return (
    <Layout>
      <Head
        title="Pawn"
        description="The pawn moves forward exactly one square, or optionally, two
        squares when on its starting square, toward the opponent's side of
        the board."
      />
      <div className="piece">
        <h1 className="title">Pawn</h1>
        <div className="section">
          <p>
            The pawn moves forward exactly one square, or optionally, two
            squares when on its starting square, toward the opponent's side of
            the board.
          </p>
          <img src={pawn1} alt="" className="sectionImg" />
        </div>
        <div className="section">
          <p>
            When there is an enemy piece one square diagonally ahead of a pawn,
            either left or right, then the pawn may capture that piece.
          </p>
          <img src={pawn2} alt="" className="sectionImg" />
        </div>
        <div className="section">
          <p>
            A pawn can perform a special type of capture of an enemy pawn called
            en passant. It is a special pawn capture that can only occur
            immediately after a pawn makes a move of two squares from its
            starting square, and it could have been captured by an enemy pawn
            had it advanced only one square.
          </p>
          <div className="images">
            <img src={pawn3} alt="" className="sectionImg" />
            <img src={pawn4} alt="" className="sectionImg" />
          </div>
        </div>
        <div className="section">
          <p>
            If the pawn reaches a square on the back rank of the opponent, it
            promotes to the player's choice of a queen, rook, bishop, or knight.
          </p>
          <img src={pawn5} alt="" className="sectionImg" />
        </div>
      </div>
    </Layout>
  );
}
