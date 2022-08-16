import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../layouts/Layout";
import BlocksRenderer from "../components/BlocksRenderer";
import Seo from "../components/Seo";
import Header from "../components/Header";
import { Section } from "../components/ui";

const ArticlePage = ({ data }) => {
    const article = data.strapiArticle;

    const seo = {
        metaTitle: article.title,
        metaDescription: article.description,
        shareImage: article.cover,
    };

    return (
        <Layout>
          <Seo seo={seo} />
          <Header article={article}/>
          <Section>
            <GatsbyImage
              image={getImage(article?.cover?.localFile)}
              alt={article?.cover?.alternativeText}
              style={{ width: '100%'}}
            />
          </Section>
          <BlocksRenderer blocks={article.blocks || []} />
        </Layout>
    );
};

export const pageQuery = graphql`
  query ($slug: String) {
    strapiArticle(slug: { eq: $slug }) {
      id
      slug
      title
      description
      publishedAt(formatString: "YYYY-MM-DD")
      blocks {
        ...Blocks
      }
      cover {
        alternativeText
        localFile {
          url
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default ArticlePage;