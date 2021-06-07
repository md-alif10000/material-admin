import React from "react";
import "./user.css";
import {
  CalendarToday,
  LocationCitySharp,
  LocationOn,
  MailOutline,
  Phone,
  Publish,
  School,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit user</h1>
        <Link to='/newuser' >
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <div className="userShowImgContainer">
              <img src="/images/me.jpg" alt="" className="userShowImg" />
            </div>

            <div className="userShowTopTitle">
              <span className="userShowUsername">Md Morsalin Alif</span>
              <span className="userShowUserTitle">Web Developer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">13th january 2003</span>
            </div>
            <div className="userShowInfo">
              <Phone className="userShowIcon" />
              <span className="userShowInfoTitle">01309677000</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">mdalif@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationCitySharp className="userShowIcon" />
              <span className="userShowInfoTitle">Savar,Dhaka,Bangladesh</span>
            </div>
            <div className="userShowInfo">
              <School className="userShowIcon" />
              <span className="userShowInfoTitle">Holy Crescent School</span>
            </div>
            <div className="userShowInfo">
              <LocationOn className="userShowIcon" />
              <span className="userShowInfoTitle">From: Mymensingh</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  placeholder="full name"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Phone Number</label>
                <input
                  type="text"
                  placeholder="phone"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  placeholder="address"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src="/images/me.jpg" alt="" className="userUpdateImg" />
                <label htmlFor="file">
                  {" "}
                  <Publish className="userUpdateUploadIcon" />{" "}
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
