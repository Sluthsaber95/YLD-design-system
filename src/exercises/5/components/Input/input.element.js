import React from "react";
import PropTypes from "prop-types";

export const Input = ({ element, ...props}) => {
  const Element = element

  return (
    <Element {...props}/>
  )
}

Input.defaultProps = {
  element: "input"
}

Input.propTypes = {
  element: PropTypes.node
}