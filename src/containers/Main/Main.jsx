import React, { Component } from "react";
import "./Main.css";
import Calendar from "../Calendar/Calendar.jsx";
import Editor from "../Editor/Editor.jsx";
import Settings from "../Settings/Settings.jsx";
import Authentication from "../Authentication/Authentication.jsx";
import { Route, Redirect } from "react-router-dom";

class Main extends Component {
  state = {
    isAuthorized: false
  };

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Calendar} />
        <Route exact path="/editor" render={() => this.state.isAuthorized ? <Editor /> : <Redirect to="/authentication" />}/>
        <Route exact path="/settings" render={() => this.state.isAuthorized ? <Settings /> : <Redirect to="/authentication" />}/>
        <Route exact path="/authentication" component={Authentication} />
      </React.Fragment>
    );
  }
}

export default Main;
