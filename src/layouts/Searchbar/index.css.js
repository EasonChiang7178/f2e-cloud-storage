import styled from "styled-components"
import searchIconPath from "../../images/icons/search.svg"

import { COLOR } from "../../constants"

export const Wrapper = styled.div`
  padding: 12px 59px 13px 66px;
  background: ${COLOR.GRAY};
  border-radius: 30px;
  display: inline-flex;
  position: relative;
`

export const SearchIconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  background: ${COLOR.BLUE};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SearchIcon = styled.img.attrs({
  src: searchIconPath
})`
  width: 28px;
  height: auto;
`

export const Input = styled.input`
  border: none;
  padding: 0;
  background: transparent;
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;

  &:focus {
    outline: none
  }

  &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: ${COLOR.DARK_GARY};
  }
  &::-moz-placeholder { /* Firefox 19+ */
    color: ${COLOR.DARK_GARY};
  }
  &:-ms-input-placeholder { /* IE 10+ */
    color: ${COLOR.DARK_GARY};
  }
  &:-moz-placeholder { /* Firefox 18- */
    color: ${COLOR.DARK_GARY};
  }
`
