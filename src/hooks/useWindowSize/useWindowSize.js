import { useEffect, useState, useCallback } from "react"

import useIsClient from "../useIsClient"

const useWindowSize = () => {
	const isClient = useIsClient()

	const getSize = useCallback(
		() => ({
			width: isClient ? window.innerWidth : undefined,
			height: isClient ? window.innerHeight : undefined,
		}),
		[isClient]
	)

	const [windowSize, setWindowSize] = useState(getSize)

	useEffect(() => {
		const handleResize = () => {
			if (isClient) {
				setWindowSize(getSize())
			}
		}

		window.addEventListener("resize", handleResize)

		handleResize()

		return () => window.removeEventListener("resize", handleResize)
	}, [isClient, getSize])
	return windowSize
}

export default useWindowSize
