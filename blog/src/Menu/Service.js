import React from "react";
import Cards from "../Component/Cards";
const Service = () => {
  return (
    <>
      <div className="container-fluid nav_bg" container>
        <div className="row">
          <div className="col-10 mx-auto align-items-center">
            <h1>
              <center>Our Services</center>
            </h1>
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
