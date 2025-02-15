import { useContext } from "react";
import { LanguageContext } from "../../store/LanguageContext";
import classes from "./Contact.module.scss";

import SocialHandles from "../UI/social-handles/SocialHandles";
import ContactForm from "./ContactForm";
import ContactButton from "./ContactButton";
import RoundShape from "../UI/roundShape/RoundShape";

const Contact = () => {
  const { language, translations } = useContext(LanguageContext);

  return (
    <section
      id="contact"
      className={classes.contact}
    >
      <div className={`section-wrapper ${classes.contact__wrapper}`}>
        <div className={classes.contact__shape}>
          <RoundShape />
        </div>
        <div className={classes.contact__group}>
          <div className={classes.contact__left}>
            <h3 className={classes.contact__title}>
              {translations[language].contactDescription1}
              <span className={`shine ${classes.contact__title}`}>
                {translations[language].contactDescription2}
              </span>
              <p>{translations[language].contactDescription3}</p>
            </h3>
            <div className={classes.contact__options}>
              {translations[language].contactInfo.map((contact, index) => (
                <ContactButton
                  contact={contact}
                  key={index}
                  download={contact.name === "CV" ? true : false}
                />
              ))}
            </div>
            <div className={classes.contact__socials}>
              <SocialHandles />
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
