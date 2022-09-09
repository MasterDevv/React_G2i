import { action } from 'typesafe-actions'
import { QuizActionTypes, Quiz } from './types'

export const fetchRequest = () => action(QuizActionTypes.FETCH_REQUEST)
export const answerSet = (data: number[]) => action(QuizActionTypes.SET_ANSWER, data)
export const fetchSuccess = (data: Quiz[]) => action(QuizActionTypes.FETCH_SUCCESS, data)
export const fetchError = (message: string) => action(QuizActionTypes.FETCH_ERROR, message)
