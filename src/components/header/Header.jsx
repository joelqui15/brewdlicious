import "./Header.css";

const Header = () => (
  <header className="header" id="home">
    <div className="header__side">
      {/* Left side gets 1 equal share */}
      <img
        src="src/images/logobrewd.png"
        alt="logo of a coffee cup and text that say brew d'licious"
        className="header__logo"
      />
    </div>

    <nav className="header__links">
      {/* Middle stays naturally sized and truly centered */}
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
    </nav>

    <div className="header__side header__side_right">
      {/* Right side gets the SAME amount of space as the left */}
      <button className="header__menu-button">View Menu</button>
    </div>
  </header>
);

export default Header;
