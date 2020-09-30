import React from "react";
import Button from "./Button";
export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: {
      control: "color"
    }
  }
};

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(Button, args);
};

export var Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: "Button",
  onClick: function onClick() {}
};
export var Secondary = Template.bind({});
Secondary.args = {
  children: "Button",
  onClick: function onClick() {}
};
export var Small = Template.bind({});
Small.args = {
  primary: true,
  size: "small",
  children: "Button",
  onClick: function onClick() {}
};
export var Medium = Template.bind({});
Medium.args = {
  primary: true,
  size: "medium",
  children: "Button",
  onClick: function onClick() {}
};
export var Large = Template.bind({});
Large.args = {
  primary: true,
  size: "large",
  children: "Button",
  onClick: function onClick() {}
};