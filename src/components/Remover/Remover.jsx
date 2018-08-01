import React from "react";
import "./Remover.css";
import { connect } from "react-redux";

const Remover = ({ type }) => {
  let additionalClass = "";

  switch (type) {
    case "day":
      additionalClass = "Remover-Schedule";
      break;
    case "today":
      additionalClass = "Remover-Schedule Remover-Schedule-White";
      break;

    case "detail":
      additionalClass = "Remover-Schedule";
      break;
    case "employee":
      additionalClass = "Remover-Employee";
      break;

    default:
      break;
  }

  const handleClick = e => {
    e.stopPropagation();
  };

  return (
    <div className={`Remover ${additionalClass}`} onClick={handleClick}>
      {"\u00D7"}
    </div>
  );
};

const mapStateToProps = ({ colors }) => {
  return {
    colors
  };
};

export default connect(mapStateToProps)(Remover);
