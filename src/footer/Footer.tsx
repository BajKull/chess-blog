import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export default function Footer() {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allDataJson {
  //       edges {
  //         node {
  //           links {
  //             github
  //             author
  //             linkedin
  //           }
  //           mail
  //         }
  //       }
  //     }
  //   }
  // `);

  // console.log(data);
  return (
    <div className="footer">
      <h2>Get in touch</h2>
      <p>Copyright © Dawid Banachowski 2021</p>
    </div>
  );
}
