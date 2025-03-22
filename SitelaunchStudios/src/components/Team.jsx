import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          {/* Section title container, centered using offset on medium and larger screens */}
          <h2>Meet the Team</h2>
          <p>
            Our team of experienced developers and designers is ready to build
            your next exceptional web experience. {/* Placeholder text */}
          </p>
        </div>
        <div id="row">
          {" "}
          {/* Should likely be className="row" for Bootstrap grid */}
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  {/* Each team member takes:
                   * 3/12 columns (1/4 width) on medium screens and up
                   * 6/12 columns (1/2 width) on small screens
                   */}
                  <div className="thumbnail">
                    {" "}
                    {/* Bootstrap's thumbnail component for image and caption */}
                    <img src={d.img} alt="..." className="team-img" />
                    {/* Image of the team member */}
                    <div className="caption">
                      <h4>{d.name}</h4> {/* Team member's name */}
                      <p>{d.job}</p> {/* Team member's job title */}
                    </div>
                  </div>
                </div>
              ))
            : "loading"}{" "}
          {/* Displayed while data is being fetched */}
        </div>
      </div>
    </div>
  );
};
