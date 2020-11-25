import PropTypes from "prop-types";
import "./index.css";

const Input = (props) => {
  return (
    <input
      type={props.type}
      value={props.value}
      name={props.name}
      onChange={props.onChange}
      className={props.classes?.join(" ")}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  classes: PropTypes.arrayOf(PropTypes.string),
};

export default Input;
