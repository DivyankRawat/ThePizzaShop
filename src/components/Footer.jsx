import React from "react";

const Footer = () => {
  return (
    <div>
      <div className=" font-mont mt-18 text-white bg-darkGery flex h-48 p-20">
        <div className="flex border-b-2 w-full">
          <div className=" mr-18 flex flex-col w-full">
            <h1 className="text-3xl font-noto pl-8">What we Offer</h1>
            <div className="h-48 w-full text-left pl-8">
              <p className="mt-2">Vegetarian pizza</p>
              <p>Non-Vegetarian pizza</p>
            </div>
          </div>
          <div className=" w-full mr-18">
            <h1 className="text-3xl flex flex-col font-noto">Information</h1>
            <div className="flex">
              <div className="text-white mr-12 mt-2">
                <p>About Us</p>
                <p>Latest News</p>
                <p>Our Menu</p>
              </div>
              <div className="mr-18 mt-2">
                <p>FAQ</p>
                <p>Shop</p>
                <p>Contact Us</p>
              </div>
            </div>
          </div>
          <form className="w-full">
            <h1 className="text-3xl flex flex-col font-noto">Newsletter</h1>
            <p className="mt-6">
              Sign up today for the latest news and updates.
            </p>
            <input
              className="text-black outline-none mt-2 h-6 px-2"
              type="email"
              placeholder="Enter your Email"
            />
            <button
              className="bg-yellow h-6 w-24 text-black font-bold"
              type="submit"
            >
              SUBSCIBE
            </button>
          </form>
        </div>
      </div>
      <div className="w-full flex justify-evenly -mt-6 bg-darkGery px-20 pb-10 text-white font-mont">
        <p>8, Neelkanth Chs, Pp Cross Road, Near Sheetal</p>
        <p>Contact No: 0129919293 </p>
        <p>© 2022 . Privacy policy</p>
      </div>
    </div>
  );
};

export default Footer;
