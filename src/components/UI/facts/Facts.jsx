import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import classes from "./Facts.module.scss";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { LanguageContext } from "../../../store/LanguageContext";

const Facts = () => {
  const { language, translations } = useContext(LanguageContext);
  const [learning, setLearning] = useState(0);
  const [projects, setProjects] = useState(0);
  const [effort, setEffort] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLearning(2);
      setEffort(100);
      setProjects(10);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`flex-center ${classes.facts}`}>
      <div className={classes.facts__item}>
        <div className="flex-center">
          <Odometer
            value={learning}
            className={classes.facts__title}
          />
          <h3 className={classes.facts__title}>K+</h3>
        </div>
        <p className={classes.facts__label}>
          {translations[language].header.fact1}
        </p>
      </div>
      <div className={classes.facts__item}>
        <div className="flex-center">
          <Odometer
            value={effort}
            className={classes.facts__title}
          />
          <h3 className={classes.facts__title}>%</h3>
        </div>
        <p className={classes.facts__label}>
          {translations[language].header.fact2}
        </p>
      </div>
      <div className={classes.facts__item}>
        <div className="flex-center">
          <Odometer
            value={projects}
            className={classes.facts__title}
          />
          <h3 className={classes.facts__title}>+</h3>
        </div>
        <p className={classes.facts__label}>
          {translations[language].header.fact3}
        </p>
      </div>
    </div>
  );
};

export default Facts;
