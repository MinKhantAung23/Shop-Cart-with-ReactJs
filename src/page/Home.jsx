import React from "react";
import "@splidejs/react-splide/css";
import { useLimitQuery } from "../store/service/endpoints/products.endpoints";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";

const Home = () => {
  const { data, isError } = useLimitQuery(5);
  // console.log(data, isError);
  return (
    <div>
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          arrows: false,
          interval: 3500,
          mediaQuery: "min",
          breakpoints: {
            640: {
              destroy: false,
            },
          },
        }}
      >
        {data?.map((prd) => {
          return (
            <SplideSlide key={prd.id}>
              <div className="border rounded shadow my-5 py-3 ">
                <img
                  src={prd.image}
                  className="w-full h-[300px] object-contain"
                  alt={prd.title}
                />
              </div>
            </SplideSlide>
          );
        })}
      </Splide>

      <hr className="my-5" />

      <div className="card lg:card-side md:w-[70%] bg-base-100 shadow-xl ">
        <figure>
          <img
            className="w-[400px]"
            src="https://plus.unsplash.com/premium_vector-1682298482198-51c68033eacd?bg=FFFFFF&q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Movie"
          />
        </figure>
        <div className="flex">
          <div className="card-body">
            <h2 className="card-title">New products are available now!</h2>
            <p className="text-sm to-gray-400 my-3">
              Click the button to have a happy shopping.
            </p>
            <div className="card-actions">
              <Link to={"/shop"} className="btn btn-outline btn-primary w-full">
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
                Products
              </Link>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-5" />
      <h1 className="text-center font-bold text-2xl mb-6">Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {data?.map((pd) => (
          <div
            key={pd.id}
            className="w-[250px] h-[300px] card bg-base-100 shadow-xl image-full"
          >
            <figure>
              <img className="" src={pd.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{pd.category}</h2>
              <p>{pd.title}</p>
              <div className="card-actions ">
                <Link to={"/shop"} className="btn btn-neutral w-full ">
                  Browse All products
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
