import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import AddClient from "./pages/AddClient";
import VisitingHours from "./pages/VisitingHours";

function App() {
  return (
    <>
      <Route exact path="/" component={AddClient} />
      <Route path="/agenda" component={VisitingHours} />
    </>
  );
}

export default App;
