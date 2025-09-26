import PropTypes from "prop-types";

export const Button = ({ children, disabled, type, to, className = "" }) => {
  return (
    <button type={type} disabled={disabled} to={to} className={className}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
};
