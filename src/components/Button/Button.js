import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import StyledButton from "./Button.styles"

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
	const mode = primary ? "quuack-button--primary" : "quuack-button--secondary"
	return (
		<StyledButton
			type="button"
			className={classNames(mode, "quuack-button", `quuack-button--${size}`)}
			style={backgroundColor && { backgroundColor }}
			{...props}
		>
			{label}
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
	label: PropTypes.string.isRequired,
	/**
	 * Optional click handler
	 */
	onClick: PropTypes.func,
}

Button.defaultProps = {
	backgroundColor: null,
	primary: false,
	size: "medium",
	onClick: undefined,
}
