import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <Router>
      <Topbar />
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" exact component={UserList} />
          <Route path="/user/:id" exact component={User} />
          <Route path="/newuser" exact component={NewUser} />
          <Route path="/products" exact component={ProductList} />
          <Route path="/product/:id" exact component={Product} />
          <Route path="/newproduct" exact component={NewProduct} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
