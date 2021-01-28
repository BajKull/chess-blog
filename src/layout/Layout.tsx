import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "../scss/styles.scss";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
