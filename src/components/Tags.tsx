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

  const getColor = (tag: string) => {
    const color = tagsQuery.allDataJson.edges[0].node.tags.find(
      (t: { name: string }) => t.name === tag
    );
    if (color) return color.color;
    return "#507d60";
  };

  return (
    <div className="newsTags">
      {tags.map((tag: string) => (
        <p
          className="newsTag"
          key={tag}
          style={{
            backgroundColor: `${getColor(tag)}`,
          }}
        >
          {tag}
        </p>
      ))}
    </div>
  );
}
