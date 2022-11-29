import React from "react"
import { Link } from "gatsby"
import { NavLinkContainer } from "./styled"

export default ({ slug, children }) => {
  return (
    <NavLinkContainer>
      <Link to={slug}>{children}</Link>
    </NavLinkContainer>
  )
}
