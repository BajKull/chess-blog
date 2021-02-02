import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "../scss/footer.scss";

export default function Footer() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
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
      <div className="content">
        <div className="col">
          <h2 className="mediumTitle">About</h2>
          <p className="footerDesc">
            This website is non-commercial and is just a portfolio project. Most
            of the content was taken from awesome website{" "}
            <a href="https://www.chess.com/">chess.com</a> which you should
            visit if you have anything in common with chess.
          </p>
        </div>
        <div className="col">
          <h2 className="mediumTitle">Get in touch</h2>
          {data.allDataJson.edges[0].node.links.map((link) => (
            <div className="row" key={link.url}>
              <a href={link.url}>
                <p className="footerDesc">{link.name}</p>
              </a>
            </div>
          ))}
          <a href={`mailto:${data.allDataJson.edges[0].node.mail}`}>
            <p className="mail footerDesc">
              {data.allDataJson.edges[0].node.mail}
            </p>
          </a>
        </div>
        <div className="col">
          <h2 className="mediumTitle">Chess Websites</h2>
          <div className="row">
            <a href="https://www.chess.com/">
              <p className="footerDesc">chess.com</p>
            </a>
          </div>
          <div className="row">
            <a href="https://www.lichess.org/">
              <p className="footerDesc">lichess.org</p>
            </a>
          </div>
        </div>

        <p className="copyright">Copyright © Dawid Banachowski 2021</p>
      </div>
    </div>
  );
}
