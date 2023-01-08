import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import UserForm from "./UserForm";
import AdminForm from "./AdminForm";
import Home from "./Home";
import "./navCSS.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  let navigate = useNavigate();

  const handleSubmit = (event) => {
    // setName(name)
    console.log(name, email, pass);
    event.preventDefault();
    navigate("/AdminForm");
  };

  return (
    <div>
      <ul>
        <nav>
          <li>
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/UserForm">User Registration</NavLink>
          </li>

          <li>
            {" "}
            <NavLink to="/AdminForm">Admin page </NavLink>
          </li>
        </nav>
      </ul>
      <Routes>
        <Route
          path="/UserForm"
          element={
            <UserForm
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              pass={pass}
              setPass={setPass}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route
          path="/AdminForm"
          element={<AdminForm name={name} email={email} pass={pass} />}
        ></Route>
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
};
export default Navbar;
