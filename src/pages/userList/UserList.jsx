import "./userlist.css";
import {useState} from 'react'
import { DeleteForeverOutlined } from "@material-ui/icons";
import { DataGrid } from "@material-ui/data-grid";
import { userTableRow } from "../../dummyData";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";



export default function UserList() {
  const [data, setdata] = useState(userTableRow);
  const handleDelete = (id) => {
    setdata(data.filter((d) => d.id !== id));
  };




  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "Username",
      width: 160,
      renderCell: (params) => (
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt="img" />
          {params.row.username}
        </div>
      ),
    },
    { field: "email", headerName: "Email", width: 130 },
    {
      field: "status",
      headerName: "Status",

      width: 120,
    },
    {
      field: "transaction",
      width: 160,
      headerName: "Transaction",
      description: "This column has a value getter and is not sortable.",
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <button className="userListEdit">Edit</button>
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
    <div className="container">
      <div className="sidebarContainer">
        <Sidebar />
      </div>
      <div className="userList">
        <div className="userTitleContainer">
          <h1 className="userTitle">All Users</h1>
          <Link to="/newuser">
            <button className="userAddButton">Create</button>
          </Link>
        </div>
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
    </div>
  );
}
