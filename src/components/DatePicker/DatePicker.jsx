import React from "react";
import "./DatePicker.css";
import { connect } from "react-redux";

const DatePicker = ({
  date,
  handleClickButtonPrevious,
  handleClickButtonNext
}) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.toLocaleString("en-US", { year: "numeric" });
  return (
    <div className="DatePicker">
      <button onClick={handleClickButtonPrevious}>{"<"}</button>
      <div>
        {month}, {year}
      </div>
      <button onClick={handleClickButtonNext}>{">"}</button>
    </div>
  );
};

const mapStateToProps = ({ date }) => {
  return {
    date
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClickButtonPrevious: () => dispatch({ type: "PREVIOUS_MONTH" }),
    handleClickButtonNext: () => dispatch({ type: "NEXT_MONTH" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatePicker);
