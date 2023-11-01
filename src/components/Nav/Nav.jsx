// import React from "react";

// Animation
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";

// Styles
import PropTypes from "prop-types"; // Import PropTypes
import "./nav.css";

// Components
import MenuIcon from "../Menu/MenuIcon/MenuIcon";

const Nav = ({ menuOpen, setMenuOpen }) => {
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={"nav-wrapper " + (menuOpen && "menuActive")}>
      <motion.div
        id="navbar"
        className={"nav-container"}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <span
          className={"logo " + (menuOpen && "menuActive")}
          onClick={() => scroll.scrollToTop()}
        >
          &lt; Malwandla /&gt;
        </span>

        <MenuIcon handleClick={handleClick} menuOpen={menuOpen} />
      </motion.div>
    </div>
  );
};

Nav.propTypes = {
  menuOpen: PropTypes.bool.isRequired, // Validate that `menuOpen` is a required boolean
  setMenuOpen: PropTypes.func.isRequired, // Validate that `setMenuOpen` is a required function
};

export default Nav;
