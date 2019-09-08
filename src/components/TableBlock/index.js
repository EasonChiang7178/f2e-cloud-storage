import React from "react"
import PropTypes from "prop-types"

import { Container, HeaderWrapper, Header } from "./index.css"
import Table from "../Table"

const TableBlock = ({
  className, 
  headerText,
  data
}) => {

  return (
    <Container className={className}>
      <HeaderWrapper>
        <Header>{headerText}</Header>
      </HeaderWrapper>

      <Table data={data} />
    </Container>
  )
}

TableBlock.propTypes = {
  className: PropTypes.string,
  headerText: PropTypes.string,
  data: PropTypes.array
}

export default TableBlock
