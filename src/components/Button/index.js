import PropTypes from "prop-types";
import "./index.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      className={props.classes?.join(" ")}
    >
      {props.label}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  classes: PropTypes.arrayOf(PropTypes.string),
};

export default Button;
