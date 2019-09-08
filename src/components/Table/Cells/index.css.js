import styled from "styled-components"
import starIconPath from "../../../images/icons/star-filled.svg"

export const NameCellWrapper = styled.span`
  display: flex;
  align-items: center;
`

export const TypeIcon = styled.img`
  margin-right: 30px;
`

export const StarIcon = styled.img.attrs({
  src: starIconPath
})`
  margin-left: 11px;
  width: 20px;
  height: auto;
`
