import * as React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'emotion-theming'
import { ConnectedRouter } from 'connected-react-router'
import LayoutContainer from './layout/LayoutContainer'
import LayoutContent from './layout/LayoutContent'
import * as themes from './assets/styles/theme'
import { InterfaceMainProps } from './interfaces'
import routeData, { renderRoutes } from './routes'
import './assets/style.css'

// Create an intersection type of the component props and our Redux props.
const Main: React.FC<InterfaceMainProps> = ({ store, history }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <LayoutContainer>
          {({ theme }) => (
            <ThemeProvider theme={themes[theme]}>
              <LayoutContent>{renderRoutes(routeData)}</LayoutContent>
            </ThemeProvider>
          )}
        </LayoutContainer>
      </ConnectedRouter>
    </Provider>
  )
}

// Normally you wouldn't need any generics here (since types infer from the passed functions).
export default Main
