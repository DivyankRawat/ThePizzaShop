import React, { useState } from "react";
import Veg from "./Veg";
import NonVeg from "./NonVeg";

const Menu = () => {
  const [veg, setVeg] = useState(false);
  const [nonVeg, setNonVeg] = useState(true);

  const handleClick = () => {
    setVeg(false);
    setNonVeg(true);
  };

  const handleClick2 = () => {
    setVeg(true);
    setNonVeg(false);
  };

  return (
    <>
      <div className="mt-128 px-28 pt-12 flex flex-col justify-center text-center ">
        <p className="font-lobster text-4xl -rotate-12 mr-48">our</p>
        <h1 className="text-7xl mb-2 font-mont -mt-2 font-medium">MENU</h1>
        {veg ? (
          <>
            <button
              onClick={handleClick}
              type="button"
              className="absolute bg-yellow hover:bg-darkYellow h-14 hover:rounded-xl duration-200 w-48 ease-in -mt-96 -ml-12 -rotate-12 font-nunito px-2 py-2.5 text-center"
            >
              &#8592; Show Veg Pizza
            </button>
            <NonVeg />
          </>
        ) : null}
        {nonVeg ? (
          <>
            <button
              onClick={handleClick2}
              type="button"
              className="absolute right-18 w-48 font-nunito h-14 bg-yellow hover:bg-darkYellow -mt-158 duration-200 hover:rounded-md ease-in rotate-12 px-2 py-2.5 text-center"
            >
              Show NonVeg Pizza &#8594;
            </button>
            <Veg />
          </>
        ) : null}
      </div>
    </>
  );
};

export default Menu;
