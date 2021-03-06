import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import Logo from "../data/svg/logo.svg";
import Burger from "../data/svg/burger.svg";
import "../scss/navbar.scss";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [hide, setHide] = useState(false);
  const [scaledDown, setScaledDown] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newPos = window.scrollY;
      const width = window.innerWidth;

      if (newPos > scrollPos && width < 800) {
        setHide(true);
        setScaledDown(true);
        setShowMenu(false);
      } else if (newPos > scrollPos) {
        setScaledDown(true);
        setShowMenu(false);
      } else {
        setHide(false);
        if (newPos <= 75) setScaledDown(false);
      }
      setScrollPos(newPos);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPos]);

  if (hide) return null;
  return (
    <div className={scaledDown ? "navbarMini" : "navbar"}>
      <div className="content">
        <Link to="/" className="logoContainer">
          <Logo className="logo" />
        </Link>
        <Burger className="burger" onClick={() => setShowMenu(!showMenu)} />
        <ul className={showMenu ? "shown" : "hidden"}>
          <li>
            <Link to="/pieces">Pieces</Link>
          </li>
          <li>
            <Link to="/openings">Openings</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/learn">Learn</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
