import * as React from "react";
import { Flex, Text, Link, Container } from "../ui";
import { cardBox, gradientCover, widthOneHundredPercent } from "./index.css";
import { graphql } from "gatsby";

export default function Cards ({ article }) {
  const [ card, setCard ] = React.useState(0)
  // const { slug, publishedAt, title } = article[card]
    return (
        <>
          {/* <Link to={`/article/${article.slug}`}>
              <Container className={cardBox}>
                  <Flex variant="columnStart" className={widthOneHundredPercent}>
                      <Container className={gradientCover} />
                      <Text variant="subheading">{article.publishedAt}</Text>
                      <Text variant="lead">{article.title}</Text>
                  </Flex>
              </Container>
          </Link> */}
          {/* <Link to={`/article/${article.slug}`}>
              <Container className={cardBox}>
                  <Flex variant="columnStart" className={widthOneHundredPercent}>
                      <Container className={gradientCover} />
                      <Text variant="subheading">{article.publishedAt}</Text>
                      <Text variant="lead">{article.title}</Text>
                  </Flex>
                  <Flex>
                    {article.map((_, index) => (
                      <button
                        key={index}
                        onclick={() => setCard(index)}
                      />
                    ))}
                  </Flex>
              </Container>
          </Link> */}
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
        childImageSharp {
          gatsbyImageData(aspectRatio: 1.77)
        }
      }
    }
  }
`;