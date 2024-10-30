import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import { AiFillWarning } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";


const CartPage = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    } catch (error) {
      console.log(error);
    }
  };
  //detele item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  //get payment gateway token
  const getToken = async () => {
    try {
      const { data } = await axios.get("https://storeapp-f8uo.onrender.com/api/v1/product/braintree/token");
      setClientToken(data?.clientToken);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getToken();
  }, [auth?.token]);

  //handle payments
  const handlePayment = async () => {
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      const { data } = await axios.post("https://storeapp-f8uo.onrender.com/api/v1/product/braintree/payment", {
        nonce,
        cart,
      });
      setLoading(false);
      localStorage.removeItem("cart");
      setCart([]);
      navigate("/dashboard/user/orders");
      toast.success("Payment Completed Successfully ");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <Layout>
      <div className="overflow-x-hidden" style={{ marginTop: "120px", paddingLeft  : "40px" , paddingRight : "40px"}}>
        <div className="">
          <div className="">
            <h1 className="text-center fw-bold bg-light p-2">
              {!auth?.user
                ? "Hello Guest"
                : `Hello  ${auth?.token && auth?.user?.name}`}
              <p className="text-center">
                {cart?.length
                  ? `You Have ${cart.length} item(s) in your cart ${
                      auth?.token ? "" : "please login to checkout !"
                    }`
                  : " Your Cart Is Empty"}
              </p>
            </h1>
          </div>
        </div>
        <div className="main p-4 d-flex justify-content-center align-items-center">
          <div className=" ">
          <div className="card-container container-fluid d-flex flex-wrap justify-content-center align-items-center">
              {cart?.map((p) => (
                <div className="card-main" key={p._id}>
                  <div >
                    <img
                      src={`/api/v1/product/product-photo/${p._id}`}
                      className="card-img"
                      alt={p.name}
                      width="100%"
                      height={"500px"}
                    />
                  </div>
                  <div className="card-text p-3">
                    <p><span className="fw-bold text-dark fs-5">Name</span> : {p.name}</p>
                    <p><span className="fw-bold text-dark fs-5">Description</span> :  {p.description.substring(0, 50)}</p>
                    <p> <span className="fw-bold text-dark fs-5">Price</span> : ${p.price}</p>
                  </div>
                  <div className="gap-2  d-flex justify-content-between align-items-center p-4">
                    <button
                      className="btn text-white rounded-5 bg-black fs-6 text-capitalize"
                      onClick={() => removeCartItem(p._id)}
                    >
                      Remove
                    </button>
                    <button
                      className="btn px-3 bg-primary rounded-5 text-white fs-6 text-capitalize"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-4 cart-summary w-auto text-center">
              <h2 className="fw-bold">Cart Summary</h2>
              <p>Total | Checkout | Payment</p>
              <hr />
              <h4>Total : {totalPrice()} </h4>
              {auth?.user?.address ? (
                <>
                  <div className="mb-3">
                    <h4>Current Address :</h4>
                    <h5>{auth?.user?.address}</h5>
                    <button
                      className="btn text-white rounded-5 bg-black fs-6 text-capitalize"
                      onClick={() => navigate("/dashboard/user/profile")}
                    >
                      Update Address
                    </button>
                  </div>
                </>
              ) : (
                <div className="mb-3">
                  {auth?.token ? (
                    <button
                      className="btn text-white rounded-5 bg-black fs-6 text-capitalize"
                      onClick={() => navigate("/dashboard/user/profile")}
                    >
                      Update Address
                    </button>
                  ) : (
                    <button
                      className="btn1"
                      onClick={() =>
                        navigate("/login", {
                          state: "/cart",
                        })
                      }
                    >
                      Please Login to Checkout
                    </button>
                  )}
                </div>
              )}
              <div className="mt-2">
                {!clientToken || !auth?.token || !cart?.length ? (
                  ""
                ) : (
                  <>
                    <DropIn
                      options={{
                        authorization: clientToken,
                        paypal: {
                          flow: "vault",
                        },
                      }}
                      onInstance={(instance) => setInstance(instance)}
                    />

                    <button
                      className="btn px-3 bg-primary rounded-5 text-white fs-6 text-capitalize"
                      onClick={handlePayment}
                      disabled={loading || !instance || !auth?.user?.address}
                    >
                      {loading ? "Processing ...." : "Make Payment"}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;