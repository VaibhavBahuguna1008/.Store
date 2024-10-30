import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="d-flex flex-wrap justify-content-center text-center" style={{ marginTop: "150px", paddingLeft  : "40px" , paddingRight : "40px"}}>
        
        <div className="col-md-4 w-75">
          <h1 className="fw-bold p-2 text-black text-center fs-1">CONTACT US</h1>
          <p className="text-justify mt-3 fs-5">
            any query and info about product feel free to call anytime we 24X7
            available
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;