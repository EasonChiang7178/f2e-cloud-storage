import React from "react"
import PropTypes from "prop-types"

import { Container, HeaderWrapper, Header } from "./index.css"

const TableBlock = ({
  className, 
  headerText,
}) => {

  return (
    <Container className={className}>
      <HeaderWrapper>
        <Header>{headerText}</Header>
      </HeaderWrapper>


    </Container>
  )
}

TableBlock.propTypes = {
  className: PropTypes.string,
  headerText: PropTypes.string
}

export default TableBlock
