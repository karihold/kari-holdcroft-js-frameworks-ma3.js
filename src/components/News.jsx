import React, { Component, Fragment } from 'react';
import Heading from './Heading';
import NewsList from './NewsList';

class News extends Component {
  render() {
    return (
      <Fragment>
        <Heading content="Welcome to News" />
        <NewsList />
      </Fragment>
    );
  }
}

export default News;
