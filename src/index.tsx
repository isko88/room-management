import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/Main/App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store/index";

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
