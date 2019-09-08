import styled from "styled-components"
import SidebarRaw from "./Sidebar"

export const PageContainer = styled.main`
  display: flex;
  height: 100vh;
  min-height: 789px;
`

export const Sidebar = styled(SidebarRaw)`
  flex: 0 0 auto;
`

export const ContentContainer = styled.div`
  width: 100%;
`
