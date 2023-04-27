import React from "react"
import { Link } from "gatsby"
import hummhiveExtentsions from "../../../hummhive-extensions.json"
import NavItem from "./NavItem"

import Container from "../Container"
import { Header, HeaderContainer, Logo, Navigation, NavLinkExternal } from "./styled"

export default ({onThemeChangeHandler}) => {
  return (
    <Container>
    <Header>
    <HeaderContainer>
      <Logo>
      <NavItem slug="/">
        {window.hummhiveApi.hiveData.hiveName}
      </NavItem>
      </Logo>
      <Navigation>
      {(location.hostname === "hive.humm.earth") ? (
        <NavLinkExternal>
        <a className="hide" href="https://humm.earth/">Humm.earth</a>
        </NavLinkExternal>
        ) : (
        <NavItem slug="/">Home</NavItem>
        )}
        {hummhiveExtentsions.map(extension => {
          if(!extension.isHomepage)
          return(
          <NavItem key={extension.slug} slug={`${extension.slug}`}>
            {extension.pageName}
          </NavItem>
        )})}
      </Navigation>
    </HeaderContainer>
    </Header>
    </Container>
  )
}
