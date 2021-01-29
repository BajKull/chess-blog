import React from "react";
import "../scss/styles.scss";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="wrapper">{children}</div>
      <Footer />
    </div>
  );
}
