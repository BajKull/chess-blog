import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export default function Tags({ tags }) {
  const tagsQuery = useStaticQuery(graphql`
    query tagsQuery {
      allDataJson {
        edges {
          node {
            tags {
              color
              name
            }
          }
        }
      }
    }
  `);

  return (
    <div className="newsTags">
      {tags.map((tag: string) => (
        <p
          className="newsTag"
          key={tag}
          style={{
            backgroundColor: `${
              tagsQuery.allDataJson.edges[0].node.tags.find(
                (t: { name: string }) => t.name === tag
              ).color
            }`,
          }}
        >
          {tag}
        </p>
      ))}
    </div>
  );
}
