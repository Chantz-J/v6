import * as React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Hero from "../components/Hero";
import Articles from "../components/Articles";
import Layout from "../layouts/Layout";
import Seo from "../components/Seo";

// const components = [ Hero ]

const FirstHero = () => <Hero />
const SecondHero = () => <Hero />
const ThirdHero = () => <Hero />

const components = [ FirstHero, SecondHero, ThirdHero ] 


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
      {
        components.map(( Component, i) => {
          <Component key={i}/>
        })
      }
      <Hero />
      <Articles articles={allStrapiArticle.nodes} /> 
    </Layout>
  );
};

export default IndexPage;

