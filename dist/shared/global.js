import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\t", "\n \tbody {\n  \t", "\n \t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tfont-family: ", ";\n\tfont-size: ", "px;\n\tcolor: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import { createGlobalStyle, css } from "styled-components";
import { normalize } from "styled-normalize";
import { colors, typography } from "./styles";
var bodyStyles = css(_templateObject(), typography.type.primary, typography.size.s3, colors.primary);
var GlobalStyle = createGlobalStyle(_templateObject2(), normalize, bodyStyles);
export default GlobalStyle;