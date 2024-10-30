import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-flui m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9 mt-3">
            <div className="card w-75 p-3 rounded-5">
              <h3><span style={{ color: "black", fontWeight: "bold" }}>Username </span> : {auth?.user?.name}</h3>
              <h3><span style={{ color: "black", fontWeight: "bold" }}>User email </span> : {auth?.user?.email}</h3>
              <h3><span style={{ color: "black", fontWeight: "bold" }}>User Address </span> : {auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;