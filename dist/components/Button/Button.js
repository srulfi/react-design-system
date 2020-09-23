import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from "react";
import classNames from "classnames";
import StyledButton from "./Button.styles";
/**
 * Primary UI component for user interaction
 */

var Button = function Button(_ref) {
  var primary = _ref.primary,
      backgroundColor = _ref.backgroundColor,
      size = _ref.size,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["primary", "backgroundColor", "size", "children"]);

  var mode = primary ? "quuack-button--primary" : "quuack-button--secondary";
  return /*#__PURE__*/React.createElement(StyledButton, Object.assign({
    type: "button",
    className: classNames(mode, "quuack-button", "quuack-button--".concat(size)),
    style: backgroundColor && {
      backgroundColor: backgroundColor
    }
  }, props), children);
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium"
};
export default Button;