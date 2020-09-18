import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import StyledButton from "./Button.styles"

/**
 * Primary UI component for user interaction
 */
const Button = ({ primary, backgroundColor, size, children, ...props }) => {
	const mode = primary ? "quuack-button--primary" : "quuack-button--secondary"
	return (
		<StyledButton
			type="button"
			className={classNames(mode, "quuack-button", `quuack-button--${size}`)}
			style={backgroundColor && { backgroundColor }}
			{...props}
		>
			{children}
		</StyledButton>
	)
}

Button.propTypes = {
	/**
	 * Is this the principal call to action on the page?
	 */
	primary: PropTypes.bool,
	/**
	 * What background color to use
	 */
	backgroundColor: PropTypes.string,
	/**
	 * How large should the button be?
	 */
	size: PropTypes.oneOf(["small", "medium", "large"]),
	/**
	 * Button contents
	 */
	children: PropTypes.node.isRequired,
	/**
	 * Optional click handler
	 */
	onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
	backgroundColor: null,
	primary: false,
	size: "medium",
}

export default Button
