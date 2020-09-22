import { createGlobalStyle, css } from "styled-components"
import { normalize } from "styled-normalize"

const bodyStyles = css`
	/* additional body styles */
`

const GlobalStyle = createGlobalStyle`
	${normalize}
 	body {
  	${bodyStyles}
 	}
`

export default GlobalStyle
