import React, { useState } from "react";
import StudentDetails from "./StudentDetails";
import uuid from "react-uuid";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function CreateStudent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [batch, setBatch] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const ids = uuid();
    let uniqueid = ids.slice(0, 8);
    let a = name;
    let b = age;
    let c = course;
    let d = batch;

    StudentDetails.push({ id: uniqueid, name: a, age: b, course: c, batch: d });
    history("/ShowDetails");
  };
  const HandleCancel = () => {
    history("/ShowDetails");
  };
  return (
    <>
      <div>
        <form action="">
          <label htmlFor="name">
            Name{" "}
            <input
              type="text"
              placeholder="Enter Name"
              required
              onChange={(e) => setName(e.target.value)}
            />{" "}
          </label>
          <label htmlFor="age">
            Age{" "}
            <input
              type="number"
              placeholder="Enter Age"
              required
              onChange={(e) => setAge(e.target.value)}
            />{" "}
          </label>
          <label htmlFor="course">
            Course{" "}
            <input
              type="text"
              placeholder="Enter Course"
              required
              onChange={(e) => setCourse(e.target.value)}
            />{" "}
          </label>
          <label htmlFor="batch">
            Batch{" "}
            <input
              type="text"
              placeholder="Enter Batch"
              required
              onChange={(e) => setBatch(e.target.value)}
            />{" "}
          </label>
        </form>
        <button
          className="btn btn-success  mx-5"
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Submit
        </button>
        <button className="btn btn-danger mx-5" onClick={HandleCancel}>
          Cancel
        </button>
      </div>
    </>
  );
}

export default CreateStudent;
