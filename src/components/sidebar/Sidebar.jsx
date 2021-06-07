import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  AccountCircle,
  MailOutline,
  ArrowRight,
} from "@material-ui/icons";

import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>

            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="users">
              <li className="sidebarListItem">
                <AccountCircle className="sidebarIcon" />
                User
              </li>
            </Link>
            <Link to="/products">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/login">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Login
              </li>
            </Link>
            <Link to="/register">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Register
              </li>
            </Link>

            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Transactions
            </li>

            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Messages
            </li>
            <li className="sidebarListItem">
              <ArrowRight className="sidebarIcon" />
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
