import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flexbox">
      <Link className="non" to="/Home">
        Home
      </Link>
      <Link className="non" to="/ShowDetails">
        Student
      </Link>
      <Link className="non" to="/Contact">
        Contact
      </Link>
    </div>
  );
};
export default Navbar;
