//component loaded from https://v5.getbootstrap.com/

import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid bg">
        <div className="row">
          <div className="column">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  Logo
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        exact
                        className="nav-link"
                        activeClassName="menu_active"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        exact
                        className="nav-link"
                        activeClassName="menu_active"
                        to="/About"
                      >
                        About
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        exact
                        className="nav-link"
                        activeClassName="menu_active"
                        to="/Service"
                      >
                        Services
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        exact
                        className="nav-link"
                        activeClassName="menu_active"
                        to="/Contact"
                      >
                        Contact
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        exact
                        className="nav-link"
                        activeClassName="menu_active"
                        to="/VideoGallery"
                      >
                        Video Gallery
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        exact
                        className="nav-link"
                        activeClassName="menu_active"
                        to="/Navigate"
                      >
                        Navigate
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
