import { useContext } from "react";
import { LanguageContext } from "../../store/LanguageContext";
import Hole from "../UI/hole/Hole";
import classes from "./About.module.scss";
import TechIcon from "../UI/tech-icon/TechIcon";
import LinkButton from "../UI/link-button/LinkButton";
import { FaDownload } from "react-icons/fa";

const About = () => {
  const { language, translations } = useContext(LanguageContext);

  return (
    <section
      id="about"
      className={`section-wrapper ${classes.about}`}
    >
      <div className={`card ${classes.about__wrapper}`}>
        <div className={classes.about__hole}>
          <Hole />
        </div>
        <div
          className={`${classes.about__column} ${classes.skills} flex-center`}
        >
          <div className={classes.skills__container}>
            {translations[language].skills.map((skill, index) => (
              <div
                className={classes.skills__group}
                key={index}
              >
                {skill.data.map((item, key) => (
                  <TechIcon
                    key={key}
                    item={item}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className={`${classes.about__column} ${classes.aboutMe}`}>
          <h2 className="shine">{translations[language].aboutMe.title}</h2>
          <h1 className={classes.about__title}>
            {translations[language].aboutMe.name}{" "}
            <span className="color-primary">Katarzyna Lubecka</span>
          </h1>
          <p className={`text-muted ${classes.aboutMe__description}`}>
            {translations[language].aboutMe.description}
          </p>
          <LinkButton
            icon={<FaDownload />}
            link={
              language === "en"
                ? "/KatarzynaLubeckaCV.pdf"
                : "/KatarzynaLubeckaCVpl.pdf"
            }
            download
          >
            {translations[language].aboutMe.download}
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default About;
