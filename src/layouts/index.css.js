import styled from "styled-components"

import SidebarRaw from "./Sidebar"
import SearchbarRaw from "./Searchbar"

import contentBgPath from "../images/content_bg.png"

export const PageContainer = styled.main`
  display: flex;
  height: 100vh;
  min-height: 789px;
`

export const Sidebar = styled(SidebarRaw)`
  flex: 0 0 auto;
`

export const ContentContainer = styled.div`
  padding: 46px 65px 0 54px;
  width: 100%;
  background-image: url(${contentBgPath});
  background-repeat: no-repeat;
  background-position: calc(100% + 54px) calc(100% + 84px + 68px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Searchbar = styled(SearchbarRaw)`
  align-self: flex-end;
  margin-bottom: 25px;
`
