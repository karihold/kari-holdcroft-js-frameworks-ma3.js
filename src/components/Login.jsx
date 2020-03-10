import React, { Component, Fragment } from 'react';
import LoginForm from './LoginForm';
import Heading from './Heading';

class Login extends Component {
  render() {
    return (
      <Fragment>
        <Heading content="Welcome to Log In" />
        <LoginForm />
      </Fragment>
    );
  }
}

export default Login;
