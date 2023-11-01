// import React from "react";

// Styles
import "./services.css";
import PropTypes from "prop-types"; // Import PropTypes


// Card
import { ServicesCard } from "../Services/ServicesCard/ServicesCard";
import { Heading } from "../Heading/Heading";

const Services = ({ services }) => {
  return (
    <section
      data-aos="fade-right"
      className="services-container"
      name="services"
      id="services"
    >
      <Heading text="Services" />
      <div className="services-cards">
        {services &&
          services?.map(({ title, icon, tags }, index) => (
            <ServicesCard
              key={index}
              image={icon.asset.url}
              title={title}
              tags={tags}
            />
          ))}
      </div>
    </section>
  );
};


Services.propTypes = {
  services: PropTypes.array, // Validate that `testimonials` is an array
};

export default Services;
