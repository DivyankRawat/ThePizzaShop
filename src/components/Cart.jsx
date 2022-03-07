import React from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <Navbar />
      {cart.cartItems.length === 0 ? (
        <>
          <div className="flex flex-col justify-center text-center items-center mt-12 font-mont text-2xl">
            <p className="font-noto text-5xl">Your cart is Empty</p>
            <div className="flex justify-center items-center mt-6">
              <p>Start Shopping here: </p>
              <button className="ml-2 bg-yellow h-12 w-80 border-2 rounded-lg hover:bg-darkYellow border-black font-nunito">
                <Link to="/">GO BACK TO HOME</Link>
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="mt-6">
          {cart?.cartItems?.map((cartItem) => {
            return (
              <div className="border-2 bg-fadeWhite mb-2 h-20 rounded-lg mx-2 p-4">
                <div className="flex">
                  <img
                    className="w-48 h-16 rounded-lg mr-6"
                    src={cartItem.img_url}
                    alt={cartItem.name}
                  />
                  <div className="flex flex-col w-96 p-2 font-mont">
                    <p className="text-lg font-bold bg-white border-2 px-2">
                      {cartItem.name}
                    </p>
                    <p className=" px-2 text-sm">{cartItem.description}</p>
                    <p>
                      <b className="px-2 pt-2">Price :</b> ₹ {cartItem.price}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="mt-60">
        <Footer />
      </div>
    </>
  );
};

export default Cart;
