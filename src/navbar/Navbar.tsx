import React from "react";
import { Link } from "gatsby";
import Logo from "../data/svg/logo.svg";
import "../scss/navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="content">
        <ul>
          <Link to="/">
            <li>
              <Logo />
            </li>
          </Link>
          <Link to="/pieces">
            <li>Pieces</li>
          </Link>
          <Link to="/openings">
            <li>Openings</li>
          </Link>
          <Link to="/news">
            <li>News</li>
          </Link>
          <Link to="/learn">
            <li>Learn</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
