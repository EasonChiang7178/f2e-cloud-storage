import styled from "styled-components"
import NavItemRaw from "./NavItem"

export const Container = styled.div``

export const NavItem = styled(NavItemRaw)`
  & + & {
    margin-top: 18px;
  }
`
