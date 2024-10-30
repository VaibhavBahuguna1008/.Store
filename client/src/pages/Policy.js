import React from "react";
import Layout from "./../components/Layout/Layout";


const Policy = () => {
  return (
    <Layout>
      <div className="mb-5 d-flex flex-wrap justify-content-center text-center" style={{ marginTop: "150px", paddingLeft  : "40px" , paddingRight : "40px"}}>
      <div className="w-75 gap-4 policy-container text-center d-flex flex-column justify-content-between align-items-center" >
        <div className="policy-header text-center d-flex flex-column justify-content-center">
          <h1 className="text-center fw-bold text-uppercase">Privacy Policy</h1>
          <p>Your privacy is important to us. Please read our policy carefully.</p>
        </div>
        <div className="policy-content">
          <div className="d-flex flex-column gap-2">
            <h2>Information We Collect</h2>
            <p>
              We collect various types of information to provide and improve our services to you.
            </p>

            <h3>Personal Information</h3>
            <p>
              When you create an account, place an order, or contact us, we may collect personal information such as your name, email address, phone number, billing address, and shipping address.
            </p>

            <h3>Payment Information</h3>
            <p>
              We may collect payment information (credit card details, billing information) through our payment processor. We do not store your credit card information on our servers.
            </p>

            <h3>Usage Data</h3>
            <p>
              We may collect information about how you access and use our Site, including your IP address, browser type, operating system, the pages you visit, and the time and date of your visit.
            </p>
          </div>
        </div>
      </div>
      </div>
      
    </Layout>
  );
};

export default Policy;
