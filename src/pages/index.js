import * as React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Hero from "../components/Hero";
import Articles from "../components/Articles";
import Layout from "../layouts/Layout";
import Seo from "../components/Seo";
import CTA from "../components/CTA";
import Footer from "../components/Footer";


const IndexPage = () => { 
  const { allStrapiArticle } = useStaticQuery(graphql`
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
      <Seo seo={{ metaTitle: "Home" }} />
      <Hero />
      <Articles articles={allStrapiArticle.nodes} /> 
      <CTA />
      <Footer />
    </Layout>
  );
};

export default IndexPage;

