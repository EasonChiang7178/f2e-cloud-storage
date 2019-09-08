import React from "react"
import PropTypes from "prop-types"

import { Container, ProgressBar, Usage } from "./index.css"

const StorageUsageStatus = ({ className, curStorage, limitStorage }) => {
  const storagePercentage = (curStorage / limitStorage) * 100

  return (
    <Container className={className}>
      <ProgressBar percentage={storagePercentage} />
      <Usage current={curStorage} limit={limitStorage} />
    </Container>
  )
}

StorageUsageStatus.propTypes = {
  className: PropTypes.string,
}


const StorageUsageStatusContainer = (props) => {

  return (
    <StorageUsageStatus
      {...props}
      curStorage={1.2}
      limitStorage={10}
    />
  )
}


export default StorageUsageStatusContainer
