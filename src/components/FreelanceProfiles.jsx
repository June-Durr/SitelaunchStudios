import React from "react";

export const FreelanceProfiles = () => {
  return (
    <div id="freelance" className="text-center" style={{ padding: "90px 0" }}>
      <div className="container">
        <div className="section-title" style={{ marginBottom: "50px" }}>
          <h2>Hire Us Through Trusted Platforms</h2>
          <p>
            For your convenience, we're also available on leading freelance
            platforms where you can view our portfolios, client reviews, and
            engage our services.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div
              className="freelance-profile"
              style={{
                marginBottom: "40px",
                padding: "30px",
                border: "1px solid #f2f2f2",
                borderRadius: "5px",
              }}
            >
              <a
                href="https://www.fiverr.com/s/Eg5Nzwd"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="profile-icon" style={{ marginBottom: "20px" }}>
                  <i className="fa fa-check-circle fa-3x"></i>
                </div>
                <h3>Fiverr Profile</h3>
                <p style={{ marginBottom: "25px" }}>
                  Hire us for specific web development tasks with the security
                  and convenience of Fiverr's platform.
                </p>
                <button className="btn btn-custom">View Fiverr Profile</button>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="freelance-profile"
              style={{
                marginBottom: "40px",
                padding: "30px",
                border: "1px solid #f2f2f2",
                borderRadius: "5px",
              }}
            >
              <a
                href="https://www.upwork.com/freelancers/~01b2118c60bee5052e"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="profile-icon" style={{ marginBottom: "20px" }}>
                  <i className="fa fa-star fa-3x"></i>
                </div>
                <h3>Upwork Profile</h3>
                <p style={{ marginBottom: "25px" }}>
                  Collaborate with us on larger projects with the protection and
                  project management features of Upwork.
                </p>
                <button className="btn btn-custom">View Upwork Profile</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
