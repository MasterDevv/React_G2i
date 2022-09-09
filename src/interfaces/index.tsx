import { Store } from 'redux'
import { History } from 'history'
import { ApplicationState } from '../redux'

export interface IPageText {
  text: string
}

export interface MainProps {
  store: Store<ApplicationState>
  history: History
}
