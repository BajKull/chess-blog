import React from "react";
import { Link } from "gatsby";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <Link to="/">
          <li>Home</li>
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
  );
}
