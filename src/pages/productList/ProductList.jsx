import { useState } from "react";
import { DeleteForeverOutlined } from "@material-ui/icons";
import { DataGrid } from "@material-ui/data-grid";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import "./productlist.css";







export default function ProductList() {
    const [data, setdata] = useState(productRows);
      const handleDelete = (id) => {
        setdata(data.filter((d) => d.id !== id));
      };
    
    
     const columns = [
       { field: "id", headerName: "ID", width: 90 },
       {
         field: "product",
         headerName: "Product",
         width: 160,
         renderCell: (params) => (
           <div className="productListName">
             <img className="productListImg" src={params.row.image} alt="img" />
             {params.row.name}
           </div>
         ),
       },
       { field: "stock", headerName: "Stock", width: 120 },
       {
         field: "status",
         headerName: "Status",

         width: 120,
       },
       {
         field: "price",
         width: 160,
         headerName: "Price",
         description: "This column has a value getter and is not sortable.",
       },
       {
         field: "action",
         headerName: "Action",
         width: 150,
         renderCell: (params) => {
           return (
             <>
               <Link to={`/product/${params.row.id}`}>
                 <button className="productListEdit">Edit</button>
               </Link>

               <DeleteForeverOutlined
                 className="userListDelete"
                 onClick={() => handleDelete(params.row.id)}
               />
             </>
           );
         },
       },
     ];

  return (
    <div className="productList">
      <div style={{ height: 800, width: "100%" }}>
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={15}
          checkboxSelection
        />
      </div>
    </div>
  );
}
