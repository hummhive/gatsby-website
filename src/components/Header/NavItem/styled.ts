import styled from "styled-components"

export const NavLinkContainer = styled.div`
  padding: 0 16px;
  font-weight: 700;
  font-size: 16px;
  font-family: "Work Sans";
  a{
    color: ${props => props.theme.onBackground};
  }
`
export const StyledLink = styled.a`
  color: #000;
`
