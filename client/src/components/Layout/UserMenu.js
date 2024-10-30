import React from "react";
import { NavLink } from "react-router-dom";
const UserMenu = () => {
  return (
    <div>
      <div className="text-center">
        <div className="list-group gap-2">
          <h4>
          <NavLink
          className= "rounded-pill list-group-item list-group-item-action fw-bold  fs-3 px-1 py-6"
            to="/dashboard/user"
          >
            Dashboard
          </NavLink>
          </h4>
          <NavLink
            to="/dashboard/user/profile"
            className=" fs-5 rounded-pill list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="fs-5 rounded-pill list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;