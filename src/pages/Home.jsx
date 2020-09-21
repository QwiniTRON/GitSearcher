import React, { useContext, useEffect } from 'react'
import { GithubContext } from '../context/Github/githubcontext'
import {AlertContext} from '../context/Alert/alertContext'

import Search from '../components/Search'
import Card from '../components/Card'
import Loader from '../components/Loader'

export default function Home(props) {
  const {github, ...githubState} = useContext(GithubContext)
  const {alert, ...alertState} = useContext(AlertContext)

  // чистка alert перед переходом
  useEffect(() => () => alertState.hide(), [])


  let usersTemplate
  if(github.users.length === 0) usersTemplate = <p className="col">Ничего не нашлось</p>
  else {
    usersTemplate = github.users.map((user) => (
      <div key={user.id} className="col-6 col-sm-4 col-md-3 col-xl-2 mb-4">
        <Card user={user} />
      </div>
    ))
  }

  return (
    <>
      <Search />
      <div className="row">
        {github.loading ? <Loader /> : usersTemplate}
      </div>
    </>
  );
}