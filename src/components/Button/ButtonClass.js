import { Component } from "react";
import PropTypes from "prop-types";

export default class ButtonClass extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    label: PropTypes.string.isRequired,
  };

  componentDidMount() {
    // Nuestro componente ha sido cargado correctamente
  }

  render() {
    return (
      <button
        type={this.props.type}
        onClick={this.props.onClick}
        disabled={this.props.disabled}
      >
        {this.props.label}
      </button>
    );
  }
}
