import React from "react";

//Use any desgin material-ui-core,prime-react,bootstrap5,any desgin

//Basic Page Component import here
import Home from "./Menu/Home";
import About from "./Menu/About";
import Contact from "./Menu/Contact";
import Service from "./Menu/Service";

//bootstrap5 css styles for appying
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Component/Navbar";
//Routing these Component
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Service" component={Service} />

        {/*Redirect url if any of those match*/}
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
