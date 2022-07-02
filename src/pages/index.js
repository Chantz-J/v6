import * as React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Hero from "../components/Hero";
import Articles from "../components/Articles";
import Layout from "../layouts/Layout";
import Synopsis from "../components/Synopsis";

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
      <Hero />
      <Articles articles={allStrapiArticle.nodes} />
      <Synopsis/>
    </Layout>
  );
};

export default IndexPage;

