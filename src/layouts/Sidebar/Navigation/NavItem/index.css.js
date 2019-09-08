import styled from "styled-components"
import { COLOR } from "../../../../constants"

export const Wrapper = styled.div`
  width: 106px;
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 25px;
  cursor: pointer;
  position: relative;

  &:hover::before {
    position: absolute;
    content: '';
    top: -8px;
    left: -75px;
    height: 43px;
    width: 256px;
    background: ${COLOR.LIGHT_GRAY};
    border-radius: 25px;
    opacity: .175;
  }

  & #text {
    z-index: 0;
  }
`

export const IconWrapper = styled.div`
  flex: 0 0 34px;
  display: flex;
  z-index: 0;
`

export const Icon = styled.img`
  width: auto;
  height: 21px;
`
