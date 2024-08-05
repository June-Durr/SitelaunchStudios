import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top ">
      {/* Main navigation bar, fixed to the top */}
      <div className="container">
        {/* Centers content using Bootstrap's container class */}
        <div className="navbar-header">
          {/* Contains brand and toggle button */}
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            {/* Screen reader text */}
            <span className="icon-bar"></span> {/* Hamburger menu icon bars */}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>{" "}
          {/* Brand/Logo */}
          <a className="navbar-brand page-scroll" href="#page-top">
            Site Launch Studios
          </a>{" "}
        </div>

        {/* Navigation Links */}
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            {/* <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li> */}
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
