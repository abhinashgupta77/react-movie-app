import React from "react";
import PropTypes from "prop-types";

import "./Card.scss";

const Card = ({ children, className, ...props }) => (
  <div className={`Card ${className}`} {...props}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Card.defaultProps = {
  children: null,
  className: "",
};

export default Card;
