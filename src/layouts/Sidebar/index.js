import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Logo, UploadButton, Navigation, UserProfile } from "./index.css"

const Sidebar = ({ className }) => {

  return (
    <Wrapper className={className}>
      <Logo />
      <UploadButton />
      <Navigation />

      <UserProfile />
    </Wrapper>
  )
};

Sidebar.propTypes = {
  className: PropTypes.string
}

export default Sidebar;
