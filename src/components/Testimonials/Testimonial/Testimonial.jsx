import React from "react";

// Styles
import "../testimonials.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkAlt";

const Testimonial = ({ testimonial }) => {
  return (
    <>
      <div className="details">
        <img alt="certicate" className="text" src={testimonial.img} />
        <div className="source">
          <p className="name">{testimonial.name}</p>
          <a
            href={testimonial.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
            title="verify"
          >
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              size="lg"
              className="icon"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
