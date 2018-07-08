import React, {Component} from "react";
import './Main.css';
import Calendar from "../Calendar/Calendar"
import Editor from "../Editor/Editor"
import Settings from "../Settings/Settings"

import {Route} from 'react-router-dom'

class Main extends Component {



  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Calendar} />
        <Route exact path="/editor" component={Editor} />
        <Route exact path="/settings" component={Settings} />
      </React.Fragment>
    );
  }
}

export default Main;
