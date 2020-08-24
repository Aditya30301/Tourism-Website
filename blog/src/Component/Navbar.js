//component loaded from https://v5.getbootstrap.com/
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid bg">
        <div className="row">
          <div className="column">
            <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  Logo
                </a>
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
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        About
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Services
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Contact
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Video Gallery
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Navigate
                      </a>
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
