import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/features/cartSlice";
import StarRating from "./StarRaing";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="w-[250px] h-[250px]" src={product.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-base">{product.title}</h2>
        <p className="text-sm font-bold">${product.price}</p>
        <div className="flex items-center justify-center ">
          <div className="rating rating-xs">
            <StarRating rate={product.rating.rate} />
          </div>
          <p className="text-sm ms-5">({product.rating.rate})</p>
        </div>

        <div className="card-actions justify-between my-2">
          <Link
            to={`/details/${product.id}`}
            className="btn btn-outline btn-sm rounded-xl"
          >
            Details
          </Link>
          <button
            onClick={() => handleAddToCart(product)}
            className="btn btn-primary btn-sm rounded-xl"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
