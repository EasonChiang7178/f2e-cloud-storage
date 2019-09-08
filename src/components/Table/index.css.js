import styled from "styled-components"
import { COLOR } from "../../constants"

export const TableEl = styled.table`
  width: 100%;
  table-layout: fixed;
  border-spacing: 0;
  border-color: ${COLOR.GRAY};
`

export const Th = styled.th`
  padding: 20px;
  border-bottom: 1px solid ${COLOR.GRAY};
  font-size: 18px;
  color: ${COLOR.DARK_GARY};
  user-select: none;

  &:first-of-type {
    text-align: left;
  }
`

export const Td = styled.td`
  padding: 20px;
  padding-bottom: 9px;
  text-align: center;
  color: ${COLOR.DARK_GARY};

  &:first-of-type {
    text-align: left;
  }

  tr:last-of-type > & {
    padding-bottom: 0;
  }
`

export const DownwardTriangle = styled.div`
  display: inline-block;
  margin-left: 9px;
  border-top: 10px solid ${COLOR.DARK_GARY};
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: none;
  position: relative;
  bottom: 1px;
`

export const UpwardTriangle = styled.div`
  display: inline-block;
  margin-left: 9px;
  border-bottom: 10px solid ${COLOR.DARK_GARY};
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: none;
  position: relative;
  bottom: 1px;
`
