import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="navbar bg-base-200 rounded-md  bg-opacity-90">
      <div className="flex-none">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu bg-base-100 menu-sm dropdown-content mt-3 z-20  p-7 shadow-lg rounded-box w-[300px] "
          >
            <li className="mb-3">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="mb-3">
              <NavLink to={"/shop"}>Shop</NavLink>
            </li>
            <li className="mb-3">
              <NavLink to={"/search"}>Search</NavLink>
            </li>
            <li className="mb-3">
              <NavLink to={"/cart"}>Cart</NavLink>
            </li>
            <li className="">
              <NavLink to={"/about"}>About</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl  shadow-blue-400">
          MK Shop
        </Link>
      </div>
      <div className="flex-none">
        <div className="form-control">
          <div className="flex justify-center items-center md:me-6">
            <Link
              to={"/search"}
              className="btn btn-ghost btn-square md:bg-gray-300 btn-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Link>
          </div>
        </div>
        <Link
          to={"/cart"}
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle me-5"
        >
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>

            <span className="badge badge-sm indicator-item">
              {cart.totalQuantity}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
