import * as React from 'react'
import { Store } from 'redux'
import { History } from 'history'
import { RouteComponentProps } from 'react-router'
import { ApplicationState } from '../redux'
import { ThemeColors } from '../redux/layout'
import { Quiz } from '../redux/quiz/types'
import { fetchRequest, answerSet } from '../redux/quiz/actions'

export interface InterfacePageText {
  text: string
}

export interface InterfaceMainProps {
  store: Store<ApplicationState>
  history: History
}

// Redux-specific props.
export interface InterfaceLayoutProps {
  theme: ThemeColors
  setTheme: (theme: ThemeColors) => void
}

// Wrapper props for render/children callback.
export interface InterfaceLayoutRenderProps {
  render?: (props: InterfaceLayoutProps) => React.ReactElement
  children?: (props: InterfaceLayoutProps) => React.ReactElement
}

// interface Quiz
export interface InterfaceCommonPropsFromState {
  loading: boolean
  data: Quiz[]
  answer: number[]
  errors?: string
}

export interface InterfaceCommonPropsFromDispatch {
  fetchRequest: typeof fetchRequest
  answerSet: typeof answerSet
}

type IAllProps = InterfaceCommonPropsFromState & InterfaceCommonPropsFromDispatch
export interface InterfaceCommon extends RouteComponentProps, IAllProps { }
