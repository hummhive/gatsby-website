import React from "react"
import hummhiveExtentsions from "../../../hummhive-extensions.json"
import NavItem from "./NavItem"
import { HeaderContainer } from "./styled"

export default () => {
  return (
    <HeaderContainer>
      <NavItem slug="/">Home</NavItem>
      {hummhiveExtentsions.map(extension => (
        <NavItem key={extension.baseRoute} slug={`${extension.baseRoute}`}>
          {extension.pageName}
        </NavItem>
      ))}
    </HeaderContainer>
  )
}
