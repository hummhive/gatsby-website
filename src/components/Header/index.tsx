import React from "react"
import { Link } from "gatsby"
import hummhiveExtentsions from "../../../hummhive-extensions.json"
import NavItem from "./NavItem"
import Container from "../Container"
import { Header, HeaderContainer, Logo, Navigation } from "./styled"

export default ({onThemeChangeHandler}) => {
        {console.log(window.hummhiveApi)}
  return (
    <Header>
    <Container>
    <HeaderContainer>
      <Logo>
      <Link to="/">
        {window.hummhiveApi.hiveData.hiveId}
      </Link>
      </Logo>
      <Navigation>
        <NavItem slug="/">Home</NavItem>
        {hummhiveExtentsions.map(extension => (
          <NavItem key={extension.baseRoute} slug={`${extension.baseRoute}`}>
            {extension.pageName}
          </NavItem>
        ))}
      </Navigation>
    </HeaderContainer>
            </Container>
    </Header>
  )
}
