import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const LinkButton = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-150"
    >
      {children}
    </Link>
  );
};

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};
