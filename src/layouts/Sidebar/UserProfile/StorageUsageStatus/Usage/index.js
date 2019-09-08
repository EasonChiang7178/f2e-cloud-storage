import React from "react"
import PropTypes from "prop-types"

import { Wrapper, CurStatus } from "./index.css"

const Usage = ({ className, current, limit }) => {
  return (
    <Wrapper className={className}>
      <CurStatus>容量 {current} GB</CurStatus> / {limit} GB
    </Wrapper>
  )
}

Usage.propTypes = {
  className: PropTypes.string,
  current: PropTypes.number,
  limit: PropTypes.number
}
Usage.defaultProps = {
  current: 0,
  limit: 10
}

export default Usage
