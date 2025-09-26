import PropTypes from "prop-types";

export const Button = ({ children, disabled, type, to }) => {
  return (
    <button type={type} disabled={disabled} to={to}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  to: PropTypes.string,
};
