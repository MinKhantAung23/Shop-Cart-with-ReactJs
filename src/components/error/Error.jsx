import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const nav = useNavigate();
  return (
    <div className="bg-black text-white  w-full h-full flex flex-col justify-center items-center">
      <h1 className="my-5 text-2xl">Error Occoured</h1>
      <button className="btn btn-neutral" onClick={() => nav("/")}>
        Back to home page
      </button>
    </div>
  );
};

export default Error;
