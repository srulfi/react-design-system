import React, { FC, ReactNode } from "react"
import classNames from "classnames"

import StyledButton from "./Button.styles"

export interface ButtonProps {
	/**
	 * Is this the principal call to action on the page?
	 */
	primary: boolean
	/**
	 * What background color to use
	 */
	backgroundColor: string
	/**
	 * How large should the button be?
	 */
	size: "small" | "medium" | "large"
	/**
	 * Button content
	 */
	children: ReactNode
	/**
	 * Click handler
	 */
	onClick: () => void
}

/**
 * Primary UI component for user interaction
 */
const Button: FC<ButtonProps> = ({
	primary,
	backgroundColor,
	size,
	children,
	...rest
}) => {
	const mode = primary ? "quuack-button--primary" : "quuack-button--secondary"
	const styles = backgroundColor ? { backgroundColor } : undefined

	return (
		<StyledButton
			className={classNames(mode, "quuack-button", `quuack-button--${size}`)}
			style={styles}
			{...rest}
		>
			{children}
		</StyledButton>
	)
}

Button.defaultProps = {
	backgroundColor: undefined,
	primary: false,
	size: "medium",
}

export default Button
