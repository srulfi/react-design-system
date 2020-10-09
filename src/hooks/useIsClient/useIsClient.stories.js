import useIsClient from "./useIsClient"

export default {
	title: "Hooks/useIsClient",
	parameters: {
		docs: {
			description: {
				component:
					"This hook is used when we need to detect if the component is being rendered from the client or the server.",
			},
		},
	},
}

export const Demo = () => {
	const isClient = useIsClient()

	return isClient ? "Client" : "Server"
}
