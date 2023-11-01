// import React from "react";
import "./heading.css";
import PropTypes from "prop-types"; // Import PropTypes

export const Heading = ({ text, style }) => {
  return (
    <div className="heading-container" style={style}>
      <h2 className="heading">{text}</h2>
      <span></span>
    </div>
  );
};

Heading.propTypes = {
  text: PropTypes.string.isRequired, // Validate that `text` is a required string
  style: PropTypes.string.isRequired, // Validate that `style` is a required string
};
