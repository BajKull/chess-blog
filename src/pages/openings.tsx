import React from "react";
import Layout from "../layout/Layout";
import { openingsInfo } from "../components/openingsInfo";
import "../scss/openings.scss";

export default function openings() {
  return (
    <Layout>
      <div className="openings">
        <h1 className="title">Chess openings</h1>
        <div className="openingsContainer">
          {openingsInfo.map((opening) => (
            <div className="card" key={opening.name}>
              <h2 className="mediumTitle">{opening.name}</h2>
              <div className="openingImgContainer">
                <img src={opening.img} className="openingImg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
