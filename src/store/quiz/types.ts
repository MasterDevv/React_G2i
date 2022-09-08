// This file holds our state type, as well as any other types related to this Redux store.
// Response object for GET /heroes
export interface Quiz extends ApiResponse {
  id: number
  category: string
}

// This type is basically shorthand for `{ [key: string]: any }`. Feel free to replace `any` with
// the expected return type of your API response.
export type ApiResponse = Record<string, any>

// Define however naming conventions you'd like for your action types, but
// personally, I use the `@@context/ACTION_TYPE` convention, to follow the convention
// of Redux's `@@INIT` action.
export enum QuizActionTypes {
  FETCH_REQUEST = '@@quiz/FETCH_REQUEST',
  SET_ANSWER = '@@quiz/SET_ANSWER',
  FETCH_SUCCESS = '@@quiz/FETCH_SUCCESS',
  FETCH_ERROR = '@@quiz/FETCH_ERROR'
}

// Declare state types with `readonly` modifier to get compile time immutability.
export interface QuizState {
  readonly loading: boolean
  readonly data: Quiz[]
  readonly answer: number[]
  readonly errors?: string
}
