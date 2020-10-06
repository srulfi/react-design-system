import React from "react"

import useWindowSize from "./useWindowSize"

export default {
	title: "Hooks/useWindowSize",
	parameters: {
		docs: {
			description: {
				component:
					"This hook returns an object containing the browser window's width and height. If executed server-side (no window object) the value of width and height will be undefined.",
			},
		},
	},
	args: null,
}

export const Demo = () => {
	const { width, height } = useWindowSize()

	return (
		<>
			width: {width}px
			<br />
			height: {height}px
		</>
	)
}
