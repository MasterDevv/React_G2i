import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'
import { LayoutState, layoutReducer } from './layout'
import quizSaga from './quiz/sagas'
import { quizReducer } from './quiz/reducer'
import { QuizState } from './quiz/types'
// The top-level state object
export interface ApplicationState {
  layout: LayoutState
  quiz: QuizState
  router: RouterState
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const createRootReducer = (history: History) =>
  combineReducers({
    layout: layoutReducer,
    quiz: quizReducer,
    router: connectRouter(history)
  })

// Here we use `redux-saga` to trigger actions asynchronously. `redux-saga` uses something called a
// "generator function", which you can read about here:
export function* rootSaga() {
  yield all([fork(quizSaga)])
}
