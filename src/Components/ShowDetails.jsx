import React from "react";
import "./Navbar.css";
import StudentDetails from "./StudentDetails";
import { Link, useNavigate, NavLink } from "react-router-dom";
import uuid from "react-uuid";

export default function ShowDetails() {
  let history = useNavigate();
  const HandleDelete = (id) => {
    let index = StudentDetails.map((e) => {
      return e.id;
    }).indexOf(id);
    console.log(index);
    StudentDetails.splice(index, 1);
    history("/ShowDetails");
  };

  const HandleEditStudent = (id, name, age, course, batch) => {
    localStorage.setItem("Id", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
    localStorage.setItem("Course", course);
    localStorage.setItem("Batch", batch);
  };

  return (
    <div>
      {/* <Link to="./CreateStudent">
        <button>create </button>
      </Link> */}
      <div className="secpage">
        <h1>Students Detail</h1>
        <button class="but1">
          <NavLink to="/CreateStudent" style={{ textDecoration: "none" }}>
            Add New Student
          </NavLink>
        </button>
      </div>
      <table className="tab">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {StudentDetails && StudentDetails.length > 0
            ? StudentDetails.map((item) => {
                return (
                  <tr>
                    <td>{item.name} </td>
                    <td>{item.age} </td>
                    <td>{item.course} </td>
                    <td>{item.batch} </td>
                    <td>
                      {/* <Link to={`/EditStudent`}> */}{" "}
                      {/* <button
                          className="btn"
                          onClick={() => {
                            HandleEditStudent(
                              item.id,
                              item.name,
                              item.age,
                              item.course,
                              item.batch
                            );
                          }}
                        >
                          Edit
                        </button> */}
                      <NavLink to="/EditStudent">
                        <button
                          type="button"
                          className="btn btn-link"
                          onClick={() =>
                            HandleEditStudent(
                              item.id,
                              item.name,
                              item.age,
                              item.course,
                              item.batch
                            )
                          }
                        >
                          Edit
                        </button>
                      </NavLink>
                      {/* </Link>{" "} */}
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-link"
                        onClick={() => {
                          HandleDelete(item.id);
                        }}
                      >
                        Delete
                      </button>{" "}
                    </td>
                  </tr>
                );
              })
            : "Don't have any data"}
        </tbody>
      </table>
    </div>
  );
}
