import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
body {
  background: ${props => props.theme.background};
  font-family: "Work Sans";
  color: ${props => props.theme.onBackground};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 900;
}

a {
    color: ${props => props.theme.primary};
    text-decoration: none;
}

a:hover{
  color: ${props => props.theme.primary};
  text-decoration: underline;
}

.page-heading {
	font-size: 24px;
	margin-bottom: 40px;
}

.page-heading span {
	position: relative;
	font-weight: 600;
}

.page-heading span::before {
	content: "";
	width: 100%;
	height: 4px;
	border-radius: 2px;
	background-color: ${props => props.theme.primary};
	position: absolute;
	left: 0px;
	bottom: -4px;
}

`;

export default GlobalStyle;
