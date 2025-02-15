import classes from "./SocialHandles.module.scss";
import { useContext } from "react";
import { LanguageContext } from "../../../store/LanguageContext";
import PropTypes from "prop-types";

const SocialHandles = ({ classNameContainer, classNameIcon }) => {
  const { language, translations } = useContext(LanguageContext);

  let cssIcon = classNameIcon
    ? `icon-container ${classes.socials__icon} ${classNameIcon}`
    : `icon-container ${classes.socials__icon}`;
  return (
    <div
      className={
        classNameContainer
          ? `${classes.socials} ${classNameContainer}`
          : classes.socials
      }
    >
      {translations[language].socialHandles.map((media, index) => (
        <a
          key={index}
          href={media.link}
          target={
            index === translations[language].socialHandles.length - 1
              ? "_self"
              : "_blank"
          }
          rel={
            index === translations[language].socialHandles.length - 1
              ? undefined
              : "noopener noreferrer"
          }
          className={cssIcon}
        >
          <span className={`flex-center ${classes.socials__tooltip}`}>
            {media.icon} {media.name}
          </span>
          {media.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialHandles;

SocialHandles.propTypes = {
  classNameIcon: PropTypes.string,
  classNameContainer: PropTypes.string,
};
