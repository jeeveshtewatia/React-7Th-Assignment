import React, { useState } from "react";
import StudentDetails from "./StudentDetails";
// import uuid from "react-uuid";
import "./Navbar.css";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function EditStudent() {
  const [name, setName] = useState(localStorage.getItem("Name"));
  const [age, setAge] = useState(localStorage.getItem("Age"));
  const [course, setCourse] = useState(localStorage.getItem("Course"));
  const [batch, setBatch] = useState(localStorage.getItem("Batch"));
  const [id, setId] = useState(localStorage.getItem("Id"));
  useEffect(() => {
    setName(localStorage.getItem("Name"));
    console.log(localStorage.getItem("Name"));
    setAge(localStorage.getItem("Age"));
    setCourse(localStorage.getItem("Course"));
    setBatch(localStorage.getItem("Batch"));
    setId(localStorage.getItem("Id"));
    console.log("id from storage", localStorage.getItem("Id"));
  }, []);

  var index = StudentDetails.map((e) => {
    return e.id;
  }).indexOf(id);
  let history = useNavigate();
  console.log("edit id ", id);
  //   let index = StudentDetails.map((e) => {
  //     return e.id;

  //   }).indexOf(id);
  console.log("index number", index);
  const handleSubmit = (e) => {
    e.preventDefault();

    let a = StudentDetails[index];

    a.name = name;
    a.age = age;
    a.course = course;
    a.batch = batch;
    console.log("name of student ", name);
    history("/ShowDetails");
  };
  const HandleCancel = () => {
    history("/ShowDetails");
  };
  return (
    <div>
      <form action="">
        <label htmlFor="name">
          Name{" "}
          <input
            type="text"
            placeholder="Enter Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
        </label>
        <label htmlFor="age">
          Age{" "}
          <input
            type="number"
            placeholder="Enter Age"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />{" "}
        </label>
        <label htmlFor="course">
          Course{" "}
          <input
            type="text"
            placeholder="Enter Course"
            required
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />{" "}
        </label>
        <label htmlFor="batch">
          Batch{" "}
          <input
            type="text"
            placeholder="Enter Batch"
            required
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
          />{" "}
        </label>
      </form>
      <button
        className="btn btn-success mx-5"
        type="submit"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Update
      </button>
      <button className="btn btn-danger mx-5" onClick={HandleCancel}>
        Cancel
      </button>
    </div>
  );
}
export default EditStudent;
