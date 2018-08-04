import React from "react";
import "./Basket.css";
import Employee from "../Employee/Employee";
import Color from "../Color/Color";
import { connect } from "react-redux";

const Basket = ({ type, employees, colors }) => {
  const employeesList = employees.map((name, i) => <Employee name={name} type={type} key={i} />);
  const colorsList = Object.keys(colors).map((name, i) => <Color name={name} key={i} />);

  let headerText = null;
  let additionalClass = "";
  let content = null;
  switch (type) {
    case "confirmedDayOff":
      headerText = "Confirmed day off";
      additionalClass = "Basket-ConfirmedDayOff";
      content = employeesList;
      break;
    case "pendingDayOff":
      headerText = "Pending day off";
      additionalClass = "Basket-PendingDayOff";
      content = employeesList;
      break;
    case "schedule":
      headerText = "Morning shift / Shared inbox / Audit";
      additionalClass = "Basket-Schedule";
      content = employeesList;
      break;
    case "color":
      headerText = "Color picker";
      additionalClass = "Basket-Color";
      content = colorsList;
      break;
    default:
      break;
  }

  return (
    <div className={`Basket ${additionalClass}`}>
      <div className="Basket__Header">{headerText}</div>
     
      <div className="Basket__Body__Wrapper"><div className="Basket__Body">{content}</div></div>
      <div className="Basket__Footer" />
    </div>
  );
};

const mapStateToProps = ({ employees, colors }) => {
  return {
    employees,
    colors
  };
};

export default connect(mapStateToProps)(Basket);
