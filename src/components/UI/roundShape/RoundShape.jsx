import classes from "./RoundShape.module.scss";

const RoundShape = () => {
  return (
    <div className={classes.shape}>
      <div className={classes.shape__sides}>
        <span
          className={`${classes.shape__side} ${classes.shape__side1}`}
        ></span>
        <span
          className={`${classes.shape__side} ${classes.shape__side2}`}
        ></span>
      </div>
    </div>
  );
};

export default RoundShape;
