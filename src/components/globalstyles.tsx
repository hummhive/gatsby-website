import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
body {
  background: ${props => props.theme.background};
  font-family: "Work Sans";
  color: ${props => props.theme.onBackground};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
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

.link{
  cursor: pointer;
}

.post-title{
  font-weight: 600;
  font-size: 29px;
  margin-bottom: 0px;
  color: rgb(41, 41, 41);
  }

  .meta{
    font-size: 13px;
    color: rgb(117, 117, 117);
    text-transform: capitalize;
  }

  input {
	border: 1px solid #ddd;
	padding: 10px;
	border-radius: 4px;
	margin-right: 10px;
}

button{
  padding: 10px;
  border: 1px solid #ddd;
  background: #ccc;
  border-radius: 4px;
}

`;

export default GlobalStyle;
