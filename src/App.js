import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import AddClient from "./pages/AddClient";
import GetApi from "./services/GetApi";
import Calendario from "./Components/Calendario";
import DatePickers from "./pages/DatePickers";
import Confirm  from "./Components/Confirm ";
import Header  from "./Components/Header";
import Hours from "./Components/Hours";


function App() {
  return (
   
    <>
     {/* <GetApi /> */}
      <Route exact path="/" component={GetApi} />
      {/* <Route path="/agenda" component={DatePickers} /> */}
      <Route path="/confirm" component={Confirm} />
    </>
  );
}

export default App;
