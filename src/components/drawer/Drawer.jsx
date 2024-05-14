import React from "react";
import { useGetAllCategoriesQuery } from "../../store/service/endpoints/products.endpoints";

const Drawer = ({ handleClick, allProduct }) => {
  const { data } = useGetAllCategoriesQuery();
  // console.log(data);

  return (
    <div className="drawer text-end">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn btn-outline btn-sm btn-primary drawer-button"
        >
          Categories
        </label>
      </div>
      <div className="drawer-side  z-[70]">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-[65%] md:w-80 min-h-full bg-base-200 text-base-content">
          <li>
            <button onClick={allProduct}>all products</button>
          </li>
          {data?.map((cat, index) => (
            <li key={index} className="border-b-2 py-2">
              <button onClick={() => handleClick(cat)}>{cat}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
