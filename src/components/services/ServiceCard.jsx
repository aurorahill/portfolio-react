import classes from "./ServiceCard.module.scss";
import PropTypes from "prop-types";
import SocialHundles from "../UI/social-handles/SocialHandles";

const ServiceCard = ({ item }) => {
  const { title, description, icon, color, colorRGB } = item;
  return (
    <div
      className={`blur-overlay ${classes.serviceCard}`}
      style={{ "--color-primary": color, "--color-primary-rgb": colorRGB }}
    >
      <div className={classes.serviceCard__top}>
        <div
          className={`blur-overlay ${classes.serviceCard__ball} ${classes.serviceCard__ball1}`}
        ></div>
        <div
          className={`blur-overlay ${classes.serviceCard__ball} ${classes.serviceCard__ball2}`}
        ></div>
        <div
          className={`blur-overlay ${classes.serviceCard__ball} ${classes.serviceCard__ball3}`}
        ></div>
        <div
          className={`blur-overlay ${classes.serviceCard__ball} ${classes.serviceCard__ball4}`}
        ></div>
        <div
          className={`blur-overlay ${classes.serviceCard__ball} ${classes.serviceCard__ball5} flex-center`}
        >
          {icon}
        </div>
      </div>
      <div className={classes.serviceCard__middle}>
        <h2 className={classes.serviceCard__title}>
          <span className="g-text">{title}</span>
        </h2>
        <p className={`text-muted ${classes.serviceCard__description}`}>
          {description}
        </p>
      </div>
      <div className={classes.serviceCard__bottom}>
        <SocialHundles
          classNameContainer={classes.serviceCard__socials}
          classNameIcon={classes.serviceCard__socialIcon}
        />
      </div>
    </div>
  );
};

export default ServiceCard;

ServiceCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired, // SVG, component, etc
    color: PropTypes.string.isRequired,
    colorRGB: PropTypes.string.isRequired,
  }).isRequired,
};
