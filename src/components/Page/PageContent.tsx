import React from 'react'

interface IPageText {
  text: string
}

function PageContent(props: IPageText) {
  return (
    <div className="pageContent">
      <p className="f2e">{props.text}</p>
    </div>
  )
}

export default PageContent
