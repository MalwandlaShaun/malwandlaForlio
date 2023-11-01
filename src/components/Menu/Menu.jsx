// import React from "react";
import "./menu.css";
// Router
import PropTypes from "prop-types"; // Import PropTypes
import { NavLink } from "../../components/Nav/NavLink/NavLink";

export const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <NavLink text="Home" path="home" onClick={() => setMenuOpen(false)} />
        <NavLink
          text="Services"
          path="services"
          onClick={() => setMenuOpen(false)}
        />
        <NavLink
          text="Portfolio"
          path="portfolio"
          onClick={() => setMenuOpen(false)}
        />

        <NavLink
          text="Contact"
          path="contact"
          onClick={() => setMenuOpen(false)}
        />
      </ul>
    </div>
  );
};

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired, // Validate that `menuOpen` is a required boolean
  setMenuOpen: PropTypes.func.isRequired, // Validate that `setMenuOpen` is a required function
};
