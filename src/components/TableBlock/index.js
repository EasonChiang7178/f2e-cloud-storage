import React from "react"
import PropTypes from "prop-types"

import { Container, HeaderWrapper, Header } from "./index.css"
import Table from "../Table"

const TableBlock = ({
  className, 
  headerText,
}) => {

  return (
    <Container className={className}>
      <HeaderWrapper>
        <Header>{headerText}</Header>
      </HeaderWrapper>

      <Table data={[
  {
    id: "eWRhpRV",
    name: "走吧！一起用日語去旅行.mp4",
    updated_at: 1560124800,
    size: 6815744,
    owner: "Jennifer",
    is_starred: true,
    in_trash: false,
    parent_folder_id: "index"
  },
  {
    id: "23TplPdS",
    name: "20191011-1020日本東京自由行.doc",
    updated_at: 1561420800,
    size: 2411724,
    owner: "Jennifer",
    is_starred: false,
    in_trash: false,
    parent_folder_id: "index"
  }
      ]} />
    </Container>
  )
}

TableBlock.propTypes = {
  className: PropTypes.string,
  headerText: PropTypes.string
}

export default TableBlock
