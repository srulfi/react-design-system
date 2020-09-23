import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t&.quuack-button {\n\t\tfont-family: ", ";\n\t\tborder: 0;\n\t\tborder-radius: 3em;\n\t\tcursor: pointer;\n\t\tdisplay: inline-block;\n\t\tline-height: 1;\n\t}\n\t&.quuack-button--primary {\n\t\tbackground-color: ", ";\n\t\tcolor: ", ";\n\t}\n\t&.quuack-button--secondary {\n\t\tcolor: ", ";\n\t\tbackground-color: transparent;\n\t\tbox-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n\t}\n\t&.quuack-button--small {\n\t\tfont-size: 12px;\n\t\tpadding: 10px 16px;\n\t}\n\t&.quuack-button--medium {\n\t\tfont-size: 14px;\n\t\tpadding: 11px 20px;\n\t}\n\t&.quuack-button--large {\n\t\tfont-size: 16px;\n\t\tpadding: 12px 24px;\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from "styled-components";
import { Button } from "antd";
export default styled(Button)(_templateObject(), function (props) {
  return props.theme.fontBase;
}, function (props) {
  return props.theme.colorPrimary;
}, function (props) {
  return props.theme.textInverseColor;
}, function (props) {
  return props.theme.colorSecondary;
});