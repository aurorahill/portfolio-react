import classes from "./ProjectCard.module.scss";
import PropTypes from "prop-types";
import { FaGithub, FaLaptop } from "react-icons/fa";
import TechIcon from "../UI/tech-icon/TechIcon";
import LinkButton from "../UI/link-button/LinkButton";

const ProjectCard = ({ title, content, img, githubUrl, url, stacks }) => {
  return (
    <div className={`card ${classes.projectCard}`}>
      <div className={classes.projectCard__top}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={classes.projectCard__picture}>
            <img
              src={img}
              alt={title}
            />
          </div>
        </a>
      </div>
      <div className={classes.projectCard__bottom}>
        <div className={classes.projectCard__info}>
          <div className={classes.projectCard__img}>
            <img
              src={img}
              alt={title}
            />
          </div>

          <h3 className={classes.projectCard__title}>{title}</h3>
        </div>
        <div className={classes.projectCard__actions}>
          <LinkButton
            icon={<FaGithub />}
            link={githubUrl}
            className={classes.projectCard__btn}
          >
            Repo
          </LinkButton>
          <LinkButton
            icon={<FaLaptop />}
            link={url}
            className={classes.projectCard__btn}
          >
            Demo
          </LinkButton>
        </div>
        <p className={`text-muted ${classes.projectCard__description}`}>
          {content}
        </p>

        <div className={`flex-center ${classes.projectCard__stacks}`}>
          {stacks.map((stack, index) => (
            <TechIcon
              key={index}
              item={stack}
              className={classes.projectCard__stack}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  stacks: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
