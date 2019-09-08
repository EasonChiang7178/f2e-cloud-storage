import styled from "styled-components"

export const Container = styled.div`
  & + & {
    margin-top: 60px;
  }
`

export const HeaderWrapper = styled.div`
  margin-bottom: 23px;
  height: 40px;
  display: flex;
  align-items: center;
`

export const Header = styled.h2`
  margin: 0;
  font-size: 20px;
`
