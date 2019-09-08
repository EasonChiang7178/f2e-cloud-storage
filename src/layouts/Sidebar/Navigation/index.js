import React from "react";
import PropTypes from "prop-types";

import folderIconPath from "../../../images/icons/folder.svg"
import starIconPath from "../../../images/icons/star.svg"
import sharingIconPath from "../../../images/icons/sharing.svg"
import trashIconPath from "../../../images/icons/garbage.svg"

import { Container, NavItem } from "./index.css"

const Navigation = ({
  onFolderBtnClick,
  onStarredBtnClick,
  onSharingBtnClick,
  onTrashBtnClick
}) => {
  return (
    <Container>
      <NavItem iconPath={folderIconPath} onClick={onFolderBtnClick}>
        我的檔案
      </NavItem>
      <NavItem iconPath={starIconPath} onClick={onStarredBtnClick}>
        已加星號
      </NavItem>
      <NavItem iconPath={sharingIconPath} onClick={onSharingBtnClick}>
        檔案共享
      </NavItem>
      <NavItem iconPath={trashIconPath} onClick={onTrashBtnClick}>
        垃圾桶
      </NavItem>
    </Container>
  )
};

Navigation.propTypes = {
  onFolderBtnClick: PropTypes.func,
  onStarredBtnClick: PropTypes.func,
  onSharingBtnClick: PropTypes.func,
  onTrashBtnClick: PropTypes.func
}

export default Navigation;
