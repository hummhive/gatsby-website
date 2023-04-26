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
  color: ${props => props.theme.onBackground};
  }

  .meta{
    font-size: 13px;
    color: rgb(117, 117, 117);
    text-transform: capitalize;
    display: flex;
  }

  .meta div {
	padding-right: 15px;
	font-size: 16px;
	color: rgb(117, 117, 117);
}

  .post .meta div {
	font-size: 13px;
}

.post {
	margin-bottom: 30px;
}

.meta > :not(:last-child)::after {
	content: "•";
	margin-left: 5px;
	position: absolute;
	display: inline-block;
	font-weight: 700;
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

.post-title h1{
  font-weight: 600;
  font-size: 29px;
  margin: 0;
    color: ${props => props.theme.onBackground};
}

#hummhive-core-user-management-root{
margin: auto;
max-width: 960px;
text-align: center;
background: ${props => props.theme.primaryContainer};
padding: 20px;
border-radius: 10px;onPrimaryContainer
display: flex;
color: ${props => props.theme.onPrimaryContainer};
flex-direction: column;
}

#hummhive-core-user-management-root .page-heading{
  margin: 0;
  color: ${props => props.theme.onPrimaryContainer};
}

#hummhive-core-user-management-root input[type=text] {
  margin-top: 10px;
  margin-bottom: 10px;
}

#hummhive-core-user-management-root .primary-btn {
	padding: 10px;
	border: 1px solid #ddd;
    background: ${props => props.theme.primary};
	border-radius: 4px;
	margin-top: 25px;
	width: 250px;
	margin: auto;
  color: ${props => props.theme.onPrimary};
	margin-top: 20px;
}

`;

export default GlobalStyle;
