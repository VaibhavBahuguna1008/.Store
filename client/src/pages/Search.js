import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { toast } from "react-toastify";

const Search = () => {
  const [values] = useSearch();
  const navigate = useNavigate(); // Initialize navigate
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  ); // State for cart

  return (
    <Layout title={"Search results"}>
      <div className="container d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }} key={p._id}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title"> {p.name}</h5>
                  <p className="card-text">
                  <span className=" text-black fw-bold">Description : </span>{p.description.substring(0, 60)}...
                  </p>
                  <p className="card-text "><span className=" text-black fw-bold">Price : </span> $ {p.price}</p>
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn px-3 bg-black rounded-5 text-white fs-6 text-capitalize"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
