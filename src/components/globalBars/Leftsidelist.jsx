import React from "react";
import "../../index.css";
import {
  House,
  ShoppingCart,
  CircleUserRound,
  UsersRound,
  Users,
  ShoppingBasket,
  BadgeEuro,
  ChartNoAxesColumnIncreasing,
  ChartLine,
  ChartColumnBig,
  ChartArea,
  Settings,
  Menu,
} from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Leftsidelist = () => {
  return (
    <>
      Leftsidelist
      <div className="leftbar-main-heading showMenu">
        <CircleUserRound size={19} /> <span>Admin</span>
        <div className="leftbar-admin-submenu">
          <Link className="leftbar-admin-submenu-li" to="/addproduct">
            <ShoppingBasket size={19} /> <span>Add Product</span>
          </Link>
          <Link className="leftbar-admin-submenu-li" to="/products">
            <ShoppingCart size={19} /> <span>Products</span>
          </Link>

          <Link className="leftbar-admin-submenu-li" to="/customers">
            <Users size={19} /> <span>Customers</span>
          </Link>
        </div>
      </div>
      <div className="leftbar-main-heading">
        <Users size={19} /> <span>Online Shop</span>
        <div className="leftbar-admin-submenu">
          <Link className="leftbar-admin-submenu-li" to="/homepage">
            <ShoppingBasket size={19} /> <span>Home Page</span>
          </Link>
        </div>
      </div>
      <div className="leftbar-main-heading">
        <ChartNoAxesColumnIncreasing size={19} /> <span>Analytics</span>
        <div className="leftbar-admin-submenu">
          <Link className="leftbar-admin-submenu-li" to="/barchart">
            <ChartColumnBig size={19} /> <span>Bar Chart</span>
          </Link>
          <Link className="leftbar-admin-submenu-li" to="/linechart">
            <ChartLine size={19} /> <span>Line Chart</span>
          </Link>
          <Link className="leftbar-admin-submenu-li" to="/areachart">
            <ChartArea size={19} /> <span>Area Chart</span>
          </Link>
        </div>
      </div>
      <div className="leftbar-main-heading">
        <UsersRound size={19} /> <span>Register Page</span>
        <div className="leftbar-admin-submenu">
          <Link className="leftbar-admin-submenu-li" to="/registerfile">
            <ChartColumnBig size={19} /> <span>Register</span>
          </Link>
          <Link className="leftbar-admin-submenu-li" to="/loginuserfile">
            <ChartLine size={19} /> <span>Login</span>
          </Link>
        </div>
      </div>
    </>
  );
};
