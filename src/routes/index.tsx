import * as React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import { Global } from '@emotion/core'
import Header from '../layout/Header'
import Home from '../views/Home'
import Quizes from '../views/Quizes'
import Result from '../views/Result'
import normalize from '../assets/styles/normalize'
import globals from '../assets/styles/globals'

const Routes: React.SFC = () => (
  <div className="panel panel--perma">
    <article className="recordable" data-rich-avatar-suppressed>
      <article className="document">
        <Global styles={normalize} />
        <Global styles={globals} />
        <Header />
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/quiz" component={Quizes} />
          <Route path="/result" component={Result} />
        </BrowserRouter>
      </article>
    </article>
  </div>
)

export default Routes
