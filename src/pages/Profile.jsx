import React, { useContext, useEffect } from 'react'
import { GithubContext } from '../context/Github/githubcontext'
import Loader from '../components/Loader'
import { Link, useParams } from 'react-router-dom'
import Repos from '../components/Repos'

export default function Profile({ match }) {
  const { github, ...githubState } = useContext(GithubContext)
  const params = useParams()

  const userLogin = params.id
  useEffect(() => {
    githubState.getUser(userLogin)
    githubState.getRepos(userLogin)
  }, [])

  if (github.loading) return <div className="row"><Loader /></div>

  const {
    name, company, avatar_url, location, bio, blog,
    login, html_url, followers, public_repos, public_gists,
    following
  } = github.user

  return (
    <div className="row">
      <Link to="/" className="btn btn-link"> на главную </Link>
      <div className="w-100"></div>
      <div className="col">
        <div className="row">
          <div className="col-md-auto text-center">
            <img className="mw-100 rounded-left" src={avatar_url} alt={name} />
            <h1>{name}</h1>
            {location && <p>Местоположение: {location}</p>}
          </div>

          <div className="col">
            {bio && <>
              <h3 className="ff-new-courier">Биография: </h3>
              <p>{bio}</p>
            </>}

            <ul>
              {login && <li>
                <strong>Username: </strong> {login}
              </li>}

              {company && <li>
                <strong>Компания: </strong> {company}
              </li>}

              {blog && <li>
                <strong>Website: </strong> {blog}
              </li>}
            </ul>

            <div className="badge badge-primary">Подписчики: {followers}</div>
            <div className="badge badge-info ml-1">Подписок: {following}</div>
            <div className="badge badge-success ml-1">Репозитории: {public_repos}</div>
            <div className="badge badge-dark ml-1">Gists: {public_gists}</div>

            <div className="mt-2">
              <a href={html_url} className="btn btn-secondary" rel="noopener noreferrer" target="_blank">
                Открыть профиль
              </a>
            </div>

            <hr/>

            <Repos repos={github.repos} />
          </div>
        </div>
      </div>
    </div>
  );
}