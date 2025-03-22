import React from "react";

export const Image = ({ title, largeImage, smallImage }) => {
  // Enhance alt text with keywords for better SEO
  const enhancedAltText = `${title} - Custom React web development project by SiteLaunch Studios Miami`;

  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        <a href={largeImage} title={title} data-lightbox-gallery="gallery1">
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img
            src={smallImage}
            className="img-responsive"
            alt={enhancedAltText}
            loading="lazy"
          />
        </a>
      </div>
    </div>
  );
};
