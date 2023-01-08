import React from "react";
import { NavLink } from "react-router-dom";
import NavbarPage from "./NavbarPage";

function AdminForm(props) {
  console.log(props.name, props.email, props.pass);
  return (
    <>
      <h1>Admin Page</h1>
      <button>
        <NavLink to="/Home">Back to Home</NavLink>
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.name}</td>
            <td>{props.email}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default AdminForm;
