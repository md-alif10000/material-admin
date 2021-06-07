import React,{useState} from "react";
import "./topbar.css";
import { NotificationsActiveOutlined, LanguageOutlined, Settings,MenuOpenOutlined } from "@material-ui/icons";
import Sidebar from '../sidebar/Sidebar'

import { Drawer } from "@material-ui/core";

export default function Topbar() {
  const [drawer, setdrawer] = useState(false);
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <span className="menuIcon">
          <MenuOpenOutlined onClick={() => setdrawer(true)} />
        </span>

        <Drawer anchor="left" open={drawer} onClose={() => setdrawer(false)}>
          <Sidebar />
        </Drawer>
        <div className="topLeft">
          <span className="logo">Material-Ui Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconWrapper">
            <NotificationsActiveOutlined className="topbarIcon" />
            <span className="topIconBadge">5</span>
          </div>
          <div className="topbarIconWrapper">
            <LanguageOutlined className="topbarIcon" />
          </div>
          <div className="topbarIconWrapper">
            <Settings className="topbarIcon" />
          </div>
          <img src="/images/me.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
