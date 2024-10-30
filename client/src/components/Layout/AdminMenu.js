import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <div>
      <div className="text-center">
        <div className="list-group gap-2">
          <h4>
          <NavLink
          className="fw-bold border-none list-group-item list-group-item-action fs-3 px-1 rounded-pill py-6 text-white"
            to="/dashboard/admin"
          >
            Dashboard
          </NavLink>
          </h4>
          <NavLink
            to="/dashboard/admin/create-category"
            className=" fs-5 rounded-pill list-group-item list-group-item-action"
          >
            Create category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="fs-5 rounded-pill list-group-item list-group-item-action"
          >
            Create product
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="fs-5 rounded-pill list-group-item list-group-item-action"
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/orders"
            className="fs-5 rounded-pill list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            className="fs-5 rounded-pill list-group-item list-group-item-action"
          >
            Users
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;
