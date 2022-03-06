import React from "react";
import { useGetAllPizzaQuery } from "../services/pizza";

const Veg = () => {
  const response = useGetAllPizzaQuery();
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
                <div className="font-mont flex flex-col justify-center h-48 items-center text-center px-2 py-4 w-80 mb-2 border-2 bg-fadeWhite mx-2">
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
