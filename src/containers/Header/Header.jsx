import React from "react";
import "./Header.css";
import Navigation from "../../components/Navigation/Navigation.jsx";
import { withRouter } from "react-router-dom";
import DatePicker from "../../components/DatePicker/DatePicker";
import { connect } from "react-redux";
import LastUpdate from "../../components/LastUpdate/LastUpdate.jsx"
import SavingIndicator from "../../components/SavingIndicator/SavingIndicator.jsx"

const Header = ({ location, history, authorized, savingIndicator }) => {
  const currentRoute = location.pathname;
  const datePicker = currentRoute === "/" || currentRoute === "/editor" ? <DatePicker /> : null;
  const statusInfo = !savingIndicator ? <LastUpdate /> : <SavingIndicator />;

  return (
    <header className="Header">
      <Navigation />
      {datePicker}

      <div className="Header__Right">
        {statusInfo}
        <button className="" onClick={() => history.push("/authentication")}>
        {authorized ? "Log out" : "Log in"}
      </button>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    authorized: state.authorization.authorized,
    savingIndicator: state.status.savingIndicator
  };
};

export default withRouter(connect(mapStateToProps)(Header));
