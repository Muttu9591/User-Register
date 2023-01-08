import React from "react";
import { NavLink } from "react-router-dom";

function UserForm(props) {
  return (
    <>
      <h1>User Registration </h1>
      <form onSubmit={(e) => props.handleSubmit(e)}>
        <div>
          <label>Name : </label>
          <input
            type="text"
            name="name"
            value={props.name}
            onChange={(e) => {
              props.setName(e.target.value);
            }}
          ></input>{" "}
          <br />
          <br />
          <label>Email : </label>
          <input
            type="text"
            name="email"
            value={props.email}
            onChange={(e) => {
              props.setEmail(e.target.value);
            }}
          ></input>
          <br />
          <br />
          <label>Password : </label>
          <input
            type="password"
            name="pass"
            value={props.pass}
            onChange={(e) => {
              props.setPass(e.target.value);
            }}
          ></input>
        </div>
        <br />
        <br />
        <button type="submit">Submit</button>
        <button>
          <NavLink to="/Home">Back to Home</NavLink>
        </button>
      </form>
    </>
  );
}
export default UserForm;
