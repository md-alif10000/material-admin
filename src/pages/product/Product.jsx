import "./product.css";
import React from "react";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productChartData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Product() {
  return (
    <div className="container">
      <div className="sidebarContainer">
        <Sidebar />
      </div>
      <div className="product">
        <div className="productTitleContainer">
          <h1 className="productTitle">Product</h1>
          <Link>
            <button className="productAddButton">Create</button>
          </Link>
        </div>
        <div className="productTop">
          <div className="productTopLeft">
            <Chart
              data={productChartData}
              dataKeyLine="Sales"
              dataKey="name"
              title="Sales Performance"
            />
          </div>
          <div className="productTopRight">
            <div className="productInfoTop">
              <img
                src="/images/product.jpg"
                alt=""
                className="productInfoImg"
              />
              <span className="productName">Galaxy S21 Ultra</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
                <span className="productInfoValue">412491174812414</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">sales</span>
                <span className="productInfoValue">3414</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">active</span>
                <span className="productInfoValue">yes</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">in stock:</span>
                <span className="productInfoValue">no</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">price</span>
                <span className="productInfoValue">$414</span>
              </div>
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form action="" className="productForm">
            <div className="productFormLeft">
              <label htmlFor="">Product Name</label>
              <input type="text" placeholder="product name" />
              <label htmlFor="">In Stock</label>
              <select name="inStock" id="inStock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <label htmlFor="">Active</label>
              <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="productFormRight">
              <div className="productUpload">
                <img
                  src="../images/product.jpg"
                  alt=""
                  className="productUploadImg"
                />
                <label htmlFor="file">
                  <Publish />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="productButton">Update </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
