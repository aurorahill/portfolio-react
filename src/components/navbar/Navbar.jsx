import { useContext } from "react";
import classes from "./Navbar.module.scss";
import Logo from "../../assets/Logo";
import { FaTimes } from "react-icons/fa";
import { FaArrowUpRightFromSquare, FaBarsStaggered } from "react-icons/fa6";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";
import { LanguageContext } from "../../store/LanguageContext";

const Navbar = () => {
  const { language, toggleLanguage, translations } =
    useContext(LanguageContext);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <nav className={`card flex-center ${classes.navbar}`}>
      {showSidebar && (
        <div
          className={classes.navbar__overlay}
          onClick={() => setShowSidebar((prevState) => !prevState)}
        ></div>
      )}
      <div
        className={`flex-center ${classes.navbar__logo}`}
        onClick={() => scroll.scrollToTop({ duration: 500 })}
      >
        <Logo />
      </div>
      <aside
        className={`flex-center ${classes.sidebar} ${
          showSidebar && classes.visible
        }`}
      >
        <div className={classes.sidebar__top}>
          <span
            className={`icon-container ${classes.sidebar__closeBtn}`}
            onClick={() => setShowSidebar((prevState) => !prevState)}
          >
            <FaTimes />
          </span>
        </div>
        <div className={classes.sidebar__middle}>
          {translations[language].menu.map((list, index) => (
            <Link
              to={list.id.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={index}
              className={classes.sidebar__tab}
              activeClass="btn-shine"
              onClick={() => setShowSidebar(false)}
            >
              {list.name}
            </Link>
          ))}
        </div>
      </aside>
      <div className={`flex-center ${classes.navbar__btnWrapper}`}>
        <Link
          to="contact"
          smooth={true}
          offset={-70}
          duration={500}
          className={`btn flex-center ${classes.navbar__hire}`}
        >
          {translations[language].hireMe}
          <div className={`flex-center ${classes.navbar__icon}`}>
            <FaArrowUpRightFromSquare />
          </div>
        </Link>
        <button
          className={classes.navbar__toggleBtn}
          onClick={toggleLanguage}
        >
          {language === "en" ? "PL" : "EN"}
        </button>
        <FaBarsStaggered
          className={classes.navbar__menu}
          onClick={() => setShowSidebar((prevState) => !prevState)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
