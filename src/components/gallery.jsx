import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      {" "}
      {/* Main container for the Gallery section, centers text */}
      <div className="container">
        {/* Centers content horizontally */}
        <div className="section-title">
          {/* Section title and description */}
          <h2>Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          {/* Row for layout (Bootstrap grid) */}
          <div className="portfolio-items">
            {/* Container for all portfolio items */}
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    {/* Responsive column layout:
                     * 6/12 columns (half width) on small screens
                     * 4/12 columns (one-third width) on medium and large screens
                     */}
                    {/* Image Component - Handles image display and interactions */}
                    <Image
                      title={d.title} // Title or description of the image
                      largeImage={d.largeImage} // Path to the full-size image
                      smallImage={d.smallImage} // Path to the thumbnail or smaller preview image
                    />
                  </div>
                ))
              : "Loading..."}
            {/* Displayed while data is being fetched */}
          </div>
        </div>
      </div>
    </div>
  );
};
