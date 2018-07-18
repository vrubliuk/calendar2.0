import React, { Component } from "react";
import "./DatePicker.css";
import { connect } from "react-redux";

class DatePicker extends Component {
  render() {
    const month = this.props.date.toLocaleString("en-US", { month: "long" });
    const year = this.props.date.toLocaleString("en-US", { year: "numeric" });
    return (
      <div className="DatePicker">
        <button onClick={this.props.handleClickButtonPrevious}>{"<"}</button>
        <div>
          {month}, {year}
        </div>
        <button onClick={this.props.handleClickButtonNext}>{">"}</button>
      </div>
    );
  }
}

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
