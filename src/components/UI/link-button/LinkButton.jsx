import classes from "./LinkButton.module.scss";
import PropTypes from "prop-types";
import { useContext } from "react";
import { LanguageContext } from "../../../store/LanguageContext";

const LinkButton = ({ children, className, download, link, icon }) => {
  const { language } = useContext(LanguageContext);
  return (
    <a
      href={link}
      target={download ? "_self" : "_blank"}
      rel={download ? undefined : "noopener noreferrer"}
      className={className ? `${classes.button} ${className}` : classes.button}
      download={
        download
          ? language === "en"
            ? "KatarzynaLubeckaCV.pdf"
            : "KatarzynaLubeckaCVpl.pdf"
          : undefined
      }
    >
      <span>{icon}</span>
      {children}
    </a>
  );
};

export default LinkButton;

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  download: PropTypes.bool,
  link: PropTypes.string.isRequired,
  icon: PropTypes.node,
};
