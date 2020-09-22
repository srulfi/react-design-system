import React from "react"

import Button from "./Button"

export default {
	title: "Design System/Button",
	component: Button,
	argTypes: {
		backgroundColor: { control: "color" },
	},
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
	primary: true,
	children: "Button",
}

export const Secondary = Template.bind({})
Secondary.args = {
	children: "Button",
}

export const Large = Template.bind({})
Large.args = {
	primary: true,
	size: "large",
	children: "Button",
}

export const Medium = Template.bind({})
Medium.args = {
	primary: true,
	size: "medium",
	children: "Button",
}

export const Small = Template.bind({})
Small.args = {
	primary: true,
	size: "small",
	children: "Button",
}
