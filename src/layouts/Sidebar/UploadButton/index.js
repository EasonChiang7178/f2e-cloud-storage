import React from "react";
import PropTypes from "prop-types";

import { UploadIcon, Button } from "./index.css"

const UploadButton = ({ className, onClick }) => {
  return (
    <Button className={className} onClick={onClick}>
      <UploadIcon /> 上傳檔案
    </Button>
  );
};

UploadButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default UploadButton;
