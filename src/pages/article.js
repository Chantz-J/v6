import * as React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Articles from "../components/Articles";
import Layout from "../layouts/Layout";
import ArticleHero from "../components/ArticleHero";

const ArticlePage = () => { 
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

export default ArticlePage;