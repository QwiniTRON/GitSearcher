import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/Alert/alertContext'
import {GithubContext} from '../context/Github/githubcontext'

export default function Search(props) {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const github = useContext(GithubContext)

  const keyPressHandler = (event) => {
    if (event.key !== 'Enter') return

    const text = value.trim()
    if (!text.length) {
      alert.show({ text: 'Введите ник', type: 'danger' })
      github.clearUsers()
    } else {
      github.search(text)
      alert.hide()
    }
  }

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Введите ник пользователя"
        onKeyPress={keyPressHandler}
        value={value}
        onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}