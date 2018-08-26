import React, { Component } from "react";
import "./App.css";
import Header from "./containers/Header/Header.jsx";
import Main from "./containers/Main/Main.jsx";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/actionCreators";
import Spinner from "./components/Spinner/Spinner";
import { postRefreshToken } from "./store/utility/API";

class App extends Component {
  componentDidMount() {
    if (localStorage.refreshToken) {
      postRefreshToken().then(res => {
        localStorage.refreshToken = res.data.refresh_token;
        this.props.updateAuthData(res.data.id_token);
        this.props.fetchDatabase();
      });
    } else {
      this.props.fetchDatabase();
    }
    this.interval = setInterval(() => {
      if (localStorage.refreshToken) {
        postRefreshToken().then(res => {
          localStorage.refreshToken = res.data.refresh_token;
          this.props.updateAuthData(res.data.id_token);
        });
      }
    }, 1800000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
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
    fetchDatabase: () => dispatch(actionCreators.fetchDatabase()),
    updateAuthData: idToken => dispatch(actionCreators.updateAuthData(idToken))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
