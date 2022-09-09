import React from 'react'
import { InterfacePageText } from '../../interfaces'

function PageContent(props: InterfacePageText) {
  return (
    <div className="pageContent">
      <p className="f2e">{props.text}</p>
    </div>
  )
}

export default PageContent
