import React from 'react'

export default class Auth extends React.Component {
  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo)
  }

  render() {
    return  this.props.children
  }
}
