import React from "react";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Main from "./Main";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Main />
        <Menu />
        <Footer />
      </div>
    </>
  );
};

export default Home;
