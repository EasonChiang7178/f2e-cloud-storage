import React from "react";
import PropTypes from "prop-types";

import { Container, UserInfo, StorageUsageStatus } from "./index.css"

const UserProfile = ({ className }) => {
  return (
    <Container className={className}>
      <UserInfo />
      <StorageUsageStatus />
    </Container>
  );
};

UserProfile.propTypes = {
  className: PropTypes.string
}

export default UserProfile;
