import React from "react"
import PropTypes from "prop-types"

import { Wrapper, IconWrapper, Icon } from "./index.css"

const NavItem = ({ className, iconPath, children, onClick }) => {
  return (
    <Wrapper className={className} onClick={onClick}>
      <IconWrapper>
        <Icon src={iconPath} />
      </IconWrapper>

      {children}
    </Wrapper>
  )
}

NavItem.propTypes = {
  className: PropTypes.string,
  iconPath: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default NavItem
