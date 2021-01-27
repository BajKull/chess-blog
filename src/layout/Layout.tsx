import React from "react";
import Navbar from "../navbar/Navbar";
import { PageProps } from "gatsby";

export default function Layout(props: PageProps) {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
}
