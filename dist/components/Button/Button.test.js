import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";
import Button from "./Button";
describe("test Button Component", function () {
  it("simulates click event", function () {
    var onClick = sinon.spy();
    var button = shallow( /*#__PURE__*/React.createElement(Button, {
      onClick: onClick
    }, "Test Button"));
    button.simulate("click");
    expect(onClick).toHaveProperty("callCount", 1);
  });
});