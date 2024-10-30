import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../../styles/AuthStyles.css";
import Layout from "./../../components/Layout/Layout";
import './Login.css';
const ForgotPasssword = () => {

    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");
  
    const navigate = useNavigate();
  
    // form function
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("https://storeapp-f8uo.onrender.com/api/v1/auth/forgot-password", {
          email,
          newPassword,
          answer,
        });
        if (res && res.data.success) {
          toast.success(res.data && res.data.message);
  
          navigate("/login");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };
  return (
    <Layout>
      <div className="main">
        <form className="form" onSubmit={handleSubmit}>
          <h4 className="title">Forgot Password</h4>

          <div className="input">
            <input
              type="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your Email "
              required
            />
          </div>
          <div className="input">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your favorite sport name "
              required
            />
          </div>
          <div className="input mb-3">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your new password"
              required
            />
          </div>
          <div className="btn-main ">
           
            <button type="submit" className="btn1 border-0 bg-primary">
            Reset Password
            </button>
          </div>

          
        </form>
      </div>
    </Layout>
  );
};






 export default ForgotPasssword;