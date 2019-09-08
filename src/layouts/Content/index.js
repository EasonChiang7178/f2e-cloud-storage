import React from "react"
import PropTypes from "prop-types"

import { Container } from "./index.css"

const Content = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

Content.propTypes = {
  children: PropTypes.node.isRequired
}

export default Content
