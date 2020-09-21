import React, { useContext } from 'react'
import { AlertContext } from '../context/Alert/alertContext'
import { CSSTransition } from 'react-transition-group'

export default function Alert(props) {
  const context = useContext(AlertContext)
  
  const type = context.alert?.type

  return (
    <CSSTransition in={!!context.alert} timeout={300} unmountOnExit classNames="alert" appear mountOnEnter>
      <div className={`alert alert-${type || 'warning'} alert-dismissible`} role="alert">
        {(context.alert && context.alert.text) || '...'}
        <button type="button" className="close" aria-label="Close" onClick={context.hide}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </CSSTransition>
  );
}