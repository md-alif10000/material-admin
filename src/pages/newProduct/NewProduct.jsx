import Sidebar from "../../components/sidebar/Sidebar";
import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="container">
      <div className="sidebarContainer">
        <Sidebar />
      </div>
      <div className="newProduct">
        <h1 className="newProductTitle">New Product</h1>
        <form action="" className="newProductForm">
          <div className="newProductItem">
            <label htmlFor="">Full Name</label>
            <input type="text" placeholder="full name" />
          </div>
          <div className="newProductItem">
            <label htmlFor="">Productname</label>
            <input type="text" placeholder="Productname" />
          </div>
          <div className="newProductItem">
            <label htmlFor="">Productname</label>
            <input type="text" placeholder="full name" />
          </div>
          <div className="newProductItem">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="example@gmail.com" />
          </div>
          <div className="newProductItem">
            <label htmlFor="">Password</label>
            <input type="password" placeholder="password" />
          </div>
          <div className="newProductItem">
            <label htmlFor="">Phone</label>
            <input type="text" placeholder="phone-number" />
          </div>

          <div className="newProductItem">
            <label htmlFor="">Gender</label>
            <div className="newProductGender">
              <input type="radio" name="gender" id="male" value="male" />
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" id="female" value="male" />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <div className="newProductItem">
            <label htmlFor="">Active</label>
            <select className="newProductSelect" name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="newProductItem">
            <br />
            <button className="newProductButton">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}
