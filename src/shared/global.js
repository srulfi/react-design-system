import { createGlobalStyle, css } from "styled-components"
import { normalize } from "styled-normalize"

export const bodyStyles = css`
	/* additional body styles */
`

export const GlobalStyle = createGlobalStyle`
	${normalize}
 	body {
  	${bodyStyles}
 	}
`
