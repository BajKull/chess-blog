import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import chess from "../data/images/chess.png";
import "../scss/footer.scss";

export default function Footer() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allDataJson {
        edges {
          node {
            links {
              name
              url
            }
            mail
          }
        }
      }
    }
  `);
  return (
    <div className="footer">
      <img src={chess} alt="" className="background" />
      <div className="content">
        <div className="col">
          <h2 className="footerTitle">Get in touch</h2>
          {data.allDataJson.edges[0].node.links.map((link) => (
            <div className="row">
              <a href={link.url}>
                <p>{link.name}</p>
              </a>
            </div>
          ))}
          <a href={`mailto:${data.allDataJson.edges[0].node.mail}`}>
            <p className="mail">{data.allDataJson.edges[0].node.mail}</p>
          </a>
        </div>
        <p className="copyright">Copyright © Dawid Banachowski 2021</p>
      </div>
    </div>
  );
}
