/** @format */

import React, { useState } from "react";
import "./Landing.css";
import assets from "../../assets/assets";
import {
  Contact2,
  Contact2Icon,
  ContactRoundIcon,
  MenuIcon,
  SearchIcon,
  XIcon,
} from "lucide-react";

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="landing ">
      <div className="container">
        <header>
          <h1 className="logo ">Coffo</h1>
          {isMenuOpen ? (
            <XIcon onClick={toggleMenu} className="menu-icon" />
          ) : (
            <MenuIcon onClick={toggleMenu} className="menu-icon" />
          )}
          {isMenuOpen && (
            <nav className={`nav ${isMenuOpen ? "block" : "hidden"} md:hidden`}>
              <ul className="nav-list ">
                <li className="nav_item active">Home</li>
                <li className="nav_item">About</li>
                <li className="nav_item">Coffees</li>
                <li className="nav_item">Shop</li>
                <li className="nav_item">Blog</li>
                <li className="nav_item">Contacts</li>
              </ul>
            </nav>
          )}
          <nav className="hidden md:flex items-center">
            <ul className="nav-list flex items-center">
              <li className="nav_item active">Home</li>
              <li className="nav_item">About</li>
              <li className="nav_item">Coffees</li>
              <li className="nav_item">Shop</li>
              <li className="nav_item">Blog</li>
              <li className="nav_item">Contacts</li>
            </ul>
          </nav>
        </header>
        {/* header section ends  */}

        {/* hero section begins  */}
        <div className="hero">
          <div className="hero-info">
            <h2>Coffee Shop</h2>
            <p>more-or-less distribution of letters, as opposed to using</p>
          </div>

          <div className="btn">
            <button className="about-btn">About Us</button>
            <button className="call-btn">Call Now</button>
          </div>
        </div>
      </div>
    </section>

    //MERN Stack
    //MongoDB
    //Express Js
    // React Js
    // Node Js

    // MEAN Stack
    //MongoDB
    //Express Js
    // Angular Js
    // Node Js
  );
};

export default Landing;
