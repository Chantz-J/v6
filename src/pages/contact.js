import * as React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../layouts/Layout";
import ContactHero from "../components/ContactHero";

const ContactPage = () => { 
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
      <ContactHero />
    </Layout>
  );
};

export default ContactPage;