import React from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../services/cartSlice";
import { addToCart } from "../services/cartSlice";
import { decreaseCart } from "../services/cartSlice";
import { clearCart } from "../services/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleAddToCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
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
                    <p
                      onClick={() => handleRemove(cartItem)}
                      className="px-2 text-sm py-2 hover:underline cursor-pointer"
                    >
                      Remove
                    </p>
                  </div>
                  <div className="flex flex-row justify-center items-center text-center border-2 p-2 bg-white mt-6 ml-48 w-auto h-12">
                    <button
                      onClick={() => handleDecreaseCart(cartItem)}
                      className="border-2 w-10 font-bold text-white px-2 rounded-full bg-blackOverlay"
                    >
                      -
                    </button>
                    <p className="px-2 font-mont font-semibold py-2 mx-2">
                      {cartItem.cartQuantity}
                    </p>
                    <button
                      onClick={() => handleAddToCart(cartItem)}
                      className="border-2 text-white font-bold px-2 w-10 rounded-full bg-blackOverlay"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex ml-24 py-2 w-72 justify-center items-center font-mont text-center">
                    <p>Total Price of this product : </p>
                    <p className="px-2">
                      <b>₹ {cartItem.price * cartItem.cartQuantity}</b>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <button
            onClick={() => handleClearCart()}
            className="ml-6 font-mont border-2 p-2 w-48 bg-darkGery text-white rounded-lg"
          >
            Clear Cart
          </button>
        </div>
      )}
      {cart.cartItems.length !== 0 ? (
        <div className="flex font-mont flex-col float-right py-6 px-2 w-96 -mt-12 mr-2">
          <p className="font-bold text-xl">Thank you for Ordering</p>
          <p className="text-sm mb-2">
            Taxes and shipping calculated at checkout
          </p>
          <button className="bg-blue hover:bg-darkBlue h-6 rounded-lg text-white">
            <Link to="/">Checkout</Link>
          </button>
          <p>
            <Link to="/">&#8592; Continue Ordering Food</Link>
          </p>
        </div>
      ) : null}
      <div className="mt-60">
        <Footer />
      </div>
    </>
  );
};

export default Cart;
