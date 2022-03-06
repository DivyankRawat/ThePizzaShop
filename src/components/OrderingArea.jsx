import React from "react";
import { useGetAllPizzaQuery } from "../services/pizza";
import Counter from "./Counter";

const OrderingArea = () => {
  const response = useGetAllPizzaQuery();

  return (
    <div className="flex justify-center text-center flex-col mt-96 px-48">
      <h1 className="text-7xl mb-2 font-mont mt-2 font-medium">Order Here</h1>
      <div className="border-2 p-10 mb-18">
        <p className="text-xl mb-6 font-mont">
          30 % OFF on first order. Use coupon code{" "}
          <b className="bg-lightGreen px-2 py-2 border-2 border-black">
            PIZZA30
          </b>{" "}
        </p>
        {response?.data?.map((pizza) => {
          return (
            <div
              className="flex font-mont justify-between bg-fadeWhite px-10 h-12 text-center items-center border-2 mb-2"
              key={pizza.id}
            >
              <div className="flex justify-start">
                <p className="text-l px-2">{pizza.id} .</p>
                <b>
                  <p className="text-l">{pizza.name}</p>
                </b>
              </div>
              <div className="flex justify-center text-center"></div>
              <Counter />
            </div>
          );
        })}
        <button className="float-right text-lg font-noto mr-4 mt-8 border-2 border-black bg-yellow hover:bg-darkYellow px-12 py-4">
          Submit Order
        </button>
      </div>
    </div>
  );
};

export default OrderingArea;
