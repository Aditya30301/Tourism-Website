import React from "react";
//import TableFooter from "@material-ui/core/TableFooter";
//import Avatar from "@material-ui/core/Avatar";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Company<span>logo</span>
          </h3>

          <p className="footer-links">
            <a href="/Home" className="link-1">
              Home
            </a>

            <a href="/About">About</a>

            <a href="/Service">Services</a>

            <a href="/Contact">Contact</a>

            <a href="/VideoGallery">Video Gallery</a>
            <a href="/Navigate">Navigate</a>
          </p>

          <p className="footer-company-name">Company Name © 2020</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Photos and Videos By</span>Dinesh Kumar
              <br /> Lagnesh Kumar
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p></p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>Developers</span>

            <a
              href="https://www.linkedin.com/in/aditya-raj-singh-0193b51b4/"
              style={{ color: "whitesmoke", alignContent: "center" }}
            >
              <img
                className="Avatar"
                src="https://media-exp1.licdn.com/dms/image/C5603AQG7S7_23f9XGA/profile-displayphoto-shrink_400_400/0?e=1603929600&v=beta&t=fknuIfenl-85ua6YoS6WOb6pHptkVs4rcDVlu0CNxsQ"
                alt="Aditya"
                height="50px"
                width="50px"
              />
              &nbsp; Aditya Raj Singh &nbsp;
              <LinkedInIcon />
            </a>

            <br />

            <a
              href="https://www.linkedin.com/in/dinesh-lal/?originalSubdomain=in"
              style={{ color: "whitesmoke" }}
            >
              <img
                className="Avatar"
                src="https://media-exp1.licdn.com/dms/image/C4E03AQEGIDKyK1UvZg/profile-displayphoto-shrink_400_400/0?e=1603929600&v=beta&t=319qmauTr_wMJBHurFwns9vj_uarrk8Q5mZ9Ib0CSqo"
                alt="Aditya"
                height="50px"
                width="50px"
              />
              &nbsp; Dinesh Lal &nbsp;
              <LinkedInIcon />
            </a>
          </p>

          <div className="footer-icons"></div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
