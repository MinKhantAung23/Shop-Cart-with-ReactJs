import React, { useState } from "react";
import Loading from "../components/loader/Loading";
import Error from "../components/error/Error";
import {
  useGetSingleCategoryQuery,
  useProductsQuery,
} from "../store/service/endpoints/products.endpoints";

import Card from "../components/card/Card";
import Drawer from "../components/drawer/Drawer";

const Shop = () => {
  const { data: allProducts, isLoading, isError } = useProductsQuery();

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleClick = (cat) => {
    const result = allProducts?.filter((el) => el.category === cat);
    setSelectedCategory(result);
  };

  const allProduct = () => {
    setSelectedCategory(allProducts);
  };

  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <Error />;
  }
  return (
    <div>
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl my-5 w-60">All Products</h1>
          <Drawer handleClick={handleClick} allProduct={allProduct} />
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {selectedCategory
            ? selectedCategory?.map((product) => (
                <Card key={product.id} product={product} />
              ))
            : allProducts?.map((product) => (
                <Card key={product.id} product={product} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
