import * as React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Hero from "../components/Hero";
import Articles from "../components/Articles";
import Layout from "../layouts/Layout";
import Synopsis from "../components/Synopsis";
import ArticleHero from "../components/ArticleHero";

const IndexPage = () => { 
  const { allStrapiArticle, /*strapiGlobal*/ } = useStaticQuery(graphql`
    query {
      allStrapiArticle {
        nodes {
          ...Card
        }
      }
      strapiGlobal {
        siteName
        siteDescription
      }
    }
  `)
  return (
    <Layout>
      <ArticleHero />
      <Articles articles={allStrapiArticle.nodes} />
    </Layout>
  );
};

export default IndexPage;