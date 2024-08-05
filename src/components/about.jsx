import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      {" "}
      {/* Main container for the About section */}
      <div className="container">
        {" "}
        {/* Centers content horizontally */}
        <div className="row">
          {/* Row for layout */}
          <div className="col-xs-12 col-md-6">
            {/* Image column, full width on small screens, half width on medium and larger */}{" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            {/* Text column, same responsive behavior as image column */}
            <div className="about-text">
              {/* Container for text content */}

              {/* Main Heading */}
              <h2>About Us</h2>

              {/* About Paragraph (Conditionally Rendered) */}
              <p>{props.data ? props.data.paragraph : "loading..."}</p>

              {/* Subheading */}
              <h3>Why Choose Us?</h3>

              {/* List Container */}
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {/* Dynamically Render List Items (First List) */}
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {/* Dynamically Render List Items (Second List) */}
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
