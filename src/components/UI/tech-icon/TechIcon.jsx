import classes from "./TechIcon.module.scss";
import PropTypes from "prop-types";

const TechIcon = ({ item, className }) => {
  const cssClass = className
    ? `blur-overlay flex-center ${classes.skill} ${className}`
    : `blur-overlay flex-center ${classes.skill}`;
  return (
    <div className={cssClass}>
      <div className={classes.skill__logo}>
        <img
          src={item.svg}
          alt={item.name}
          title={item.name}
        />
      </div>
    </div>
  );
};

export default TechIcon;

TechIcon.propTypes = {
  item: PropTypes.shape({
    svg: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
  }),
  className: PropTypes.string,
};
