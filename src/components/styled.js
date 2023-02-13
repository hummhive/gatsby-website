import styled from "styled-components"

export const HiveDesc = styled.div`
  position: relative;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.surfaceVariant};
  height: 64.3px;
  overflow: hidden;
  z-index: 9999;
  justify-content: space-between;
  padding: 12px 12px 0px 0px;
  margin-bottom: 40px;
`