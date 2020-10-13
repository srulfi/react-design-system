import { createGlobalStyle, css } from "styled-components"
import { normalize } from "styled-normalize"

import { colors, typography } from "./styles"

const bodyStyles = css`
	font-family: ${typography.type.primary};
	font-size: ${typography.size.s3}px;
	color: ${colors.primary};
`

const GlobalStyle = createGlobalStyle`
	${normalize}
 	body {
  	${bodyStyles}
 	}
`

export default GlobalStyle
