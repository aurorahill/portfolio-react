import { useContext } from "react";
import { LanguageContext } from "../../store/LanguageContext";
import classes from "./Skills.module.scss";
import SkillCard from "./SkillCard.jsx";

const Skills = () => {
  const { language, translations } = useContext(LanguageContext);

  return (
    <section
      id="skills"
      className={classes.skills}
    >
      <div className="section-wrapper">
        <div className="section-header">
          <h2 className="shine flex-center">
            {translations[language].skillsTitle}
          </h2>
        </div>
        <div className={classes.skills__container}>
          {translations[language].skills.map((list, index) => (
            <SkillCard
              key={index}
              {...list}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
