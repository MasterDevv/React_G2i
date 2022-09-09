import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ApplicationState } from '../redux'
import { ThemeColors } from '../redux/layout'
import * as layoutActions from '../redux/layout/actions'
import { InterfaceLayoutRenderProps } from '../interfaces'

const LayoutContainer: React.FC<InterfaceLayoutRenderProps> = ({ render, children }) => {
  // We can use Hooks to call in our selector/dispatch functions.
  const { theme } = useSelector((state: ApplicationState) => state.layout)
  const dispatch = useDispatch()
  // Create the `setTheme` handler. We use the `dispatch` we got from `useDispatch()` to create said selector.
  const setTheme = (color: ThemeColors) => dispatch(layoutActions.setTheme(color))
  // Create a render/children props wrapper with the above variables set as a callback.
  if (render) {
    return render({ theme, setTheme })
  }

  if (children) {
    return children({ theme, setTheme })
  }

  return null
}

export default LayoutContainer
