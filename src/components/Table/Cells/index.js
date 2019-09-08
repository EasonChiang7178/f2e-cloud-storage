import React from "react"
import bytes from "bytes"

import { NameCellWrapper, TypeIcon, StarIcon } from "./index.css"

import imgIconPath from "../../../images/type_icons/img.png"
import docIconPath from "../../../images/type_icons/doc.png"
import folderIconPath from "../../../images/type_icons/folder.png"
import mp4IconPath from "../../../images/type_icons/mp4.png"
import pdfIconPath from "../../../images/type_icons/pdf.png"


export const NameCell = (name, isStarred) => {
  const getTypeIconPath = (type) => {
    switch (type) {
      case "jpg":
      case "png":
      case "gif":
        return imgIconPath
      case "doc":
      case "docx":
        return docIconPath
      case "mp4":
        return mp4IconPath
      case "pdf":
        return pdfIconPath
      default:
        return folderIconPath
    }
  }

  const extension = name.split(".")[1]

  return (
    <NameCellWrapper>
      <TypeIcon src={getTypeIconPath(extension)} />
      {name}
      {isStarred && <StarIcon />}
    </NameCellWrapper>
  )
}

export const UpdatedAtCell = (timestamp) => {
  const dateObj = new Date(timestamp * 1000)
  const year = dateObj.getFullYear()
  const month = dateObj.getMonth() + 1
  const date = dateObj.getDate()
  
  const formattedDate = `${year}/${month}/${date}`
  return formattedDate
}

export const SizeCell = (size) => bytes(size)

export const OwnerCell = (owner) => owner


export default (id, row) => {
  switch (id) {
    case "name":
      return NameCell(row[id], row.is_starred)
    case "updated_at":
      return UpdatedAtCell(row[id])
    case "size":
      return SizeCell(row[id])
    case "owner":
      return OwnerCell(row[id])
    default:
      console.warn(`Unknown id: ${id}`)
  }
}
