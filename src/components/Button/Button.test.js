import React from "react"
import renderer from "react-test-renderer"
import { shallow } from "enzyme"
import sinon from "sinon"

import Button from "./Button"

describe("test Button Component", () => {
	const onClick = sinon.spy()
	const buttonContent = "Test Button"

	it("renders correctly", () => {
		const tree = renderer
			.create(<Button onClick={onClick}>{buttonContent}</Button>)
			.toJSON()
		expect(tree).toMatchSnapshot()
	})

	it("simulates click event", () => {
		const button = shallow(<Button onClick={onClick}>{buttonContent}</Button>)
		button.simulate("click")
		expect(onClick).toHaveProperty("callCount", 1)
	})
})
