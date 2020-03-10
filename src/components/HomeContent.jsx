import React, { Component } from 'react';

class HomeContent extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default HomeContent;
