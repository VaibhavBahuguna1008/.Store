import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";
import './../../styles/Homepage.css'
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
/**
 * Fetch all orders for the currently logged in user and update the state with
 * the result.
 */
  const getOrders = async () => {
    try {
      const { data } = await axios.get("https://storeapp-f8uo.onrender.com/api/v1/auth/orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);
  return (
    <Layout>
      <div className=" p-3 m-3 dashboard" style={{paddingLeft:"50px"}}>
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9 mt-4">
            <h1 className="text-center fw-bold">All Orders</h1>
            {orders?.map((o, i) => {
              return (
                <div className="border shadow rounded-5 px-2 mb-3">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Status</th>
                        <th scope="col">Buyer</th>
                        <th scope="col"> date</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{i + 1}</td>
                        <td>{o?.status}</td>
                        <td>{o?.buyer?.name}</td>
                        <td>{moment(o?.createdAt).fromNow()}</td>
                        <td>{o?.payment.success ? "Success" : "Failed"}</td>
                        <td>{o?.products?.length}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="d-flex  justify-content-center flex-wrap">
                  {o?.products?.length > 0 ? (
                      o.products.map((p, i) => (
                        <div className="card-main m-2 d-flex flex-column" key={p._id}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img"
                  alt={p.name}
                />
                <div className="card-body">
                  <div className="card-name-price">
                    <h5 className="card-title">{p.name}</h5>
                    <h5 className="card-title card-price">
                      {p.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </h5>
                  </div>
                  <p className="card-text ">
                    {p.description.substring(0, 70)}...
                  </p>
    
                  </div>
                </div>

                      ))
                    ) : (
                      <p>No products available for this order.</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;