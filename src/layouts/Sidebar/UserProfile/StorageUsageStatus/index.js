import React, { useContext } from "react"
import PropTypes from "prop-types"
import bytes from "bytes"

import { Container, ProgressBar, Usage } from "./index.css"
import StorageContext from "../../../../contexts/StorageContext"

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
  const { items } = useContext(StorageContext)
  const totalSize = items.reduce((total, item) => total + item.size, 0)
  const sizeInGB = Number(bytes(totalSize, { unit: "GB", unitSeparator: " " }).split(" ")[0])

  return (
    <StorageUsageStatus
      {...props}
      curStorage={sizeInGB}
      limitStorage={10}
    />
  )
}


export default StorageUsageStatusContainer
