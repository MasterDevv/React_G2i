import React from 'react'
import { IPageText } from '../../interfaces'

function PageHeader(props: IPageText) {
  return (
    <div className="pageHeader">
      <h1>{props.text}</h1>
    </div>
  )
}

export default PageHeader
