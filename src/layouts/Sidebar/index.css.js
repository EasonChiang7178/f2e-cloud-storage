import styled from "styled-components"

import LogoRaw from "./Logo";
import UploadButtonRaw from "./UploadButton";
import NavigationRaw from "./Navigation";
import UserProfileRaw from "./UserProfile";

import { COLOR } from "../../constants";

export const Wrapper = styled.aside`
  padding: 62px 33px 56px;
  width: 256px;
  background: ${COLOR.BLUE};
  box-shadow: 3px 0px 6px #66666633;
  color: #FFFFFF;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled(LogoRaw)`
  margin-bottom: 42px;
`

export const UploadButton = styled(UploadButtonRaw)``

export const Navigation = styled(NavigationRaw)``

export const UserProfile = styled(UserProfileRaw)``
