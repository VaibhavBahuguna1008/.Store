import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import "../../styles/Homepage.css";
import { AiOutlineReload } from "react-icons/ai";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Get total number of products
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch products based on page
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts((prevProducts) => [...prevProducts, ...data.products]);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  // Fetch initial products and total product count
  useEffect(() => {
    getAllProducts();
    getTotal();
  }, []);

  // Load more products when page changes
  useEffect(() => {
    if (page > 1) {
      getAllProducts();
    }
  }, [page]);

  return (
    <Layout>
      <div className="overflow-x-hidden" style={{ marginTop: "120px", paddingLeft: "40px", paddingRight: "40px" }}>
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">All Products List</h1>
            <div className="d-flex justify-content-center flex-wrap">
              {products?.map((p) => (
                <Link key={p._id} to={`/dashboard/admin/product/${p.slug}`} className="product-link">
                  <div className="card-main m-2 d-flex flex-column">
                    <img src={`/api/v1/product/product-photo/${p._id}`} className="card-img" alt={p.name} />
                    <div className="card-body">
                      <div className="card-name-price">
                        <h5 className="card-title">{p.name}</h5>
                        <h5 className="card-title card-price">
                          {p.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                        </h5>
                      </div>
                      <p className="card-text">{p.description.substring(0, 60)}...</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="m-2 p-3">
              {products.length < total && (
                <button
                  className="btn loadmore"
                  onClick={() => setPage(page + 1)}
                >
                  {loading ? "Loading ..." : <>Load More <AiOutlineReload /></>}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
