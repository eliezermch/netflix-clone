import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import netflixLogo from "../../assets/images/logos/logo-netflix.png";

// Styles
import "./nav.css";

// Components
import { Search } from "../search/Search";
import { Profile } from "../profile/Profile";

const Nav = ({ showSearch = true, showProfile = true }) => {
  // States
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", transitionNav);
    return () => {
      window.removeEventListener("scroll", transitionNav);
    };
  }, []);

  /* Functions */

  const transitionNav = () => {
    if (window.scrollY > 100) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  return (
    <nav className={`nav ${showNav && "nav__black"}`}>
      <div className="nav-container">
        <section className="nav-container__left">
          <div>
            <Link to="/">
              <img
                className="nav_netflix_logo"
                src={netflixLogo}
                alt="Netflix Logo"
              />
            </Link>
          </div>

          <ul className="nav-container__list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Tv Shows</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">New & Popular</a>
            </li>
            <li>
              <a href="#">My List</a>
            </li>
            <li>
              <a href="#">Watch Again</a>
            </li>
          </ul>
        </section>
        {(showSearch || showProfile) && (
          <section className="nav-container__right">
            {showSearch && <Search />}
            {showProfile && <Profile />}
          </section>
        )}
      </div>
    </nav>
  );
};

export { Nav };
