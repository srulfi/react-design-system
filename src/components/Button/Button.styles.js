import styled from "styled-components"
import { Button } from "antd"

import { colors, typography } from "../../shared/styles"

export default styled(Button)`
	&.quuack-button {
		font-family: ${typography.type.fontBase};
		border: 0;
		border-radius: 3em;
		cursor: pointer;
		display: inline-block;
		line-height: 1;
	}
	&.quuack-button--primary {
		background-color: ${colors.primary};
		color: ${colors.white};
	}
	&.quuack-button--secondary {
		color: ${colors.secondary};
		background-color: ${colors.transparent};
		box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
	}
	&.quuack-button--small {
		font-size: ${typography.size.s1}px;
		padding: 10px 16px;
	}
	&.quuack-button--medium {
		font-size: ${typography.size.s2}px;
		padding: 11px 20px;
	}
	&.quuack-button--large {
		font-size: ${typography.size.s3}px;
		padding: 12px 24px;
	}
`
