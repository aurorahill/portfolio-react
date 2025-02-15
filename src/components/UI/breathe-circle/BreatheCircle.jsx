import classes from "./BreatheCircle.module.scss";
import PropTypes from "prop-types";

const BreathCircle = ({ className }) => {
  let cssClass = classes.circle;
  if (className) {
    cssClass = classes.circle + " " + className;
  }
  return (
    <div className={cssClass}>
      <div className={classes.circle__breath}></div>
      <div className={classes.circle__breath}></div>
      <div className={classes.circle__breath}></div>
      <div className={classes.circle__breath}></div>
      <div className={classes.circle__breath}></div>
    </div>
  );
};
export default BreathCircle;

BreathCircle.propTypes = {
  className: PropTypes.string,
};
