import React from "react"
import PropTypes from "prop-types"

import { Wrapper, Bar } from "./index.css"

const ProgressBar = ({ className, percentage }) => {
  return (
    <Wrapper className={className}>
      <Bar percentage={percentage} />
    </Wrapper>
  )
}

ProgressBar.propTypes = {
  className: PropTypes.string,
  percentage: PropTypes.number
}
ProgressBar.defaultProps = {
  percentage: 0
}

export default ProgressBar
