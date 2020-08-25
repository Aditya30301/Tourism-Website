import React from "react";
import { NavLink } from "react-router-dom";
import "../Component/Components.css";
//import Container from "@material-ui/core/Container";
const Home = () => {
  return (
    <div className="MainComponent">
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg" container>
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Explore the beauty of Andaman.
                    <strong className="brand-name">
                      Induldge in the mysertry of Searching great Destinations
                    </strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented Guide making your Destinations
                  </h2>
                  <div className="mt-3">
                    <NavLink to="/Service" className="btn btn-outline-dark">
                      Start Adventure
                    </NavLink>
                  </div>
                </div>
                {/*Image*/}
                <div
                  id="gif"
                  className="col-lg-6 order-1  order-lg-2 header-img"
                >
                  <img
                    src={
                      "https://www.tupperwarebrands.com.my/e-perks/img/city.gif"
                    }
                    className="img-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
