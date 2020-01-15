import React, { Fragment } from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Rooms from "./screens/Rooms";
import Bookings from "./screens/Bookings";
import Visitors from "./screens/Visitors";
import Navbar from "./components/Navbar";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <Fragment>
      <HashRouter>
        <Navbar />
        <ToastContainer autoClose={2000} />
        <Switch>
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/bookings" component={Bookings} />
          <Route exact path="/visitors" component={Visitors} />
          <Route render={() => <Redirect to="/rooms" />} />
        </Switch>
      </HashRouter>
    </Fragment>
  );
}

export default App;
