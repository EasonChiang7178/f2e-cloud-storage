import styled from "styled-components"
import UserInfoRaw from "./UserInfo"
import StorageUsageStatusRaw from "./StorageUsageStatus"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const UserInfo = styled(UserInfoRaw)`
  margin-bottom: 17px;
`

export const StorageUsageStatus = styled(StorageUsageStatusRaw)``
