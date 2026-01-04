import React from "react";

const MediumCard = ({ title, author, date, link, image }) => {
  // Format date: Dec 13, 2025
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="medium-card"
    >
      {/* Thumbnail */}
      <div className="medium-card-image">
        <img
          src={image}
          alt={title}
          className="card-image"
        />
      </div>

      {/* Content */}
      <div className="medium-card-content">
        <div>
          <h3 className="card-title">
            {title}
          </h3>

          <p className="card-author">
            <span className="label">Author:</span> {author}
          </p>
          <p className="card-date">
            <span className="label">Published:</span> {formattedDate}
          </p>
        </div>

        {/* Bottom Accent Bar  */}
        <div className="card-accent-bar"></div>
      </div>
    </a>
  );
};

export default MediumCard;
