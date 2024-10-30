import React from "react";
import Layout from "./../components/Layout/Layout";


const About = () => {
  return (
    <Layout>
      <div className="mb-5 d-flex flex-wrap justify-content-center text-center" style={{ marginTop: "150px", paddingLeft  : "40px" , paddingRight : "40px"}}>
      <div className="w-75 gap-4 policy-container text-center d-flex flex-column justify-content-between align-items-center" >
        <div className="policy-header text-center d-flex flex-column justify-content-center">
          <h1 className="text-center fw-bold text-uppercase">About Us</h1>
          
        </div>
        <div className="policy-content">
          <div className="d-flex flex-column gap-2">
            
            <p>
            We are dedicated to providing a seamless online shopping experience by offering a diverse range of products, intuitive features, and secure payment options. Built with modern technology, our platform is designed to cater to the needs of both customers and administrators, ensuring that everyone enjoys a hassle-free experience.
            </p>

            <h3 className="mt-5">Our Mission</h3>
            <p>
            Our mission is to make online shopping simple, reliable, and enjoyable for everyone. We strive to offer a broad selection of high-quality products at competitive prices while maintaining excellent customer service. We aim to create a platform where shoppers can explore, discover, and purchase with ease.
            </p>
          </div>
        </div>
      </div>
      </div>
      
    </Layout>
  );
};

export default About;
