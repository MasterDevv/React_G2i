import React from 'react'
import { Global } from '@emotion/core'
import normalize from '../assets/styles/normalize'
import globals from '../assets/styles/globals'

const LayoutContent: React.FC = ({ children }) => {
  return (
    <div className="panel panel--perma">
      <article className="recordable" data-rich-avatar-suppressed>
        <article className="document">
          <Global styles={normalize} />
          <Global styles={globals} />
          {children}
        </article>
      </article>
    </div>
  )
}

export default LayoutContent
// < Header />
// <BrowserRouter>
//   <Route exact path="/" component={Home} />
//   <Route path="/quiz" component={Quizes} />
//   <Route path="/result" component={Result} />
// </BrowserRouter>
