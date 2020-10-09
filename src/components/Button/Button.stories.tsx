import React from "react"
import { Story } from "@storybook/react/types-6-0"

import Button, { ButtonProps } from "./Button"

export default {
	title: "Components/Button",
	component: Button,
	argTypes: {
		backgroundColor: { control: "color" },
	},
}

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
	primary: true,
	children: "Button",
	onClick: () => console.log("primary button clicked"),
}

export const Secondary = Template.bind({})
Secondary.args = {
	children: "Button",
	onClick: () => console.log("secondary button clicked"),
}

export const Small = Template.bind({})
Small.args = {
	primary: true,
	size: "small",
	children: "Button",
	onClick: () => console.log("primary small button clicked"),
}

export const Medium = Template.bind({})
Medium.args = {
	primary: true,
	size: "medium",
	children: "Button",
	onClick: () => console.log("primary medium button clicked"),
}

export const Large = Template.bind({})
Large.args = {
	primary: true,
	size: "large",
	children: "Button",
	onClick: () => console.log("primary large button clicked"),
}
