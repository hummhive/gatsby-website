import React from "react"
import { Link } from "gatsby"
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
      <NavItem slug="/">
        {window.hummhiveApi.hiveData.hiveName}
      </NavItem>
      </Logo>
      <Navigation>
        <NavItem slug="/">Home</NavItem>
        {hummhiveExtentsions.map(extension => {
          if(!extension.isHomepage)
          return(
          <NavItem key={extension.slug} slug={`${extension.slug}`}>
            {extension.pageName}
          </NavItem>
        )})}
      </Navigation>
    </HeaderContainer>
            </Container>
    </Header>
  )
}
