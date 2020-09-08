import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import AddClient from "./pages/AddClient";
import AvailableHours from "./pages/AvailableHours";
import Visit from "./Components/Visit";

function App() {
  return (
    <>
      <Route exact path="/" component={AddClient} />
      <Route path="/agenda" component={AvailableHours} />
      <Route path="/confirm" component={Visit} />
    </>
  );
}

export default App;
