import React from "react"
import { graphql } from "gatsby"
import BlockQuote from "../BlockQuote";
import BlockMedia from "../BlockMedia";
import BlockRichText from "../BlockRichtext";
import { Container, Flex, Section } from "../ui";
import { maxWidthForContaniner } from "../BlockQuote/index.css";

const componentsMap = {
    STRAPI__COMPONENT_SHARED_RICH_TEXT: BlockRichText,
    STRAPI__COMPONENT_SHARED_MEDIA: BlockMedia,
    STRAPI__COMPONENT_SHARED_QUOTE: BlockQuote,
  }

const Block = ({ block }) => {
    const Component = componentsMap[block.__typename]

    if (!Component) {
        return null
      }
    
      return <Component data={block} />  
}

const BlocksRenderer = ({ blocks }) => {
    return (
      <Section>
        <Container className={maxWidthForContaniner}>
          <Flex variant="column">
            {blocks.map((block, index) => (
              <Block key={`${index}${block.__typename}`} block={block} />
            ))}
          </Flex>
        </Container>
      </Section>
    )
}

export const query = graphql`
  fragment Blocks on STRAPI__COMPONENT_SHARED_MEDIASTRAPI__COMPONENT_SHARED_QUOTESTRAPI__COMPONENT_SHARED_RICH_TEXTSTRAPI__COMPONENT_SHARED_SLIDERUnion {
    __typename
    ... on STRAPI__COMPONENT_SHARED_RICH_TEXT {
      richTextBody: body {
        __typename
        data {
          id
          childMarkdownRemark {
            html
          }
        }
      }
    }
    ... on STRAPI__COMPONENT_SHARED_MEDIA {
      file {
        mime
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    ... on STRAPI__COMPONENT_SHARED_QUOTE {
      title
      quoteBody: body
    }
    ... on STRAPI__COMPONENT_SHARED_SLIDER {
      files {
        id
        mime
        localFile {
            childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
export default BlocksRenderer;