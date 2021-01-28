import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "../scss/styles.scss";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="wrapper">{children}</div>
      <Footer />
    </div>
  );
}
