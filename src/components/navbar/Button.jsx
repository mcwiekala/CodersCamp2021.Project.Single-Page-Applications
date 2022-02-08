import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--small", "btn--medium", "btn--large"];

function Button({ children, onClick, submitButton, buttonStyle, buttonSize }) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[1];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={submitButton ? "submit" : "button"}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  buttonStyle: PropTypes.string,
  buttonSize: PropTypes.string,
  submitButton: PropTypes.bool,
};

Button.defaultProps = {
  onClick: null,
  buttonStyle: "btn--primary",
  buttonSize: "btn--medium",
  submitButton: false,
};

export default Button;
