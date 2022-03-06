import React from "react";
import { useGetAllPizzaQuery } from "../services/pizza";

const NonVeg = () => {
  const response = useGetAllPizzaQuery();
  console.log(response);

  return (
    <>
      <h1 className="text-2xl font-nunito mb-6 bg-blackOverlay text-white">
        Non- Vegitarian Pizza
      </h1>
      <div className="flex justify-center flex-row mb-18">
        {response?.data.map((nonVegPizza) => {
          return (
            <div>
              {nonVegPizza.isVeg ? null : (
                <div>
                  <div className="font-mont flex flex-col justify-center items-center h-60 text-center px-2 py-4 w-80 mb-2 border-2 bg-fadeWhite mx-2">
                    <img
                      className="h-52 w-72 mt-2"
                      src={nonVegPizza.img_url}
                      alt="non-veg pizza"
                    />
                    <p className="font-mont mt-2 text-xl">{nonVegPizza.name}</p>
                    <hr />
                    <p className="text-sm mb-2">{nonVegPizza.description}</p>
                    <div className="flex justify-between">
                      <p className="pr-14">
                        <b>Rating :</b> {nonVegPizza.rating} / 5
                      </p>
                      <p>
                        <b>Price :</b> ₹{nonVegPizza.price}
                      </p>
                    </div>
                  </div>
                  <button className="h-6 w-28 -mt-12 bg-yellow text-black items-end">
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

export default NonVeg;
