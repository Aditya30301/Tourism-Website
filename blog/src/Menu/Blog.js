import React, { Component } from "react";
import "./css/Contactus.css";

import AccountCircle from "@material-ui/icons/AccountCircle";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import register from "../images/undraw_travelers_qlt1.svg";
import adventure from "../images/undraw_adventure_4hum.svg";

export default class Blog extends Component {
  componentDidMount() {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".containerBlog");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  }

  render() {
    return (
      <div className="containerBlog">
        <div className="forms-containerBlog">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user">
                  {" "}
                  <AccountCircle />
                </i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i>
                  <LockOpenIcon />
                </i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="button solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i>
                    <FacebookIcon />
                  </i>
                </a>
                <a href="#" className="social-icon">
                  <i>
                    <TwitterIcon />
                  </i>
                </a>
                <a href="#" className="social-icon">
                  <i>
                    <InstagramIcon />
                  </i>
                </a>
                <a href="#" className="social-icon">
                  <i>
                    <LinkedInIcon />
                  </i>
                </a>
              </div>
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i>
                  <AccountCircle />
                </i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i>
                  <MailOutlineIcon />
                </i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i>
                  <LockOpenIcon />
                </i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="button" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i>
                    <FacebookIcon />
                  </i>
                </a>
                <a href="#" className="social-icon">
                  <i>
                    <TwitterIcon />
                  </i>
                </a>
                <a href="#" className="social-icon">
                  <i>
                    <InstagramIcon />
                  </i>
                </a>
                <a href="#" className="social-icon">
                  <i>
                    <LinkedInIcon />
                  </i>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-containerBlog">
          <div className="panel left-panel">
            <div className="content">
              <h4>Get Ready to Write a Blog</h4>
              <p>
                Please Sign Up to Create a Blog Share Your Experience Visiting
                Andaman
              </p>
              <button className="btn transparent" id="sign-up-btn">
                Sign up
              </button>
            </div>
            <img src={register} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h4>Create A Blog</h4>
              <p>
                Create Your Blog Share your toughs about visiting andaman with
                other,the emaralds,Sea,Evergreen Natural of Andman with the
                Wildlife here
              </p>
              <button className="btn transparent" id="sign-in-btn">
                Sign in
              </button>
            </div>
            <img src={adventure} className="image" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
