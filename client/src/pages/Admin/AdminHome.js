import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
          "Welcome to the Blood Bank Management System! As an administrator, you play a crucial role in ensuring the smooth operation of the blood bank. Through this platform, you can efficiently manage blood inventory levels, monitor blood group availability, update donor and recipient records, and handle blood donation requests with ease. Our system provides real-time data access to help you make informed decisions and respond quickly to urgent needs.
          You can also schedule and manage blood donation camps, send notifications to registered donors, and generate detailed reports for better planning and transparency. This dashboard is designed to simplify your tasks and help you maintain a well-organized, reliable, and responsive blood bank service.
            Together, we can ensure that every drop counts and that critical resources are available to save lives whenever and wherever needed. Thank you for being an essential part of this life-saving mission."

          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
