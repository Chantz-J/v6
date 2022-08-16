import * as React from "react";
import Navbar from "../components/Navbar";
import "../styles.css";


const Layout = (props) => {
  return (
    <>
      <Navbar />
      <main>
        {props.children}
      </main>
    </>
  );
}

export default Layout; 