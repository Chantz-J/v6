import * as React from "react";
import Layout from "../layouts/Layout";
import ContactHero from "../components/ContactHero";
import ContactMethods from "../components/ContactMethods";
import Seo from "../components/Seo";

const ContactPage = () => { 
  return (
    <Layout>
      <Seo seo={{ metaTitle: "Contact" }} />
      <ContactHero />
      <ContactMethods />
    </Layout>
  );
};

export default ContactPage;