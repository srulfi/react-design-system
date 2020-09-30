import React from "react"
import { shallow } from "enzyme"
import sinon from "sinon"

import Button from "./Button"

describe("test Button Component", () => {
	it("simulates click event", () => {
		const onClick = sinon.spy()
		const button = shallow(<Button onClick={onClick}>Test Button</Button>)
		button.simulate("click")
		expect(onClick).toHaveProperty("callCount", 1)
	})
})
