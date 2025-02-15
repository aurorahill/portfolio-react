import { useContext } from "react";
import { LanguageContext } from "../../store/LanguageContext";
import PropTypes from "prop-types";
import classes from "./ContactButton.module.scss";

const ContactButton = ({ contact, download }) => {
  const { language, translations } = useContext(LanguageContext);

  return (
    <article className={classes.contactBtn}>
      <div className={classes.contactBtn__icon}>
        <img
          src={contact.icon}
          alt={contact.name}
        />
      </div>
      <div className={classes.contactBtn__content}>
        <div>
          <h3 className={classes.contactBtn__name}>{contact.name}</h3>
          <p className={`text-muted line-clamp1 ${classes.contactBtn__value}`}>
            {contact.value}
          </p>
        </div>
        <a
          href={contact.link}
          target={download ? "_self" : "_blank"}
          rel={download ? undefined : "noopener noreferrer"}
          className={`btn ${classes.contactBtn__btn}`}
          download={
            download
              ? language === "en"
                ? "KatarzynaLubeckaCV.pdf"
                : "KatarzynaLubeckaCVpl.pdf"
              : undefined
          }
        >
          <span
            className={`btn-shine ${classes.contactBtn__text}`}
            style={download ? { marginRight: "4.5rem" } : {}}
          >
            {download
              ? translations[language].contactBtnDownload
              : translations[language].contactBtnMsg}
          </span>
          <div
            className={`flex-center ${classes.contactBtn__btnIcon}`}
            style={{ backgroundColor: contact.color }}
          >
            {contact.btnIcon}
          </div>
        </a>
      </div>
    </article>
  );
};

export default ContactButton;

ContactButton.propTypes = {
  contact: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    btnIcon: PropTypes.node.isRequired,
  }).isRequired,
  download: PropTypes.bool,
};
