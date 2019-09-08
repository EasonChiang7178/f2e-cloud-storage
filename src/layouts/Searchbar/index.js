import React from "react"
import PropTypes from "prop-types"

import { Wrapper, SearchIconWrapper, SearchIcon, Input } from "./index.css"

const Searchbar = ({ className }) => {
  return (
    <Wrapper className={className}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>

      <Input placeholder="搜尋您的檔案" />
    </Wrapper>
  )
}

Searchbar.propTypes = {
  className: PropTypes.string
}

export default Searchbar
