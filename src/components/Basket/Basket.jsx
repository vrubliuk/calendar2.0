import React from "react";
import "./Basket.css";
import Employee from "../Employee/Employee";
import Color from "../Color/Color";
import { connect } from "react-redux";
import { colors } from "../../assets/colors";

const Basket = ({ type, employees }) => {
  const employeesList = employees.map((name, i) => <Employee name={name} type={type} key={i} />);
  const colorsList = Object.keys(colors).map((name, i) => <Color name={name} key={i} />);
  const placeholder = type !== "color" && !employees.length ? <div className="Basket__Placeholder">Your employees list is empty</div> : null;

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
      headerText = "Morning shift / Shared inbox / Audit / 3.0 system";
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
      <div className="Basket__Body">
        {content}
        {placeholder}
      </div>
      <div className="Basket__Footer" />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    employees: state.employees.employees
  };
};

export default connect(mapStateToProps)(Basket);
