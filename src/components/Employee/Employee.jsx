import React from "react";
import "./Employee.css";

const Employee = ({ name, type }) => {
  let additionalClass = "";
  switch (type) {
    case "confirmedDayOff":
     
      additionalClass = "Employee-ConfirmedDayOff";
      break;
    case "pendingDayOff":
      
      additionalClass = "Employee-PendingDayOff";
      break;
    case "schedule":
  
      additionalClass = "Employee-Schedule";
      break;
    default:
      break;
  }


  const handleDragStart = (e) => {
    e.dataTransfer.setData("text", name);
    e.dropEffect = "copy";
  }
  return <div className={`Employee ${additionalClass}`} draggable="true" onDragStart={handleDragStart} >{name}</div>;
};

export default Employee;
