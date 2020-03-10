import React, { Component, Fragment } from 'react';
import HomeContent from './HomeContent';
import Heading from './Heading';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Heading content="Welcome to Home" />
        <HomeContent>
          <p>Fusce ut nunc consectetur elit tempor tempor.</p>
          <p>Fusce ut nunc consectetur elit tempor tempor.</p>
          <p> Consectetur adipiscing elit.</p>
        </HomeContent>
      </Fragment>
    );
  }
}

export default Home;
