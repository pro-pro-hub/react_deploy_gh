import React from "react";
import ReactDOM from "react-dom/client";
/* import "./index.css";
import App from "./App"; */
/* import "./challenge/index.css";
import ChallengeApp from "./challenge/ChallengeApp"; */
/* import ChallengeApp from "./fetch_challenge/ChallengeApp";
import "./fetch_challenge/index.css"; */
import "./react_router/index.css";
import App from "./react_router/App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* import "./react_router_dave/index.css";
import App from "./react_router_dave/App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from "easy-peasy";
import store from "./react_router_dave/store/store"; */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
    {/*  <App /> */}
    {/* <ChallengeApp /> */}
    {/* <ChallengeApp /> */}
    {/* <StoreProvider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </StoreProvider> */}
  </React.StrictMode>
);
