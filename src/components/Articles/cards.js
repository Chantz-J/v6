import * as React from "react";
import { Flex, Text, Link } from "../ui"
import { tagBox } from "./index.css" 
import { ExternalLink } from  "react-feather";
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Cards ({ article }) {
    return (
        <>
            <Link className={tagBox} to={`${article.slug}`}>
                <Flex variant="columnStart">
                    {/* <Text variant="subheading">{article.category}</Text> */}
                    <Text variant="lead">{article.title}</Text>
                    <Text variant="body">{article.description}</Text>
                </Flex>
                <ExternalLink />
            </Link>
        </>
    );
};

export const query = graphql`
  fragment Card on STRAPI_ARTICLE {
    id
    slug
    title
    description
    cover {
      alternativeText
      localFile {
        childImageSharp {
          gatsbyImageData(aspectRatio: 1.77)
        }
      }
    }
  }
`
