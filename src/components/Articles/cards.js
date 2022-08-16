import * as React from "react";
import { Flex, Text, Link, Container } from "../ui";
import { widthOneHundredPercent } from "./index.css";
import { graphql } from "gatsby";

export default function Cards ({ article, vanillaClass }) {
    return (
        <>
          <Link to={`/article/${article.slug}`} className={vanillaClass}>
              <Container>
                  <Flex variant="columnStart" className={widthOneHundredPercent}>
                      <Text variant="subheading">{article.publishedAt}</Text>
                      <Text variant="lead">{article.title}</Text>
                      <Text variant="body">{article.description}</Text>
                  </Flex>
              </Container>
          </Link>
        </>
    )
};

export const query = graphql`
  fragment Card on STRAPI_ARTICLE {
    id
    slug
    title
    description
    publishedAt(formatString: "YYYY-MM-DD")
    updatedAt(formatString: "YYYY-MM-DD")
    cover {
      alternativeText
      localFile {
        url
        childImageSharp {
          gatsbyImageData(aspectRatio: 1.77)
        }
      }
    }
  }
`;