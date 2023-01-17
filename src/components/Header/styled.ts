import styled from "styled-components"

export const Header = styled.div`
  position: relative;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.outline};
  height: 64.3px;
  overflow: hidden;
  z-index: 9999;
  justify-content: space-between;
  padding: 12px 12px 0px 0px;
  margin-bottom: 40px;
  a{
    color: ${props => props.theme.onBackground};
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  -moz-box-pack: justify;
  justify-content: space-between;
  padding: 12px 12px 12px 0px;
  position: relative;
  z-index: 3;
  width: 100%;
`

export const Logo = styled.div`
display: flex;
-moz-box-align: center;
align-items: center;
cursor: pointer;
flex: 1 1 0px;
font-weight: 600;
font-size: 20px;
`

export const Navigation = styled.div`
  display: flex;
  -moz-box-pack: end;
  justify-content: flex-end;
  flex: 1 1 0px;
`
