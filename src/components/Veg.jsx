import React from "react";
import { useGetAllPizzaQuery } from "../services/pizza";
import { useDispatch } from "react-redux";
import { addToCart } from "../services/cartSlice";

const Veg = () => {
  const response = useGetAllPizzaQuery();
  const dispatch = useDispatch();

  const handleClick = (vegPizza) => {
    dispatch(addToCart(vegPizza));
  };

  return (
    <>
      <h1 className="text-2xl font-nunito mb-6 bg-blackOverlay text-white">
        Vegitarian Pizza
      </h1>
      <div className="flex justify-center flex-row mb-18 flex-wrap">
        {response?.data?.map((vegPizza) => {
          return (
            <div key={vegPizza.id}>
              {!vegPizza.isVeg ? null : (
                <div className="font-mont flex flex-col justify-center items-center h-96 text-center px-2 py-4 w-80 mb-2 border-2 bg-fadeWhite mx-2">
                  <img
                    className="h-52 w-72"
                    src={vegPizza.img_url}
                    alt="non-veg pizza"
                  />
                  <p className="font-mont mt-2 text-xl">{vegPizza.name}</p>
                  <hr />
                  <p className="text-sm mb-2">{vegPizza.description}</p>
                  <div className="flex justify-between">
                    <p className="pr-14">
                      <b>Rating :</b> {vegPizza.rating} / 5
                    </p>
                    <p>
                      <b>Price :</b> ₹{vegPizza.price}
                    </p>
                  </div>
                  <button
                    onClick={() => handleClick(vegPizza)}
                    className="h-6 w-28 mt-6 mb-6 bg-yellow text-black items-end"
                  >
                    Add to cart
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Veg;
