import "./widgetsm.css";
import React from "react";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="./images/me.jpg" alt="" className="widgetSmImg" />

          <div className="widgetSmUser">
            <span className="userSmusername">Morsalin Alif</span>
            <span className="userSmTitle">Software Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            view
          </button>
        </li>
      </ul>
    </div>
  );
}
