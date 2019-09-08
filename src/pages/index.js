import React, { useContext } from "react"

import SEO from "../layouts/SEO"
import TableBlock from "../components/TableBlock"

import StorageContext from "../contexts/StorageContext"

const IndexPage = () => {
  const { items, folders } = useContext(StorageContext)

  const itemsInIndex = folders.index.map(itemId => items.find(item => item.id === itemId))
  const sharedItems = items.filter(item => item.owner !== "Jennifer")

  return (
    <>
      <SEO title="MCloud." />

      <TableBlock headerText="我的檔案" data={itemsInIndex} />
      <TableBlock headerText="檔案共享" data={sharedItems} />
    </>
  )
}

export default IndexPage
