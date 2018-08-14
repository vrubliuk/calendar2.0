import React from "react";
import "./Header.css";
import Navigation from "../../components/Navigation/Navigation.jsx";
import { withRouter } from "react-router-dom";
import DatePicker from "../../components/DatePicker/DatePicker";
import { connect } from "react-redux";
import LastUpdate from "../../components/LastUpdate/LastUpdate.jsx";
import SavingIndicator from "../../components/SavingIndicator/SavingIndicator.jsx";
import LogButton from "../../components/LogButton/LogButton";

const Header = ({ location, savingIndicator }) => {
  const currentRoute = location.pathname;
  const datePicker = currentRoute === "/" || currentRoute === "/editor" ? <DatePicker /> : null;
  const statusInfo = !savingIndicator ? <LastUpdate /> : <SavingIndicator />;
  const logButton = currentRoute !== "/authentication" ? <LogButton /> : null;

  return (
    <header className="Header">
      <Navigation />
      {datePicker}
      <div className="Header__Right">
        {statusInfo}
        {logButton}
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    savingIndicator: state.status.savingIndicator
  };
};

export default withRouter(connect(mapStateToProps)(Header));
