import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          {" "}
          {/* Row for layout using Bootstrap grid */}
          {props.data
            ? props.data.map((d, i) => (
                // Dynamically render service items based on props.data
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {/* Each service takes 1/3 width (4/12 columns) on medium screens and up */}
                  <i className={d.icon}></i> {/* Icon for the service */}
                  <div className="service-desc">
                    <h3>{d.name}</h3> {/* Service name */}
                    <p>{d.text}</p> {/* Service description */}
                  </div>
                </div>
              ))
            : "loading"}
          {/*Display "loading" while data is fetched*/}
        </div>
      </div>
    </div>
  );
};
