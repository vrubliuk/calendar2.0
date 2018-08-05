import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import history from "./store/reducers/history";
import employees from "./store/reducers/employees";
import temporary from "./store/reducers/temporary";
import authorization from "./store/reducers/authorization";
import days from "./store/reducers/days";

const rootReducer = combineReducers({
  history,
  employees,
  temporary,
  authorization,
  days
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
