import React from "react";

//Use any desgin material-ui-core,prime-react,bootstrap5,any desgin

//Basic Page Component import here
import Home from "./Menu/Home";
import About from "./Menu/About";
import Contact from "./Menu/Contact";
import Service from "./Menu/Service";
import Navigate from "./Menu/Navigate";
import VideoGallery from "./Menu/VideoGallery";

//bootstrap5 css styles for appying
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Navbar from "./Component/Navbar";

//Routing these Component
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

//footer
import Footer from "./Component/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Service" component={Service} />
        <Route exact path="/Navigate" component={Navigate} />
        <Route exact path="/VideoGallery" component={VideoGallery} />
        {/*Redirect url if any of those match*/}
        <Redirect to="/" />
      </Switch>
      {/*footer*/}
      <Footer />
    </div>
  );
}

export default App;
