import * as React from 'react'
import { Store } from 'redux'
import { History } from 'history'
import { RouteComponentProps } from 'react-router'
import { ApplicationState } from '../redux'
import { ThemeColors } from '../redux/layout'
import { Quiz } from '../redux/quiz/types'
import { fetchRequest, answerSet } from '../redux/quiz/actions'

export interface IPageText {
  text: string
}

export interface IMainProps {
  store: Store<ApplicationState>
  history: History
}

// Redux-specific props.
export interface ILayoutContainerProps {
  theme: ThemeColors
  setTheme: (theme: ThemeColors) => void
}

// Wrapper props for render/children callback.
export interface ILayoutContainerRenderProps {
  render?: (props: ILayoutContainerProps) => React.ReactElement
  children?: (props: ILayoutContainerProps) => React.ReactElement
}

// interface Quiz
export interface IQuizPropsFromState {
  loading: boolean
  data: Quiz[]
  answer: number[]
  errors?: string
}

export interface IQuizPropsFromDispatch {
  fetchRequest: typeof fetchRequest
  answerSet: typeof answerSet
}

type IAllProps = IQuizPropsFromState & IQuizPropsFromDispatch
export interface IQuizes extends RouteComponentProps, IAllProps { }
