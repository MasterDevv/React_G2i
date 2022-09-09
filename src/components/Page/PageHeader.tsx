import React from 'react'
import { InterfacePageText } from '../../interfaces'

function PageHeader(props: InterfacePageText) {
  return (
    <div className="pageHeader">
      <h1>{props.text}</h1>
    </div>
  )
}

export default PageHeader
