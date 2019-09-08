import styled from "styled-components"
import { COLOR } from "../../../../../constants"

export const Wrapper = styled.div`
  width: 190px;
  height: 10px;
  background: white;
  border: 1px solid white;
  border-radius: 25px;
  box-sizing: border-box;
  overflow: hidden;
`

export const Bar = styled.div`
  height: 10px;
  width: 0%;
  background: ${COLOR.BLUE};

  ${props => props.percentage && {
    width: `${props.percentage}%`
  }}
`
