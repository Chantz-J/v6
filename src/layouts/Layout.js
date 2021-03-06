import * as React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles.css";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;