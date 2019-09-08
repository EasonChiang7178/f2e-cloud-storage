import React, { useMemo } from "react"
import PropTypes from "prop-types"
import { useTable, useSortBy } from "react-table"

import CellFactory from "./Cells"
import { TableEl, Th, Td, DownwardTriangle, UpwardTriangle } from "./index.css"

const Table = ({ columns, data }) => {
  const { getTableProps, headers, rows, prepareRow } = useTable(
    { columns, data },
    useSortBy
  )

  return (
    <TableEl {...getTableProps()}>
      <colgroup>
        <col style={{ width: "57.47%" }} />
        <col style={{ width: "14.7%" }} />
        <col style={{ width: "13.37%" }} />
        <col style={{ width: "14.46%" }} />
      </colgroup>  
      <thead>
        <tr>
          {headers.map(column => (
            <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
              {column.render("Header")}
              {
                column.isSorted
                  ? (column.isSortedDesc ? <DownwardTriangle /> : <UpwardTriangle />)
                  : ""
              }
            </Th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) =>
          prepareRow(row) || (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <Td {...cell.getCellProps()}>
                  {cell.render(({ column, cell }) => CellFactory(column.id, cell.row.original))}
                </Td>
              ))}
            </tr>
          )
        )}
      </tbody>
    </TableEl>
  )
}

const TableContainer = ({ className, ...otherProps }) => {
  const columns = useMemo(
    () => [
      {
        Header: "名稱",
        accessor: "name",
      },
      {
        Header: "上次修改",
        accessor: "updated_at",
      },
      {
        Header: "檔案大小",
        accessor: "size",
      },
      {
        Header: "擁有者",
        accessor: "owner",
      },
    ],
    []
  )

  return (
    <div className={className}>
      <Table columns={columns} {...otherProps} />
    </div>
  )
}

TableContainer.propTypes = {
  className: PropTypes.string
}

export default TableContainer