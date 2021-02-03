import React from "react";
import king1 from "../../data/images/king1.jpg";
import king2 from "../../data/images/king2.jpg";
import king3 from "../../data/images/king3.jpg";
import king4 from "../../data/images/king4.jpg";
import Head from "../../head/Head";
import Layout from "../../layout/Layout";

export default function king() {
  return (
    <Layout>
      <Head
        title="King"
        description="The king moves exactly one vacant square in any direction: forwards,
        backwards, left, right, or diagonally."
      />
      <div className="piece">
        <h1 className="title">King</h1>
        <div className="section">
          <p>
            The king moves exactly one vacant square in any direction: forwards,
            backwards, left, right, or diagonally.
          </p>
          <img src={king1} alt="" className="sectionImg" />
        </div>
        <div className="section">
          <p>
            However, it cannot move to a square that is under attack by an
            opponent, nor can a player make a move with another piece if it will
            leave the king in check.
          </p>
          <img src={king2} alt="" className="sectionImg" />
        </div>
        <div className="section">
          <p>
            It also has a special move called castling, in which the king moves
            two squares towards one of its own rooks and in the same move, the
            rook jumps over the king to land on the square on the king's other
            side. Castling may only be performed if the king and rook involved
            have never previously been moved in the game, if the king is not in
            check, if the king would not travel through or into check, and if
            there are no pieces between the rook and the king.
          </p>
          <div className="images">
            <img src={king3} alt="" className="sectionImg" />
            <img src={king4} alt="" className="sectionImg" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
