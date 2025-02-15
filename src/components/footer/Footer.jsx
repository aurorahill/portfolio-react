import { useContext } from "react";
import { LanguageContext } from "../../store/LanguageContext";
import classes from "./Footer.module.scss";
import { Link } from "react-scroll";
import SocialHandles from "../UI/social-handles/SocialHandles";

const Footer = () => {
  const { language, translations } = useContext(LanguageContext);

  return (
    <footer className={classes.footer}>
      <div className={`section-wrapper ${classes.footer__wrapper}`}>
        <ul className={`flex-center ${classes.footer__nav}`}>
          {translations[language].menu.map((list, index) => (
            <Link
              to={list.id.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              key={index}
              className={classes.footer__navItem}
            >
              {list.name}
            </Link>
          ))}
        </ul>
        <div className="flex-center">
          <SocialHandles />
        </div>
        <div className={classes.footer__copyright}>
          <h3>Copyright &copy; 2025</h3>
          <p className="text-muted">Built by Katarzyna Lubecka</p>
        </div>
        <div className={classes.footer__logo}>
          <h1 className={classes.footer__name}>Katarzyna Lubecka</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
