import React from "react";
import PropTypes from "prop-types";
import { Input as InputElement } from "./input.element"

/** You could build this component with
    css + classnames or with css-in-js

    It's possible to achieve the same results
    with both.

    Uncomment the option that works better for
    you and your team
*/

// Option 1: With class names and css

import "./button.scss";

const Input = ({ placeholder }) => (
  <InputElement placeholder={placeholder} />
)

// // Option 2: With css-in-js

// import { Element } from "./input.elements";

// function Input({ variant, ...props }) {
//   return (
//     <Element variant={variant} {...props}>
//       {props.children}
//     </Element>
//   );
// }

// Common properties:

Input.defaultProps = {
  placeholder: "hello"
};

Input.propTypes = {
  placeholder: PropTypes.string
};

export { Input };
