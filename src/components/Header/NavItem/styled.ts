import styled from "styled-components"

export const NavLinkContainer = styled.div`
  padding: 0 16px;
  font-weight: 700;
  font-size: 16px;
  font-family: "Work Sans";
`
export const StyledLink = styled.a`
  color: ${props => props.isActive ? props.theme.primary : props.theme.onBackground};
`
