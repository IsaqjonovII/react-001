import React from "react";
import "./Navbar.css";
import products from "../../mocks/index";

const Navbar = ({ users }) => {
  // console.log(name);
  console.log(products);

  const newobj = {
    name: "adasd",
    age: 12,
  }

  const { name, age } = newobj;
  

  console.log(name);

  return (
    <div>
      <h1>hello {name}</h1>
      {
        users.map(({ id, name }) => (
          <div key={id}>
            <h1>ID: {id}</h1>
            <h1>Name: {name}</h1>
          </div>
        ))
      }
    </div>
  );
};

export default Navbar;
