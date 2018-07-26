import React from "react";
import "./Employee.css";

const Employee = ({ name }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text", name);
    e.dropEffect = "copy";
  }

  return <div className="Employee" draggable="true" onDragStart={handleDragStart} >{name}</div>;
};

export default Employee;
