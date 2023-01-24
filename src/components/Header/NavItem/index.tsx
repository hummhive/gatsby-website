import React from "react"
import { Link } from "gatsby"
import { useLocation } from '@reach/router';
import { NavLinkContainer, StyledLink } from "./styled"

export default ({ slug, children, isActive }) => {
  const location = useLocation();
  return (
    <NavLinkContainer>
      <StyledLink isActive={location.pathname == slug} to={slug}>{children}</StyledLink>
    </NavLinkContainer>
  )
}
