import React from "react";
import "./Header.css";
import Navigation from "../../components/Navigation/Navigation.jsx";
import { withRouter } from "react-router-dom";
import DatePicker from "../../components/DatePicker/DatePicker";
import { connect } from "react-redux";

const Header = ({ location, history, authorized }) => {
  const currentRoute = location.pathname;
  const datePicker = currentRoute === "/" || currentRoute === "/editor" ? <DatePicker /> : null;

  return (
    <header className="Header">
      <Navigation />
      {datePicker}
      <button className="" onClick={() => history.push("/authentication")}>
        {authorized ? "Log out" : "Log in"}
      </button>
    </header>
  );
};

const mapStateToProps = ({ authorized }) => {
  return {
    authorized
  };
};

export default withRouter(connect(mapStateToProps)(Header));
