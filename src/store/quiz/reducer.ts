import { Reducer } from 'redux'
import { QuizState, QuizActionTypes } from './types'

// Type-safe initialState!
export const initialState: QuizState = {
  data: [],
  answer: [],
  errors: undefined,
  loading: true
}

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<QuizState> = (state = initialState, action) => {
  switch (action.type) {
    case QuizActionTypes.SET_ANSWER: {
      return { ...state, loading: false, answer: action.payload }
    }
    case QuizActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true }
    }
    case QuizActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload }
    }
    case QuizActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }
    default: {
      return state
    }
  }
}

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as quizReducer }
