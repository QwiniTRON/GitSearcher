import {
  CLEAR_USER,
  GET_REPOS,
  GET_USER,
  SEARCH_USER,
  SET_LOADING
} from '../types'

const handlers = {
  [CLEAR_USER]: state => ({...state, users: []}),

  [GET_REPOS]: (state, {payload}) => ({...state, repos: payload, loading: false}),

  [GET_USER]: (state, {payload}) => ({...state, user: payload, loading: false}),

  [SEARCH_USER]: (state, {payload}) => ({...state, users: payload, loading: false}),

  [SET_LOADING]: state => ({...state, loading: true}),
  DEFAULT: state => state
}

export const alertReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}