import React from "react"
import PropTypes from "prop-types"

import { Container, HeaderWrapper, Header } from "./index.css"

const Table = ({
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

Table.propTypes = {
  className: PropTypes.string,
  headerText: PropTypes.string
}

export default Table
