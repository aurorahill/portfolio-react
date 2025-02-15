import { useContext } from "react";
import { LanguageContext } from "../../store/LanguageContext";
import classes from "./Projects.module.scss";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { language, translations } = useContext(LanguageContext);

  return (
    <section
      id="projects"
      className={classes.projects}
    >
      <div className="section-wrapper">
        <div className="section-header">
          <h2 className="shine">{translations[language].projectsTitle}</h2>
        </div>
        <div className={classes.projects__container}>
          {translations[language].projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
