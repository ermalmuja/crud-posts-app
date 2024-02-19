import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/partials/navbar/navbar";
import Footer from "../components/partials/footer/footer";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
