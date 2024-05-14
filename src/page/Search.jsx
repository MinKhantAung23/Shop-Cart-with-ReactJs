import React, { useEffect, useState } from "react";
import { useProductsQuery } from "../store/service/endpoints/products.endpoints";
import SearchProduct from "../components/search/SearchProduct";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const nav = useNavigate();
  const [input, setInput] = useState("");
  const { data, isLoading } = useProductsQuery();

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const filterProduct = data?.filter((text) => {
    return text.title.toLowerCase().includes(input.toLowerCase());
  });

  return (
    <div className="w-full h-full">
      <div className=" flex items-center justify-center">
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={handleInputChange}
          className="input input-sm input-bordered bg-gray-200 rounded-r-none w-full"
        />
        <button
          onClick={() => setInput("")}
          className="btn btn-sm btn-outline border-none bg-slate-200 rounded-l-none"
        >
          Cancel
        </button>
      </div>

      <div className="my-5">
        <SearchProduct filterProduct={filterProduct} />
      </div>
      <div className="flex justify-end my-3">
        <button className="btn btn-sm btn-outline" onClick={() => nav(-1)}>
          back
        </button>
      </div>
    </div>
  );
};

export default Search;
