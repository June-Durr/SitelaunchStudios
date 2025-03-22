import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        {" "}
        {/* Main container for the hero section */}
        <div className="overlay">
          {" "}
          {/* Overlay for darkening the background image */}
          <div className="container">
            {" "}
            {/* Centers the content horizontally */}
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                {/* Content container, centered with an offset */}
                {/* Main Heading (Dynamically rendered) */}
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                {/* Paragraph (Dynamically rendered) */}
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                {/* Call-to-Action Button */}
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
