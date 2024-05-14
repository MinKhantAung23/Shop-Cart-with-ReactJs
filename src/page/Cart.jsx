import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Empty from "../assets/empty-cart.svg";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  clearCart,
  decreaseQuantity,
  getTotalAmount,
  removeFromCart,
} from "../store/features/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const nav = useNavigate();
  const dispatch = useDispatch();

  const handleRemoveCart = (pd) => {
    dispatch(removeFromCart(pd));
  };

  const handleDecreaseQuantity = (pd) => {
    dispatch(decreaseQuantity(pd));
  };

  const handleIncreaseQuantity = (pd) => {
    dispatch(addToCart(pd));
  };
  return (
    <div className="w-full h-full">
      <h2 className="text-center my-4 text-xl font-bold">Shopping Cart</h2>
      <hr className="text-primary mb-3" />
      {cart.products.length === 0 ? (
        <div className="flex justify-center items-center flex-col gap-8">
          <img src={Empty} alt="empty_cart" className="w-[350px]" />
          <button
            className="btn btn-neutral uppercase"
            onClick={() => nav("/shop")}
          >
            Shopping
          </button>
        </div>
      ) : (
        <div className=" flex flex-col md:flex-row justify-center items-start">
          <div className="w-full lg:w-[60%] me-3">
            {cart.products?.map((pd) => (
              <div
                key={pd.id}
                className="card md:card-side bg-base-100 shadow-md mb-4 border hover:shadow-xl hover:border-cyan-300"
              >
                <figure>
                  <img
                    src={pd.image}
                    className="w-36 h-32 p-2 mx-3"
                    alt="Album"
                  />
                </figure>
                <div className="card-body w-full p-5 border-l bg-base-200 rounded-r-2xl">
                  <h2 className="card-title text-sm font-bold">{pd.title}</h2>
                  <p className=" font-semibold my-2">Price : $ {pd.price}</p>
                  <p className="text-lg font-bold mb-3">
                    Total : $ {(pd.price * pd.quantity).toFixed(2)}
                  </p>
                  <div className="mb-2">
                    <button
                      className="btn btn-outline btn-sm"
                      onClick={() => handleDecreaseQuantity(pd)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14"
                        />
                      </svg>
                    </button>
                    <small className="font-semibold mx-4 text-lg">
                      {pd.quantity}
                    </small>
                    <button
                      className="btn btn-outline btn-sm"
                      onClick={() => handleIncreaseQuantity(pd)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-error btn-sm"
                      onClick={() => handleRemoveCart(pd)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <hr className="mt-8 border border-neutral" />
            <button
              className="my-6 btn btn-sm btn-outline"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
          <div className=" w-full lg:w-[40%] ">
            <div className="border-2 rounded-md bg-gray-100 p-5 shado hover:shadow-lg">
              <h1 className="text-lg font-semibold mb-3 text-center">
                Summary
              </h1>
              <hr />
              <div className="flex justify-between items-center my-2">
                <h2>Subtotal</h2>
                <p className="font-semibold">${cart.totalAmount.toFixed(2)}</p>
              </div>
              <div className="flex justify-between items-center my-2">
                <h2>taxes</h2>
                <p className="font-semibold">$0</p>
              </div>
              <hr />
              <div className="flex justify-between items-center my-2">
                <h1 className="font-bold">Total</h1>
                <p className="font-semibold">${cart.totalAmount.toFixed(2)}</p>
              </div>
              <hr />
              <button className="btn btn-neutral w-full btn-sm mt-2">
                Go to checkout
              </button>
            </div>
            <div className="flex justify-end my-7">
              <button
                className="underline text-primary"
                onClick={() => nav(-1)}
              >
                continue shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
