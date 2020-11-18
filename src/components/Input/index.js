import PropTypes from "prop-types";
import "./index.css";

const Input = (props) => {
  return (
    <input
      type={props.type}
      value={props.value}
      name={props.name}
      onChange={props.onChange}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
