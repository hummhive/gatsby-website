import React from "react"
import Header from "./Header"
import Container from "../components/container"
import Footer from "./Footer"
import GlobalStyle from "./globalstyles"
import { ThemeProvider } from "styled-components";

const Layout = ({ children }) => {
  const [theme, setTheme] = React.useState(window.hummhiveApi.hiveData.theme.light)
  const onThemeChangeHandler = () => {
    if(theme !== window.hummhiveApi.hiveData.theme.light){
      setTheme(window.hummhiveApi.hiveData.theme.light);
    }else{
      setTheme(window.hummhiveApi.hiveData.theme.dark);
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header onThemeChangeHandler={onThemeChangeHandler} theme={theme} />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
