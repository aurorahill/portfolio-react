import { useContext } from "react";
import { LanguageContext } from "../../store/LanguageContext";
import classes from "./Header.module.scss";
import HeaderTitle from "../UI/header-title/HeaderTitle";
import profile from "../../assets/profile.png";
import CodeBlock from "../UI/code-block/CodeBlock";
import Facts from "../UI/facts/Facts";
import SocialHundles from "../UI/social-handles/SocialHandles";
import BreathCircle from "../UI/breathe-circle/BreatheCircle";

const code = `
const developer = {
  firstName: "Katarzyna",
  lastName: "Lubecka",
  hobby: repeat = () => {
    //eat();
    //code();
    //sleep();
    //repeat();
  }
}`;

const Header = () => {
  const { language, translations } = useContext(LanguageContext);
  return (
    <header
      id="header"
      className={classes.header}
    >
      <BreathCircle className={classes.header__circle} />
      <div className="section-wrapper">
        <div className={`${classes.header__grid} ${classes.header__upper}`}>
          <div className={classes.header__column}>
            <HeaderTitle />
          </div>
          <div className={classes.header__column}>
            <img
              src={profile}
              alt="Profile"
              className={classes.header__profile}
            />
          </div>
        </div>
        <div
          className={`card ${classes.header__grid} ${classes.header__lower}`}
        >
          <CodeBlock
            language={"javascript"}
            code={code}
          />
          <div className={classes.header__wrapper}>
            <p className={`text-muted ${classes.header__description}`}>
              {translations[language].header.description}
            </p>
            <Facts />
            <div className={classes.header__socials}>
              <SocialHundles />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
