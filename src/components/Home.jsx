import React from "react";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Main from "./Main";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Main />
        <Menu />
        <div className="flex flex-col justify-center items-center">
          <button className="bg-fadeWhite w-80 py-3 text-lg hover:bg-lightGreen font-mont font-bold border-2">
            <Link to="/cart">Visit Cart for Checkout</Link>
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
