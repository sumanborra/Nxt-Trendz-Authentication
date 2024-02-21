// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {userName: '', password: '', errorMessage: false}

  success = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {userName, password}
    console.log(userDetails)
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.success()
      this.setState({errorMessage: false,userName:"",password:""})
    } else {
      this.setState({errorMessage: true})
    }
  }

  changeUserName = event => {
    this.setState({userName: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  userNameFeildsForm = () => {
    const {userName} = this.state
    return (
      <>
        <label className="label-text-form" htmlFor="userName">
          USERNAME
        </label>
        <br />
        <input
          type="text"
          id="userName"
          value={userName}
          className="user-name-input"
          placeholder="Username"
          onChange={this.changeUserName}
        />
      </>
    )
  }

  passwordFiels = () => {
    const {password} = this.state
    return (
      <>
        <label className="label-text-form" htmlFor="password">
          PASSWORD
        </label>
        <br />
        <input
          type="password"
          value={password}
          id="password"
          className="user-name-input"
          placeholder="Password"
          onChange={this.changePassword}
        />
      </>
    )
  }

  render() {
    const {errorMessage} = this.state
    return (
      <div className="LoginForm-page-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-form-image"
        />
        <form className="form-details-container" onSubmit={this.submitForm}>
          <div className="container-of-form">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo-inside-form"
            />
            <br />
            <br />
            {this.userNameFeildsForm()}
          </div>
          <div className="container-of-form">{this.passwordFiels()}</div>
          <br />
          <br />
          <button type="submit" className="submit-form-button">
            Login
          </button>
          {errorMessage ? (
            <p className="error-msg">username and password does not match</p>
          ) : (
            ''
          )}
        </form>
      </div>
    )
  }
}
export default LoginForm
