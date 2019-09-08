import React from "react";
import PropTypes from "prop-types";

import { StorageProvider } from "./StorageContext";
import { useItemData } from "../hooks/useItemData";

const AppProvider = ({ children }) => {
  const items = useItemData();

  return (
    <StorageProvider items={items}>
      {children}
    </StorageProvider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppProvider;
