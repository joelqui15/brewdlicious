import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="header" id="home">
        <img
          src="src/images/logobrewd.png"
          alt="logo of a coffee cup and text that say brew d'licious"
          className="header__logo"
        />
        <div className="header__links">
          <a href="#" className="header__link">
            Home
          </a>
          <a href="#menu" className="header__link">
            Menu
          </a>
          <a href="#gallery" className="header__link">
            Gallery
          </a>
          <a href="#visit-us" className="header__link">
            Visit-us
          </a>
          <a href="#contact" className="header__link">
            Contact
          </a>
        </div>
        <button className="header__menu-button">View Menu</button>
      </header>
    </>
  );
}

export default Header;
