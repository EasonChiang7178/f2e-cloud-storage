import styled from "styled-components"

import uploadIconPath from "../../../images/icons/upload.svg"
import { COLOR } from "../../../constants"

export const UploadIcon = styled.img.attrs({
  src: uploadIconPath
})`
  width: 28px;
  height: 26px;
  margin-right: 9px;
`

export const Button = styled.button`
  padding: 12px 0;
  width: 190px;
  background: white;
  border: none;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLOR.BLUE};
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  box-shadow: 0px 0px 6px #00000029;
  cursor: pointer;
  transition: background .3s ease, box-shadow .3s ease;

  &:hover {
    background: ${COLOR.LIGHT_GRAY};
    box-shadow: 0px 0px 12px 3px #00000029;
  }

  &:focus {
    outline: none;
  }
`
