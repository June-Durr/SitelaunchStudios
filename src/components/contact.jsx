import { useState } from "react"; // For managing component state
import emailjs from "emailjs-com"; // For sending emails
import React from "react";

// Initial state for form fields
const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  // Use state to manage form input values
  const [{ name, email, message }, setState] = useState(initialState);

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(name, email, message); // Log form data to the console (for debugging)

    emailjs
      .sendForm(
        // Send email using EmailJS
        "service_vajb0vs", // EmailJS service ID
        "template_ofttagj", // EmailJS template ID
        e.target, // The form element
        "UIhgArm96zCcvmZXQ" // Your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text); // Log success message
          setState(initialState); // Reset form fields
          e.target.reset(); // Reset the form (clear input values)
        },
        (error) => {
          console.log(error.text); // Log error message
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            {/* Main column for the contact form (8/12 columns on medium screens and up) */}
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              {/* Contact Form */}
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                {/* Form with validation, handles submission using handleSubmit function */}
                <div className="row">
                  <div className="col-md-6">
                    {/* Name input field */}
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>{" "}
                      {/* Placeholder for error messages */}
                    </div>
                  </div>
                  <div className="col-md-6">
                    {" "}
                    {/* Email input field */}
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  {" "}
                  {/* Message textarea */}
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div> {/* Placeholder for success message */}
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-md-3 col-md-offset-1 contact-info">
            {/* Address */}
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>

            {/* Phone */}
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>

            {/* Email */}
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div id="footer">
        <div className="container text-center">
          <p>2024 SiteLaunch Studios React Land Page</p>
        </div>
      </div>
    </div>
  );
};
