import React from "react";
import Layout from "../layout/Layout";
import { piecesInfo } from "../components/piecesInfo";
import { Link } from "gatsby";
import "../scss/pieces.scss";

export default function pieces() {
  return (
    <Layout>
      <div className="pieces">
        <h1 className="title">Chess pieces</h1>
        <div className="content">
          {piecesInfo.map((piece) => (
            <div className="card" key={piece.name}>
              <h2 className="mediumTitle">{piece.name}</h2>
              <piece.img className="cardImg" />
              <p className="pieceDesc">{piece.desc}</p>
              <Link to={`/pieces/${piece.name}`}>
                <button className="mainButton">Details</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
