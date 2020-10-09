import React from "react";
import useWindowSize from "./useWindowSize";
export default {
  title: "Hooks/useWindowSize",
  parameters: {
    docs: {
      description: {
        component: "This hook returns an object containing the browser window's width and height. If executed server-side (no window object) the value of width and height will be undefined."
      }
    }
  }
};
export var Demo = function Demo() {
  var _useWindowSize = useWindowSize(),
      width = _useWindowSize.width,
      height = _useWindowSize.height;

  return /*#__PURE__*/React.createElement(React.Fragment, null, "width: ", width, "px", /*#__PURE__*/React.createElement("br", null), "height: ", height, "px");
};