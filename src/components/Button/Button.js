import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import styled from "styled-components"
import { Button as AntButton } from "antd"

const StyledButton = styled(AntButton)`
	&.quuack-button {
		font-family: ${props => props.theme.fontBase};
		border: 0;
		border-radius: 3em;
		cursor: pointer;
		display: inline-block;
		line-height: 1;
	}
	&.quuack-button--primary {
		background-color: ${props => props.theme.colorPrimary};
		color: ${props => props.theme.textInverseColor};
	}
	&.quuack-button--secondary {
		color: ${props => props.theme.colorSecondary};
		background-color: transparent;
		box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
	}
	&.quuack-button--small {
		font-size: 12px;
		padding: 10px 16px;
	}
	&.quuack-button--medium {
		font-size: 14px;
		padding: 11px 20px;
	}
	&.quuack-button--large {
		font-size: 16px;
		padding: 12px 24px;
	}
`

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
