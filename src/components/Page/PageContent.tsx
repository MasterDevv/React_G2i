import React from 'react'
import { IPageText } from '../../interfaces'

function PageContent(props: IPageText) {
  return (
    <div className="pageContent">
      <p className="f2e">{props.text}</p>
    </div>
  )
}

export default PageContent
