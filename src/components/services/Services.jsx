import { useContext } from "react";
import { LanguageContext } from "../../store/LanguageContext";
import classes from "./Services.module.scss";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const { language, translations } = useContext(LanguageContext);

  return (
    <section
      id="services"
      className={classes.services}
    >
      <div className="section-wrapper">
        <div className="section-header">
          <h2 className="shine">{translations[language].servicesTitle}</h2>
        </div>
        <div className={classes.services__group}>
          {translations[language].services.map((item, index) => (
            <ServiceCard
              key={index}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
