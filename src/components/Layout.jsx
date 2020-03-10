import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import Login from './Login';
import Home from './Home';
import News from './News';

class Layout extends Component {
  render() {
    return (
      <Router>
        <nav>
          <NavLink className="nav-link" to="/" exact>
            Home
          </NavLink>
          <NavLink className="nav-link" to="/news">
            News
          </NavLink>
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/news" component={News} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default Layout;
