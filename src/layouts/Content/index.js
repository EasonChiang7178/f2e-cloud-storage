import React from "react"
import PropTypes from "prop-types"

const ContentWrapper = ({ children }) => {
  return <div>{children}</div>
}

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default ContentWrapper
