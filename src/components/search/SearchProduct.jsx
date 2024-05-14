import React from "react";
import { useNavigate } from "react-router-dom";

const SearchProduct = ({ filterProduct = [] }) => {
  const nav = useNavigate();
  const handleClick = (pd) => {
    nav(`/details/${pd.id}`);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {filterProduct.map((pd) => (
        <div
          key={pd.id}
          className="card bg-base-100 shadow-xl"
          onClick={() => handleClick(pd)}
        >
          <figure className="card-title h-[150px] px-10 pt-10">
            <img
              src={pd.image}
              width={"80px"}
              height={"80px"}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title border px-2 py-1 rounded-full text-sm">
              {pd.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchProduct;
