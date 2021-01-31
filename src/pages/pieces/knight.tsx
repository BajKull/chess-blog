import React from "react";
import knight1 from "../../data/images/knight1.jpg";
import knight2 from "../../data/images/knight2.jpg";
import Layout from "../../layout/Layout";

export default function knight() {
  return (
    <Layout>
      <div className="piece">
        <h1 className="title">Knight</h1>
        <div className="section">
          <p>
            The knight moves on an extended diagonal from one corner of any 2×3
            rectangle of squares to the furthest opposite corner. Consequently,
            the knight alternates its square color each time it moves.
          </p>
          <img src={knight1} alt="" className="sectionImg" />
        </div>
        <div className="section">
          <p>
            Other than the castling move described above where the rook jumps
            over the king, the knight is the only piece permitted to routinely
            jump over any intervening piece(s) when moving.
          </p>
          <img src={knight2} alt="" className="sectionImg" />
        </div>
      </div>
    </Layout>
  );
}
