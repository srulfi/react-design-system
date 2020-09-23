import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import sinon from "sinon";
import Button from "./Button";
describe("test Button Component", function () {
  var onClick = sinon.spy();
  var buttonContent = "Test Button";
  it("renders correctly", function () {
    var tree = renderer.create( /*#__PURE__*/React.createElement(Button, {
      onClick: onClick
    }, buttonContent)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("simulates click event", function () {
    var button = shallow( /*#__PURE__*/React.createElement(Button, {
      onClick: onClick
    }, buttonContent));
    button.simulate("click");
    expect(onClick).toHaveProperty("callCount", 1);
  });
});