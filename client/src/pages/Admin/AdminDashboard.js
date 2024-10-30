import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-flui m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 mt-3">
            <div className="card w-auto p-3 rounded-5">
              <h3><span style={{ color: "black", fontWeight: "bold" }}>Admin name </span> : {auth?.user?.name}</h3>
              <h3><span style={{ color: "black", fontWeight: "bold" }}>Admin email </span> : {auth?.user?.email}</h3>
              <h3><span style={{ color: "black", fontWeight: "bold" }}>Admin address </span> : {auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

