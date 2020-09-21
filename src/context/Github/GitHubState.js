import React, { useReducer } from 'react'
import { GithubContext } from './githubcontext'
import { alertReducer } from './githubReducer'
import axios from 'axios'
import {
  SET_LOADING,
  SEARCH_USER,
  GET_USER,
  GET_REPOS,
  CLEAR_USER
} from '../types'


const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET
const withCredential = url => url + `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`


export default function GitHubState({ children }) {
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: []
  }
  const [state, dispatch] = useReducer(alertReducer, initialState)


  // dispatch to props
  const setLoading = function () {
    dispatch({ type: SET_LOADING })
  }

  const clearUsers = function () {
    dispatch({ type: CLEAR_USER })
  }

  const getRepos = async function (name) {
    setLoading()
    const res = await axios.get(withCredential(`https://api.github.com/users/${name}/repos?per_page=5&`))
    dispatch({
      type: GET_REPOS, payload: res.data
    })
  }

  const getUser = async function (name) {
    setLoading()
    const res = await axios.get(withCredential(`https://api.github.com/users/${name}?`))
    dispatch({
      type: GET_USER, payload: res.data
    })
  }

  const search = async function search(name) {
    setLoading()
    let res = await axios.get(withCredential(`https://api.github.com/search/users?q=${name}&`))
    dispatch({
      type: SEARCH_USER, payload: res.data.items
    })
  }
  

  const stateValue = {
    search,
    getUser,
    getRepos,
    clearUsers,
    setLoading
  }
  stateValue.github = state

  return (
    <GithubContext.Provider value={stateValue}>
      {children}
    </GithubContext.Provider>
  );
}