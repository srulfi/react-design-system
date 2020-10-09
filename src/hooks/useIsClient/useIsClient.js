import { useEffect, useState } from "react"

const useIsClient = () => {
	const [isClient, setClient] = useState(false)

	useEffect(() => {
		if (
			typeof window !== "undefined" &&
			window.document &&
			window.document.createElement
		) {
			setClient(true)
		}
	}, [])

	return isClient
}

export default useIsClient
