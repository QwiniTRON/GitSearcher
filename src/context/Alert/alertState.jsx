import React, { useReducer } from 'react';
import { AlertContext } from './alertContext';
import {alertReducer} from './alertReducer';
import {
  ALERT_HIDE,
  ALERT_SHOW
} from '../types';

export default function AlertState (props) {
  const [alertState, dispatch] = useReducer(alertReducer, null);

  const hide = () => dispatch({ type: ALERT_HIDE });
  
  const show = (alert) => dispatch({ type: ALERT_SHOW, payload: alert})

  const stateValue = {
    hide,
    show,
    alert: alertState
  };

  return (
    <AlertContext.Provider value={stateValue}>
      {props.children}
    </AlertContext.Provider>
  );
}