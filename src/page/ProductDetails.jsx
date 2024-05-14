import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../store/service/endpoints/products.endpoints";
import Loading from "../components/loader/Loading";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/features/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductQuery(id);
  const dispatch = useDispatch();
  // console.log(data);

  const handleAddToCart = (data) => {
    console.log(data);
    dispatch(addToCart(data));
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="border border-base-200 shadow-md p-5 my-3 me-2">
            <img src={data?.image} className=" md:w-[500px]" alt="" />
          </div>

          <div className="mx-5 flex flex-col ">
            <h2 className="font-semibold text-lg my-3">{data?.title}</h2>
            <small className="border bg-secondary text-white w-fit p-1 rounded-xl">
              {data?.category}
            </small>
            <p className="text-sm my-3 text-gray-400">{data?.description}</p>
            <p className="font-bold text-xl my-3">${data?.price}</p>
            <div className="flex justify-between items-center">
              <button
                className="btn btn-primary w-fit "
                onClick={() => handleAddToCart(data)}
              >
                Add to Cart
              </button>
              <Link to={"/shop"} className="btn btn-outline w-fit">
                All products
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
