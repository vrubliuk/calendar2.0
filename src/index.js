import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
// import reducer from "./store/reducer";

import history from "./store/reducers/history";
import employees from "./store/reducers/employees";
import temporary from "./store/reducers/temporary";
import colors from "./store/reducers/colors";
import authorization from "./store/reducers/authorization";
import days from "./store/reducers/days";

const rootReducer = combineReducers({
  history,
  employees,
  temporary,
  colors,
  authorization,
  days
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
