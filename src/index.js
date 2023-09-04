import { StrictMode } from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";

import "./index.css";
import { App } from "./app";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <StrictMode>
          <App />
  </StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
