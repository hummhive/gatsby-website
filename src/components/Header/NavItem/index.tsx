import React from "react"
import { Link } from "gatsby"
import { useLocation } from '@reach/router';
import { NavLinkContainer, StyledLink } from "./styled"

export default ({ slug, children, isActive }) => {
  return (
    <NavLinkContainer>
      <a href={slug}>{children}</a>
    </NavLinkContainer>
  )
}
