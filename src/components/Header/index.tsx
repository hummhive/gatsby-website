import React from "react"
import hummhiveExtentsions from "../../../hummhive-extensions.json"
import NavItem from "./NavItem"
import Container from "../Container"
import { Header, HeaderContainer, Logo, Navigation } from "./styled"

export default ({onThemeChangeHandler}) => {
  return (
    <Header>
    <Container>
    <HeaderContainer>
      <Logo>
        HummHive Official
      </Logo>
      <Navigation>
        <NavItem slug="/">Home</NavItem>
        {hummhiveExtentsions.map(extension => (
          <NavItem key={extension.baseRoute} slug={`${extension.baseRoute}`}>
            {extension.pageName}
          </NavItem>
        ))}
        <button onClick={onThemeChangeHandler}>
        as
        </button>
      </Navigation>
    </HeaderContainer>
            </Container>
    </Header>
  )
}
