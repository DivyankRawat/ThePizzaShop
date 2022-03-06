import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row px-10 py-5 justify-between border-b-2 align-middle">
      <div>
        <p className="font-nunito text-2xl tracking-wider">The Pizza Shop</p>
      </div>
      <div className="pr-10">
        <ul className="flex font-nunito ">
          <li className="px-5 pt-1 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5 pt-1 cursor-pointer">Menu</li>
          <li className="px-5 pt-1 cursor-pointer">
            <Link to="/cart">Cart</Link>
          </li>
          <img
            className="px-5 cursor-pointer lg:hidden"
            src="https://img.icons8.com/external-jumpicon-line-ayub-irawan/32/000000/external-hamburger-basic-ui-jumpicon-line-jumpicon-line-ayub-irawan.png"
            alt="hamburger"
          />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
