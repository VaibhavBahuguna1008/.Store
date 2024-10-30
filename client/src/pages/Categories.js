import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
import './Categories.css'
const Categories = () => {
  const categories = useCategory();
  return (
    <Layout>
      <div className=" categories  d-flex flex-wrap justify-content-center text-center">
        <h1 className=" fw-bold mb-5">Categories</h1>
        <div className="list d-flex">
          {categories.map((c) => (
            <div className="category" key={c._id}>
              <Link to={`/category/${c.slug}`} className="btn2">
                {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;