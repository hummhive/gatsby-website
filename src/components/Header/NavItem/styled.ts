import styled from "styled-components"

export const NavLinkContainer = styled.div`
  padding: 0 16px;
  font-weight: 600;
  font-size: 20px;
  font-family: "Work Sans";
  a{
    color: ${props => props.theme.onBackground};
  }
  @media screen and (max-width: 520px) {
    font-size: 16px;
  }
`
export const StyledLink = styled.a`
  color: #000;
`
