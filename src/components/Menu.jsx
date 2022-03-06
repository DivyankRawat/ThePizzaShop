import React, { useState } from "react";
import { Veg, NonVeg } from "../components";
import bgMenu from "../assets/menu-bg.jpg";

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
              className="absolute right-18 w-48 font-nunito h-14 bg-yellow hover:bg-darkYellow -mt-138 duration-200 hover:rounded-md ease-in rotate-12 px-2 py-2.5 text-center"
            >
              Show NonVeg Pizza &#8594;
            </button>
            <Veg />
          </>
        ) : null}
      </div>
      <div>
        <img
          className="h-48 absolute max-w-screen w-full object-cover"
          src={bgMenu}
          alt="menu"
        />
        <div className="text-white absolute top-0 left-0 flex flex-col justify-center pl-10 -pt-2 w-full max-h-48 h-48 bg-blackOverlay">
          <p className="font-noto text-8xl -pt-2">Best Atmosphere</p>
          <p className="text-xl font-mont pt-3">
            The Pizza Shop is the place of the best pizza and high-quality
            service.
            <br />
            Come dine with your Family and Friends and Enjoy the best time of
            your life.
          </p>
        </div>
      </div>
    </>
  );
};

export default Menu;
