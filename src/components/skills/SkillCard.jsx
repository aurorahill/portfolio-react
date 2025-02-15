import classes from "./SkillCard.module.scss";
import PropTypes from "prop-types";

const SkillCard = ({ title, data }) => {
  return (
    <div className={`card ${classes.skillCard}`}>
      <h3 className={classes.skillCard__title}>
        <span className="g-text">{title}</span>
      </h3>
      <div className={classes.skillCard__content}>
        {data.map((list, index) => (
          <article
            className={classes.skillCard__details}
            key={index}
          >
            <div className={classes.skillCard__logo}>
              <img
                src={list.svg}
                alt={list.name}
                title={list.name}
              />
            </div>
            <div>
              <h4 className={classes.skillCard__name}>{list.name}</h4>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      svg: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
