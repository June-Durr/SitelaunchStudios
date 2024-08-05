import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      {/* Main container for the Features section, centered text */}
      <div className="container">
        {/* Section title container, 10 columns wide on medium screens and up, offset by 1 column to center */}
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        {/* Feature items container */}
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                // Dynamically render feature items
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {/* Each feature takes 6 columns on extra-small screens, 3 columns on medium and up */}{" "}
                  <i className={d.icon}></i> {/* Icon for the feature */}
                  <h3>{d.title}</h3> {/* Feature title */}
                  <p>{d.text}</p> {/* Feature description */}
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
