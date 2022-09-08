import * as React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Header from '../layout/Header'
import Quizes from '../views/Quizes'
import Result from '../views/Result'
import { InterfaceRoute } from '../interfaces'
import Home from '../views/Home'

export function renderRoutes(routers: InterfaceRoute[] = []) {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          {routers.map((route: InterfaceRoute, i: number) => {
            return <Route key={i} path={route.path} exact={route.exact} component={route.component} />
          })}
        </Switch>
      </BrowserRouter>
    </div>
  )
}

const routeData: InterfaceRoute[] = [
  {
    exact: true,
    path: '/',
    component: Home
  },
  {
    exact: true,
    path: '/quiz',
    component: Quizes
  },
  {
    exact: true,
    path: '/result',
    component: Result
  }
]

export default routeData
