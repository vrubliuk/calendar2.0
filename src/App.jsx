import React, { Component } from "react";
import "./App.css";
import Header from "./containers/Header/Header.jsx";
import Main from "./containers/Main/Main.jsx";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/actionCreators";
import Spinner from "./components/Spinner/Spinner";

class App extends Component {
  componentDidMount() {
    this.props.fetchDatabase();
  }
  render() {
    return (
      <div className="App">
        {/* <Header />
       <Main />
       <Spinner/> */}
        {!this.props.spinner ? (
          <React.Fragment>
            <Header />
            <Main />
          </React.Fragment>
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    spinner: state.status.spinner
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDatabase: () => dispatch(actionCreators.fetchDatabase())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
